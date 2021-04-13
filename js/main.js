// posts
var post = document.querySelectorAll(".posts p");
var posts = document.querySelectorAll(".posts");
var nav = document.querySelectorAll(".postsNav li");

console.log(nav);

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function () {
    let postIndex = this.getAttribute("data-set");
    post.forEach((element) => {
      element.classList = "";
    });

    nav.forEach((element) => {
      element.classList = "";
    });

    post[postIndex - 1].className = "activePost";
    this.classList = "activePoint";
  });
}