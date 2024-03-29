const videoElement = document.getElementById('projectVideo');
videoElement.play();
videoElement.addEventListener('ended', () => {
    videoElement.play();
});

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