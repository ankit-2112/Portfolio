let gmailButton = document.getElementById("gmail-me");
let linkedinButton = document.getElementById("linkedin");
let whatsappButton = document.getElementById("whatsapp-me");
let githubuButton = document.getElementById("github");

gmailButton.addEventListener("click",function(){
    console.log("gmail clicked");
    const email = "ankitgupta211299@gmail.com";
    const subject = "Hello Ankit";
    const body = "I would like to get in touch";

    // Construct the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirect to the mailto link
    window.open(mailtoLink,"_self");
});
linkedinButton.addEventListener("click",function(){
    console.log("linkedIn clicked");
    window.open("https://www.linkedin.com/in/an-ki-it","_blank");
});
whatsappButton.addEventListener("click",function(){
    console.log("whatsapp clicked");
    window.open("https://wa.link/gcbvfx","_blank");
});
githubuButton.addEventListener("click",function(){
    console.log("github clicked");
    window.open("https://github.com/ankit-2112","_blank");
});