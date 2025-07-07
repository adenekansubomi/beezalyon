
  document.querySelector('.read-more').addEventListener('click', function(e) {
    e.preventDefault();
    const moreText = document.querySelector('.more-text');
    const linkText = this.querySelector('span');

    if (moreText.style.display === 'none') {
      moreText.style.display = 'inline';
      linkText.textContent = 'Read Less';
    } else {
      moreText.style.display = 'none';
      linkText.textContent = 'Read More';
    }
  });


  document.querySelector('.read-more2').addEventListener('click', function(e) {
    e.preventDefault();
    const moreText2 = document.querySelector('.more-text2');
    const linkText2 = this.querySelector('span');

    if (moreText2.style.display === 'none') {
      moreText2.style.display = 'inline';
      linkText2.textContent = 'Read Less';
    } else {
      moreText2.style.display = 'none';
      linkText2.textContent = 'Read More';
    }
  });


  const slider = document.getElementById('slider');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function updateSlider() {
    const offset = currentIndex * (100 / 3);
    slider.style.transform = `translateX(-${offset}%)`;

    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === currentIndex + 1) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    if (currentIndex < slides.length - 3) {
      currentIndex++;
      updateSlider();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }
  updateSlider();

const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

 
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });
