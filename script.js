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
    skillsElement.textContent = 'MERN | Python | AIML';
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