
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollingSpeed: 300,
    autoScrolling: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
    afterLoad: function (origin, destination, direction) {
      var loadedSection = this;


    },
  });
});


// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});

let technology = {
  1: "JavaScript",
  2: "TypeScript",
  3: "Express.js",
  4: "Node.js",
  5: "ReactJs",
  6: "MongoDB",
  7: "PostgreSQL",
  8: "HTML",
  9: "CSS",
  10: "SASS/SCSS",
  11: "Telegram bot api",
};

let projects = [
  {
    name: "TODO APP",
    about:
      "A simple and effective task management tool built with React and Vite.js. This Todo App helps you manage your daily tasks with ease. Add tasks to your list, check them off as you complete them, and move completed tasks to the 'Done' section. Your tasks are stored locally, ensuring that you never lose track of what's important. Best of all, you can start using it immediately—no need to register or log in!",
    link: "https://github.com/Baxrullo777/todo-app.git",
    realLink:"https://baxa-todo-app.vercel.app/",
    tech: [5],
  },
  {
    name: "UZ-DONGJU PEINT KOMPANI BOT",
    about:
      " Developed Paint bot, a Node.js-based both using the Telegraph framework, designed to assist users in selecting and viewing paint color.",
    link: "#",
    realLink:"https://t.me/Uz_Dong_Ju_QB_bot",
    tech: [ 4, 6,11],
  },
  {
    name: "5baho.uz",
    about:
      "To enhance users' learning experience. The platform serves as a centralized hub where users can access, read, and download a wide range of educational materials, including books and PDF resources.Additionally, it facilitates interactive learning through various features.",
    link: "https://5-baxo.vercel.app/referat",
    realLink: "https://5-baxo.vercel.app/referat",

    tech: [6, 3,  5, 4, ],
  },
  {
    name: "Baha type game",
    about:
      "Developed a dynamic and engaging typing game using HTML, JavaScript, and CSS,providing users with an interactive and entertaining experience.",
    link: "https://github.com/Muhammadziyo-web/Online-video-courses",
    tech: [1,9,8],
  },
  {
    name: "Namoz vaqtlari",
    about:
      "This project utilizes a real-time API to display accurate and up-to-date daily and weekly prayer times for Uzbekistan's regions.",
    link: "https://github.com/baxaaka/Namoz-vaqtlari",
    realLink: "https://namoz-vaqtlari-baxa.netlify.app/",
    tech: [1, 8, 10],
  }
  
];

projects.forEach((e) => {
  let card = document.createElement("div");
  card.classList.add("project");
  card.innerHTML = `
					<h2>${e.name}</h2>
					<p>${e.about}</p>
					<div class="btn-wrapper">
          ${e.tech.map((e) => `<button>${technology[e]}</button>`)}
          
					</div>
          <div class="flex">
					<a target="_blank" href="${e.link}"><i class="fa-brands fa-github"></i> Code</a>
          ${e.realLink
      ? `<a target="_blank" href="${e.realLink}"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open</a>`
      : ""
    }
          </div>
          `;

  document.querySelector(".project-wrapper").appendChild(card);
});


document.querySelector("#contactForm").addEventListener('submit', (e) => {
  e.preventDefault()
  fetch(
    `https://api.telegram.org/bot6312263274:AAGQ6PKm-YflSDjEbcz48fl9pbyNozeGUGY/sendMessage?chat_id=1939087676&text=Name: ${e.target[0].value}, Email: ${e.target[1].value}, Message: ${e.target[2].value} `
  );
  e.target[0].value = ''
  e.target[1].value = ''
  e.target[2].value = ''

})