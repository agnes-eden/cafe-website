function showCategory(id) {
    const sections = document.querySelectorAll('.products-wrapper');
    sections.forEach(section => {
      if (section.id === id) {
        section.style.display = 'block'; 
        setTimeout(() => {
          section.classList.add('active');
        }, 15); 
      } else {
        section.classList.remove('active');
        setTimeout(() => {
          section.style.display = 'none'; 
        }, 400); 
      }
    });
  }
  

  
