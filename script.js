console.log("Hello World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");
factList.innerHTML = "";

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");

    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

/*let voteinteresting = 23;
let votemindblowing = 9;
let votefalse = 4;
const vote1 = document.querySelector(".voteinteresting");
const vote2 = document.querySelector(".votemindblowing");
const vote3 = document.querySelector(".votefalse");
vote1.addEventListener("click", function () {
  voteinteresting++;
  console.log(voteinteresting);
});
vote2.addEventListener("click", function () {
  votemindblowing++;
  console.log(votemindblowing);
});
vote3.addEventListener("click", function () {
  votefalse++;
  console.log(votefalse);
});*/
