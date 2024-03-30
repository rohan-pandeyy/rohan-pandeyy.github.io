function expandCard(card) {
    card.style.backgroundColor = '#d9b061';
  
    const nameElement = card.querySelector('.name');
    if (nameElement) nameElement.style.transform = 'translateY(-10px)';
  
    const skillsElement = card.querySelector('.skills');
    if (skillsElement) {
      skillsElement.style.transform = 'translateY(-10px)';
      skillsElement.textContent = 'Worked for a Startup & an Active ML developer';
    }
  
    const bottomRightIcon = card.querySelector('.bottom-right-icon');
    if (bottomRightIcon) {
      bottomRightIcon.style.width = '100%';
      bottomRightIcon.style.height = '100%';
    }
  }
  
function shrinkCard(card) {
  card.style.backgroundColor = '#333639';
  
  const nameElement = card.querySelector('.name');
  if (nameElement) nameElement.style.transform = 'translateY(0)';
  
  const skillsElement = card.querySelector('.skills');
  if (skillsElement) {
    skillsElement.style.transform = 'translateY(0)';
    skillsElement.textContent = 'Frontend | Python | AIML';
  }
  
  const bottomRightIcon = card.querySelector('.bottom-right-icon');
  if (bottomRightIcon) {
    bottomRightIcon.style.width = '40px';
    bottomRightIcon.style.height = '40px';
  }
}

var cardElement = document.querySelector(".resume-card");

if (cardElement) {
  cardElement.addEventListener("mouseenter", function() {
    var iconElement = this.querySelector(".fa.fa-address-card-o");
    if (iconElement) {
      iconElement.classList.remove("fa-address-card-o");
      iconElement.classList.add("fa-address-card");
      iconElement.style.color = "#000";
    } else {
      console.error("Icon element not found inside card!");
    }
  });

  cardElement.addEventListener("mouseleave", function() {
    var iconElement = this.querySelector(".fa.fa-address-card");
    if (iconElement) {
      iconElement.classList.remove("fa-address-card");
      iconElement.classList.add("fa-address-card-o");
      iconElement.style.color = "#ffffe4";
    }
  });
} else {
  console.error("Card element not found!");
}

var linkedinCards = document.querySelectorAll(".linkedin-card");

if (linkedinCards.length > 0) {
  for (var i = 0; i < linkedinCards.length; i++) {
    var linkedinCard = linkedinCards[i];

    linkedinCard.addEventListener("mouseenter", function() {
      var iconElement = this.querySelector(".fa.fa-linkedin");
      if (iconElement) {
        iconElement.classList.remove("fa-linkedin");
        iconElement.classList.add("fa-linkedin-square");
        iconElement.style.color = "#fff";
        iconElement.style.fontSize = "70px";
      } else {
        console.error("Icon element not found inside card!", this);
      }
    });

    linkedinCard.addEventListener("mouseleave", function() {
      var iconElement = this.querySelector(".fa.fa-linkedin-square");
      if (iconElement) {
        iconElement.classList.remove("fa-linkedin-square");
        iconElement.classList.add("fa-linkedin");
        iconElement.style.color = "#ffffe4";
        iconElement.style.fontSize = "48px"; 
      }
    });
  }
} else {
  console.error("No card elements found with class 'linkedin-card'!");
}

const videoElement = document.getElementById('projectVideo');
const projectOne = document.querySelector('.project-one');

projectOne.addEventListener('mouseover', () => {
  videoElement.play();
});

projectOne.addEventListener('mouseout', () => {
  videoElement.pause();
  videoElement.currentTime = 0;
});

const infoContainer = projectOne.querySelector('.additional-info-project-1');
const h2 = infoContainer.querySelector('h2');
const p = infoContainer.querySelector('p');

projectOne.addEventListener('mouseover', () => {
  h2.style.transition = 'transform 0.3s ease-in-out';
  h2.style.transform = 'translateY(-20px)';
  p.style.opacity = 0;
  p.style.transition = 'opacity 0.3s ease-in-out';
});

projectOne.addEventListener('mouseout', () => {
  h2.style.transition = 'transform 0.3s ease-in-out';
  h2.style.transform = 'translateY(0)';
  p.style.opacity = 1;
  p.style.transition = 'opacity 0.3s ease-in-out';
});

function moveTitleUp() {
  var title = document.querySelector('.project-two .title');
  title.style.transition = 'margin-top 0.3s ease-in-out';
  title.style.marginTop = '-20px';
  
  var tagline = document.querySelector('.project-two .tagline');
  tagline.style.transition = 'opacity 0.3s ease-in-out';
  tagline.style.opacity = '0';
}

