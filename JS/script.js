console.log("Working script");
let resume_button = document.getElementById("resume-button");
resume_button.addEventListener("click",function(){
    console.log("Fetching resume ...");
    window.open("https://drive.google.com/file/d/1NK7OE3RSh6wRewbP5iDMays5uTIk0Kn9/view?usp=sharing","_blank");
    console.log("resume fechted!")
});

const text = "Ankit Gupta";
const typingSpeed = 100; // Speed in milliseconds
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("my-name").textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  }
}

window.onload = function() {
  type();
};
