// Generates public/Rohan_Pandey_CV.pdf from src/data/cv.md.
// Uses an installed Chrome/Edge in headless mode, so no extra downloads.
// Set CHROME_PATH to override browser detection. Fails soft if none is found.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { marked } from "marked";

const root = process.cwd();
const cvPath = path.join(root, "src", "data", "cv.md");
const outPath = path.join(root, "public", "Rohan_Pandey_CV.pdf");

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.warn(
    "[cv-pdf] No Chrome/Edge found (set CHROME_PATH). Skipping PDF generation."
  );
  process.exit(0);
}

const body = marked
  .parse(readFileSync(cvPath, "utf-8"), { breaks: true })
  .replace(/Present/g, '<span class="present">Present</span>');
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Rohan Pandey - CV</title>
<style>
  @page { size: A4; margin: 14mm 15mm; }
  body { font-family: "Segoe UI", Helvetica, Arial, sans-serif; font-size: 10pt; line-height: 1.4; color: #111; }
  h1 { font-size: 20pt; margin: 0 0 4pt; }
  h2 { font-size: 12pt; margin: 12pt 0 4pt; padding-bottom: 2pt; border-bottom: 1px solid #999; text-transform: uppercase; letter-spacing: .04em; }
  h3 { font-size: 10.5pt; margin: 8pt 0 1pt; }
  p { margin: 2pt 0; }
  ul { margin: 2pt 0 4pt; padding-left: 16pt; }
  li { margin: 1pt 0; }
  a { color: #0645ad; text-decoration: underline; }
  .present { background: #e4e4e7; border-radius: 999px; padding: 0 5pt; }
  h2, h3 { break-after: avoid; }
  li, p { break-inside: avoid; }
</style></head><body>${body}</body></html>`;

const tmp = mkdtempSync(path.join(tmpdir(), "cv-pdf-"));
try {
  const htmlFile = path.join(tmp, "cv.html");
  writeFileSync(htmlFile, html);
  mkdirSync(path.dirname(outPath), { recursive: true });
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--user-data-dir=${path.join(tmp, "profile")}`,
      `--print-to-pdf=${outPath}`,
      pathToFileURL(htmlFile).href,
    ],
    { stdio: "ignore", timeout: 60000 }
  );
  console.log(`[cv-pdf] Wrote ${path.relative(root, outPath)}`);
} catch (err) {
  console.warn("[cv-pdf] PDF generation failed:", err.message);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
