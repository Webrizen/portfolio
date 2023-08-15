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