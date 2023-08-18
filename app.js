var i = 0;
var texts = [
  'Full Stack Developer.',
  'AWS Certified.',
  'Creative Code Enthusiast.',
  'Continuous Learner.',
  'Innovative Thinker.'
];
var currentText = 0;
var speed = 100;

function typeWriter() {
  if (i < texts[currentText].length) {
    document.getElementById("demo").innerHTML += texts[currentText].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (i > 0) {
    document.getElementById("demo").innerHTML = texts[currentText].substring(0, i - 1);
    i--;
    setTimeout(eraseText, speed / 2);
  } else {
    currentText = (currentText + 1) % texts.length;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 1000);


const themeIcon = document.getElementById("theme");
    const body = document.body;
    const darkTheme = "dark-theme";
    const lightTheme = "light-theme";
    
    function toggleTheme() {
      if (body.classList.contains(darkTheme)) {
        body.classList.remove(darkTheme);
        themeIcon.innerHTML = '<i class="bx bxs-sun"></i>';
      } else {
        body.classList.add(darkTheme);
        themeIcon.innerHTML = '<i class="bx bxs-moon"></i>';
      }
    }
    
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (userPrefersDark) {
      body.classList.add(darkTheme);
      themeIcon.innerHTML = '<i class="bx bxs-moon"></i>';
    }
    
    themeIcon.addEventListener("click", toggleTheme);

    document.addEventListener("DOMContentLoaded", function () {
      const timelineCards = document.querySelectorAll(".timeline-card");
      const projectImage = document.getElementById("projectImage");
    
      const observerOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0.5
      };
  
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              const card = entry.target;
              if (entry.isIntersecting) {
                  const newImageSrc = card.getAttribute("data-image-src");
                  if (newImageSrc) {
                      projectImage.style.opacity = "0"; // Fade out the image
                      setTimeout(() => {
                          projectImage.src = newImageSrc;
                          projectImage.style.opacity = "1"; // Fade in the new image
                      }, 300); // Delay in milliseconds for smooth animation
                  }
                  const icon = card.querySelector(".timeline-icon i");
                  if (icon) {
                      icon.style.color = "blue";
                  }
              } else {
                  const icon = card.querySelector(".timeline-icon i");
                  if (icon) {
                      icon.style.color = ""; // Reset to default color
                  }
              }
          });
      }, observerOptions);
  
      timelineCards.forEach(card => {
          observer.observe(card);
      });
  });  
  

  document.getElementById('year').innerHTML = new Date().getFullYear();
  document.getElementById('year-next').innerHTML = new Date().getFullYear();

  document.addEventListener("scroll", onScroll);

const timelineHeader = document.getElementById('timeline-header');
const timelineHeaderRect = timelineHeader.getBoundingClientRect();

function onScroll(){
	const timelineHeaderTop = timelineHeaderRect.top - window.pageYOffset;
	  
  if(timelineHeaderTop < 0){
    timelineHeader.style.top = `${-timelineHeaderTop}px`;
  }else{
    timelineHeader.style.top = 0;
  }
}

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor-circle");
  cursor.classList.add("big-cursor");
  document.body.appendChild(cursor);

  const smallCursor = document.createElement("div");
  smallCursor.classList.add("cursor-circle");
  document.body.appendChild(smallCursor);

  document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX - cursor.clientWidth / 2 + "px";
      cursor.style.top = e.clientY - cursor.clientHeight / 2 + "px";

      smallCursor.style.left = e.clientX - smallCursor.clientWidth / 2 + "px";
      smallCursor.style.top = e.clientY - smallCursor.clientHeight / 2 + "px";
  });
});