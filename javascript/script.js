let burgerIcons = document.querySelectorAll(".burger-icon");
let burgerLinks = document.querySelector(".burger-links");
let fixedNav = document.querySelector(".fixed-nav");

burgerIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    burgerLinks.classList.toggle("open");
  });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    fixedNav.classList.add("active");
  } else {
    fixedNav.classList.remove("active");
  }
});

xml = new XMLHttpRequest();

xml.open("GET", "https://jsonplaceholder.typicode.com/posts");
xml.send();

// Sign IN And Sign UP Pages

xml.addEventListener("readystatechange", () => {
  if (xml.readyState === 4 && xml.status === 200) {
    let userPosts = {};
    let data = JSON.parse(xml.response);
    data.forEach((post) => {
      userPosts[post.userId] = userPosts[post.userId] || [];
      userPosts[post.userId].push(post);
    });
    console.log(userPosts);
  }
});

let loginWall = document.getElementById("wall");
let loginWallSmall = document.getElementById("wall-small");
let loginForm = document.getElementById("login-form");
let signUpForm = document.getElementById("signup-form");
let loginBtn = document.getElementById("login-btn");
let signUpBtn = document.getElementById("signup-btn");
console.log(loginWall, signUpBtn);
if (signUpBtn) {
  signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginWall.classList.remove("wall-right");
    loginWallSmall.classList.remove("wall-right");
    setTimeout(() => {
      loginForm.classList.remove("opened");
      signUpForm.classList.add("opened");
      loginWallSmall.classList.remove("wall-right");
      loginWallSmall.classList.add("wall-left");
      setTimeout(() => {
        loginWallSmall.classList.remove("animate");
        loginWallSmall.classList.remove("wall-left");
        loginWallSmall.classList.add("wall-right");
        setTimeout(() => {
          loginWallSmall.classList.add("animate");
        }, 100);
      }, 700);
    }, 700);
  });
}
if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginWall.classList.add("wall-right");
    loginWallSmall.classList.remove("wall-right");
    setTimeout(() => {
      signUpForm.classList.remove("opened");
      loginForm.classList.add("opened");
      loginWallSmall.classList.remove("wall-right");
      loginWallSmall.classList.add("wall-left");
      setTimeout(() => {
        loginWallSmall.classList.remove("animate");
        loginWallSmall.classList.remove("wall-left");
        loginWallSmall.classList.add("wall-right");
        setTimeout(() => {
          loginWallSmall.classList.add("animate");
        }, 100);
      }, 700);
    }, 700);
  });
}

// Neon Cursor In Landing Page Only

let landingPage = document.querySelector(".landing-page");
console.log(landingPage);
if (landingPage) {
  console.log("hello");
  let cursor = document.querySelector(".cursor");
  landingPage.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });
  landingPage.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
  landingPage.addEventListener("mousemove", (e) => {
    setTimeout(() => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    }, 50);
  });
}
