/**============== Likes & Dislikes ======================== */
const likeButton = document.querySelector('.like-btn');
const DislikeButton = document.querySelector('.dislike-btn');

let likeCount = 0;
let DislikeCount = 0;

likeButton.addEventListener("click" , ()=>{
    const spanElement = likeButton.querySelector("span");
    const likeElement = likeButton.querySelector("i");

    likeCount++;
    spanElement.textContent = likeCount;
    spanElement.style.color = "#0ef";
    likeElement.style.color = "#0ef";

})
DislikeButton.addEventListener("click" , ()=>{
    const spanElement = DislikeButton.querySelector("span");
    const dislikeElement = DislikeButton.querySelector("i");

    DislikeCount++;
    spanElement.textContent = DislikeCount;
    spanElement.style.color = "#0ef";
    dislikeElement.style.color = "#0ef";
})


/**============== Share Content Display ======================== */
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openPopupButton.addEventListener("click", () => {
    popup.style.display = "flex"; // Show the popup
});

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none"; // Hide the popup
});


/**============== Copy share URL ======================== */
const copy_btn = document.querySelector('.copy-url-btn');
copy_btn.addEventListener("click", () => {
    alert("The Link Was Copied !")
});


/**============== Video Show & video Info======================== */
const video_Show = document.querySelector('.video-show iframe');
const video_info_title = document.querySelector(".video-title");

document.addEventListener("click", function() {
    const lessons = document.querySelectorAll(".lesson-box");

    lessons.forEach(function (lesson) {
        lesson.addEventListener("click", () => {
            video_info_title.textContent = lesson.querySelector(".lesson-name").textContent;
            video_Show.src = lesson.querySelector(".lesson-url").textContent;
        });
    });
});




/**==============  ======================== */


/**==============  ======================== */


/**==============  ======================== */


/**==============  ======================== */


/**============== Add Lesson ======================== */
function addLesson(imgSrc, lessonName, lessonURL) {
    const lessonBox = document.createElement("div");
    lessonBox.classList.add("lesson-box");

    //lesson img
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "lesson-photo";

    //lesson name
    const span = document.createElement("span");
    span.classList.add("lesson-name");
    span.textContent = lessonName;
    
    //lesson url
    const url = document.createElement("span");
    url.classList.add("lesson-url");
    url.textContent = lessonURL;
    url.style.display = "none";

    lessonBox.appendChild(img);
    lessonBox.appendChild(span);
    lessonBox.appendChild(url);
    const lessonsContainer = document.querySelector(".lessons-container");
    lessonsContainer.appendChild(lessonBox);
}

addLesson("img/logo/1.png", "Lesson 1",  "https://www.youtube.com/embed/rZiBN72thP0");
addLesson("img/logo/1.png", "Lesson 2",  "https://www.youtube.com/embed/rZiBN72thP0");
addLesson("img/logo/1.png", "Lesson 3",  "https://www.youtube.com/embed/rZiBN72thP0");
addLesson("img/logo/1.png", "Lesson 4",  "https://www.youtube.com/embed/rZiBN72thP0");
addLesson("img/logo/1.png", "Lesson 5",  "https://www.youtube.com/embed/rZiBN72thP0");
addLesson("img/logo/1.png", "Lesson 6",  "https://www.youtube.com/embed/rZiBN72thP0");
addLesson("img/logo/1.png", "Lesson 7",  "https://www.youtube.com/embed/rZiBN72thP0");
addLesson("img/logo/1.png", "Lesson 8",  "https://www.youtube.com/embed/rZiBN72thP0");
addLesson("img/logo/1.png", "Lesson 9",  "https://www.youtube.com/embed/rZiBN72thP0");
addLesson("img/logo/1.png", "Lesson 10", "https://www.youtube.com/embed/rZiBN72thP0");
