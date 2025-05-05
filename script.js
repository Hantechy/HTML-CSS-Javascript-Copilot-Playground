document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll(".carousel-img");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    let index = 0;
    let timer;
  
    function showImage(idx) {
      imgs.forEach((img, i) => {
        img.classList.remove("active", "fade");
        if (i === idx) img.classList.add("active", "fade");
      });
    }
  
    function nextImage() {
      index = (index + 1) % imgs.length;
      showImage(index);
    }
  
    function prevImage() {
      index = (index - 1 + imgs.length) % imgs.length;
      showImage(index);
    }
  
    function startAutoSlide() {
      timer = setInterval(nextImage, 6000);
    }
  
    function resetTimer() {
      clearInterval(timer);
      startAutoSlide();
    }
  
    nextBtn.addEventListener("click", () => {
      nextImage();
      resetTimer();
    });
  
    prevBtn.addEventListener("click", () => {
      prevImage();
      resetTimer();
    });
  
    showImage(index);
    startAutoSlide();
  });