function resetTitle() {
  var title = document.querySelector('.project-two .title');
  title.style.transition = 'margin-top 0.3s ease-in-out';
  title.style.marginTop = '0';
  
  var tagline = document.querySelector('.project-two .tagline');
  tagline.style.transition = 'opacity 0.3s ease-in-out';
  tagline.style.opacity = '1';
}

const videoElement2 = document.getElementById('projectVideo2');
const projectTwo = document.querySelector('.project-two');

projectTwo.addEventListener('mouseover', () => {
  videoElement2.play();
  videoElement2.style.transition = 'transform 0.3s ease-in-out';
  videoElement2.style.transform = 'translateY(-10px)';
});

projectTwo.addEventListener('mouseout', () => {
  videoElement2.pause();
  videoElement2.currentTime = 0;
  videoElement2.style.transition = 'transform 0.3s ease-in-out';
  videoElement2.style.transform = 'translateY(0)';
});

const videoElement3 = document.getElementById('projectVideo3');
const projectThree = document.querySelector('.project-three');

projectThree.addEventListener('mouseover', () => {
  videoElement3.play();
});

projectThree.addEventListener('mouseout', () => {
  videoElement3.pause();
  videoElement3.currentTime = 0;
});

const infoContainer3 = projectThree.querySelector('.project-three .content');
const threeTitle = infoContainer3.querySelector('.project-three .title');
const threeTagline = infoContainer3.querySelector('.project-three .tagline');

projectThree.addEventListener('mouseover', () => {
  threeTitle.style.transition = 'transform 0.3s ease-in-out';
  threeTitle.style.transform = 'translateY(-20px)';
  threeTagline.style.opacity = 0;
  threeTagline.style.transition = 'opacity 0.3s ease-in-out';
});

projectThree.addEventListener('mouseout', () => {
  threeTitle.style.transition = 'transform 0.3s ease-in-out';
  threeTitle.style.transform = 'translateY(0)';
  threeTagline.style.opacity = 1;
  threeTagline.style.transition = 'opacity 0.3s ease-in-out';
});

const projectFour = document.querySelector('.project-four');
const infoContainer4 = projectFour.querySelector('.project-four .content');
const fourTitle = infoContainer4.querySelector('.project-four h2');
const fourTagline = infoContainer4.querySelector('.project-four p');

projectFour.addEventListener('mouseover', () => {
  fourTitle.style.transition = 'transform 0.3s ease-in-out';
  fourTitle.style.transform = 'translateY(-20px)';
  fourTagline.style.opacity = 0;
  fourTagline.style.transition = 'opacity 0.3s ease-in-out';
});

projectFour.addEventListener('mouseout', () => {
  fourTitle.style.transition = 'transform 0.3s ease-in-out';
  fourTitle.style.transform = 'translateY(0)';
  fourTagline.style.opacity = 1;
  fourTagline.style.transition = 'opacity 0.3s ease-in-out';
});

const projectFive = document.querySelector('.project-five');
const infoContainer5 = projectFive.querySelector('.project-five .content');
const fiveTitle = infoContainer5.querySelector('.project-five h2');
const fiveTagline = infoContainer5.querySelector('.project-five p');

projectFive.addEventListener('mouseover', () => {
  fiveTitle.style.transition = 'transform 0.3s ease-in-out';
  fiveTitle.style.transform = 'translateY(-20px)';
  fiveTagline.style.opacity = 0;
  fiveTagline.style.transition = 'opacity 0.3s ease-in-out';
});

projectFive.addEventListener('mouseout', () => {
  fiveTitle.style.transition = 'transform 0.3s ease-in-out';
  fiveTitle.style.transform = 'translateY(0)';
  fiveTagline.style.opacity = 1;
  fiveTagline.style.transition = 'opacity 0.3s ease-in-out';
});

const projectSix = document.querySelector('.project-six');
const infoContainer6 = projectSix.querySelector('.project-six .content');
const sixTitle = infoContainer6.querySelector('.project-six h2');
const sixTagline = infoContainer6.querySelector('.project-six p');

projectSix.addEventListener('mouseover', () => {
  sixTitle.style.transition = 'transform 0.3s ease-in-out';
  sixTitle.style.transform = 'translateY(-20px)';
  sixTagline.style.opacity = 0;
  sixTagline.style.transition = 'opacity 0.3s ease-in-out';
});

projectSix.addEventListener('mouseout', () => {
  sixTitle.style.transition = 'transform 0.3s ease-in-out';
  sixTitle.style.transform = 'translateY(0)';
  sixTagline.style.opacity = 1;
  sixTagline.style.transition = 'opacity 0.3s ease-in-out';
});

window.onload = function() {
  document.querySelector('.all-content').classList.add('move-up');
};
