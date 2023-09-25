let recentButton = document.querySelector("main .filter > .recent");
let popularButton = document.querySelector("main .filter > .popular");
let recentArticles = document.querySelector("main .news-column > .recent-news");
let popularArticles = document.querySelector("main .news-column > .popular-news");

function changeToPopular() {
  if (recentButton.classList.contains("active")) {
    recentButton.classList.remove("active");
    recentButton.classList.add("inactive");
    popularButton.classList.remove("inactive");
    popularButton.classList.add("active");
    recentArticles.style.display = "none";
    popularArticles.style.display = "block";
  };
};

function changeToRecent() {
  if (popularButton.classList.contains("active")) {
    recentButton.classList.add("active");
    recentButton.classList.remove("inactive");
    popularButton.classList.add("inactive");
    popularButton.classList.remove("active");
    recentArticles.style.display = "block";
    popularArticles.style.display = "none";
  };
};