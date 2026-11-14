import { readFile } from "node:fs/promises";
import path from "node:path";
import { DATA } from "@/data/resume";

const FONT_DIR = path.join(process.cwd(), "src", "assets", "fonts");

/**
 * Fonts used only when rendering Open Graph images at build time.
 * Returns null if they can't be read so callers can fall back to defaults.
 */
export async function getOgFonts() {
  try {
    const [cabinetGrotesk, clashDisplay] = await Promise.all([
      readFile(path.join(FONT_DIR, "CabinetGrotesk-Medium.ttf")),
      readFile(path.join(FONT_DIR, "ClashDisplay-Semibold.ttf")),
    ]);
    return {
      cabinetGrotesk: cabinetGrotesk.buffer.slice(
        cabinetGrotesk.byteOffset,
        cabinetGrotesk.byteOffset + cabinetGrotesk.byteLength
      ) as ArrayBuffer,
      clashDisplay: clashDisplay.buffer.slice(
        clashDisplay.byteOffset,
        clashDisplay.byteOffset + clashDisplay.byteLength
      ) as ArrayBuffer,
    };
  } catch (error) {
    console.error("Failed to load OG fonts:", error);
    return null;
  }
}

const MIME: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

/**
 * Reads the avatar from /public and returns it as a data URI, so OG images
 * don't depend on the deployed site already serving the file.
 */
export async function getOgAvatar(): Promise<string | undefined> {
  if (!DATA.avatarUrl) return undefined;
  if (/^https?:\/\//.test(DATA.avatarUrl)) return DATA.avatarUrl;
  try {
    const file = path.join(process.cwd(), "public", DATA.avatarUrl);
    const buf = await readFile(file);
    const mime = MIME[path.extname(file).toLowerCase()] ?? "image/png";
    return `data:${mime};base64,${buf.toString("base64")}`;
  } catch (error) {
    console.error("Failed to load OG avatar:", error);
    return undefined;
  }
}
