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