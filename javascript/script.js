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
