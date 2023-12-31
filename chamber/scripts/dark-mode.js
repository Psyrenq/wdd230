//dark-mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav ul li a");
const nav1 = document.querySelector(".nav-1 a");
const nav2 = document.querySelector(".nav-2 a");
const nav3 = document.querySelector(".nav-3 a");
const nav4 = document.querySelector(".nav-4 a");
const nav5 = document.querySelector("a.fa.fa-facebook");
const nav6 = document.querySelector("a.fa.fa-twitter");
const button = document.querySelector("#menu-button");
const join = document.querySelector("#join-now");
const date = document.querySelector(".date");
const footer = document.querySelector("footer");
const spotLight1 = document.querySelector(".spotlight-1");
const spotLight2 = document.querySelector(".spotlight-2");
const spotLight3 = document.querySelector(".spotlight-3");
const announcement = document.querySelector(".announcement");
const announcement1 = document.querySelector(".announcement-1");
const announcement2 = document.querySelector(".announcement-2");
const announcement3 = document.querySelector(".announcement-3");
const announcement4 = document.querySelector(".announcement-4");
const announcement5 = document.querySelector(".announcement-5");



modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("😎")) {
		main.style.background = "#2c2c2c";
		main.style.color = "#fff";
        button.style.background = "#2c2c2c";
        button.style.color = "#fff";
        join.style.background = "#1f1f1f";
        join.style.color = "#fff";
        announcement.style.background = "#2c2c2c";
        announcement.style.color = "#fff";
        announcement1.style.background = "#2c2c2c";
        announcement1.style.color = "#fff";
        announcement2.style.background = "#2c2c2c";
        announcement2.style.color = "#fff";
        announcement3.style.background = "#1f1f1f";
        announcement3.style.color = "#fff";
        announcement4.style.background = "#1f1f1f";
        announcement4.style.color = "#fff";
        announcement5.style.background = "#1f1f1f";
        announcement5.style.color = "#fff";
        date.style.background = "#1f1f1f";
		date.style.color = "#fff";
        body.style.background = "#000000";
		body.style.color = "#fff";
        header.style.background = "#2c2c2c";
		header.style.color = "#fff";
        
        spotLight1.style.background = "#1f1f1f";
        spotLight1.style.color ="#fff";
        spotLight2.style.background = "#1f1f1f";
        spotLight2.style.color ="#fff";
        spotLight3.style.background = "#1f1f1f";
        spotLight3.style.color ="#fff";
        footer.style.background = "#2c2c2c";
		footer.style.color = "#fff";
		modeButton.textContent = "😊";
	} else {
		main.style.background = "#faf8f0";
		main.style.color = "#000";
        button.style.background = "#faf8f0";
        button.style.color = "#000";
        join.style.background = "#faf8f0";
        join.style.color = "#000";
        announcement.style.background = "#faf8f0";
        announcement.style.color = "#683e3e";
        announcement1.style.background = "#faf8f0";
        announcement1.style.color = "#683e3e";
        announcement2.style.background = "#faf8f0";
        announcement2.style.color = "#683e3e";
        announcement3.style.background = "#ffebcd";
        announcement3.style.color = "#683e3e";
        announcement4.style.background = "#ffebcd";
        announcement4.style.color = "#683e3e";
        announcement5.style.background = "#ffebcd";
        announcement5.style.color = "#683e3e";
        date.style.background = "#ffebcd";
        date.style.color = "#000";
        body.style.background = "#eee";
		body.style.color = "#000";
        header.style.background = "#faf8f0";
		header.style.color = "#000";
      
        spotLight1.style.background = "#ffebcd";
        spotLight1.style.color ="#000";
        spotLight2.style.background = "#ffebcd";
        spotLight2.style.color ="#000";
        spotLight3.style.background = "#ffebcd";
        spotLight3.style.color ="#000";
        footer.style.background = "#faf8f0";
		footer.style.color = "#000";
		modeButton.textContent = "😎";
	}
});

 //©-River-Rhodes