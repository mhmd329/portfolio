// SHOW LINKS
const showLinks = (icon, listLinks) => {
  const toggle = document.querySelector(icon);
  const nav = document.querySelector(listLinks);

  toggle.addEventListener("click", () => nav.classList.toggle("show"));

  document.addEventListener("click", (e) => {
    e.target.className !== "icon" && e.target.className !== "icon-shape"
      ? nav.classList.remove("show")
      : false;
  });
};

showLinks(".icon", ".list-links");

// SHOW LINKS ACTIONS
function showActions() {
  const links = document.querySelectorAll(".list-links a");
  links.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");

  const nav = document.querySelector(".list-links");
  nav.classList.remove("show");
}

const links = document.querySelectorAll(".list-links a");
links.forEach((link) => link.addEventListener("click", showActions));

// DARK MODE SETTINGS
let modeToggle = document.getElementById("dark-mode-toggle");
let dark_on = localStorage.getItem("dark_on")
  ? JSON.parse(localStorage.getItem("dark_on"))
  : false;

let dark = "#051e34";
let light = "#f6f7f9";

const setMode = (colorLight, colorDark, darkOn) => {
  document.documentElement.style.setProperty("--second-color", colorLight);
  document.documentElement.style.setProperty("--light-color", colorDark);
  dark_on = darkOn;
  localStorage.setItem("dark_on", JSON.stringify(dark_on));
};

modeToggle.addEventListener("click", (e) => {
  dark_on ? setMode(dark, light, false) : setMode(light, dark, true);
  e.target.classList.toggle("bxs-sun");
});

// SET MODE AFTER RELOAD PAGE FROM LOCAL STORAGE
if (dark_on) {
  setMode(light, dark, true);
  modeToggle.classList.toggle("bxs-sun");
}

// DISPLAY SKILLS
let skills = [
  { name: "JAVASCRIPT", icon: "logos:javascript" },
  { name: "TYPESCRIPT", icon: "logos:typescript-icon" },
  { name: "REACT", icon: "logos:react" },
  { name: "Next  ", icon: "cib:next-js" },
  { name: "HTML", icon: "vscode-icons:file-type-html" },
  { name: "CSS", icon: "vscode-icons:file-type-css" },
  { name: "Node", icon: "vscode-icons:file-type-node" },
  { name: "SASS", icon: "logos:sass" },
  { name: "GIT & GITHUB", icon: "akar-icons:github-fill" },
  { name: "JQUERY", icon: "mdi:jquery" },
  { name: "BOOTSTRAP", icon: "logos:bootstrap" },
  { name: "JSON & AJAX & AXIOS", icon: "bx:bxs-file-json" },
  { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
  { name: "Redux", icon: "skill-icons:redux" },
  { name: "Zustand", icon: "simple-icons:zustand" },
  { name: "Postman", icon: "logos:postman-icon" },
  { name: "Figma", icon: "logos:figma" },
  { name: "TypeScript ESLint", icon: "logos:eslint" },
];

let skillsContentDOM = document.querySelector(".skills-content");

const displaySkills = () => {
  const display = skills.map((skill) => {
    return `
        <div class="skills-box line-swaping">
        <span class="iconify" data-icon="${skill.icon}" data-width="30"></span>
          <span>${skill.name}</span>
        </div>
        `;
  });

  skillsContentDOM.innerHTML = display.join("");
};

displaySkills();

// display experience
let experience = [
  {
    image: "images/atheel.jpg",
    title: "Front-End Developer",
    from: "April 2025",
    to: "Present",
    company: "Atheel CX",
    companyColor: "#0055B6",
    powerPoints: [
      "Working as a Front-End Developer at Atheel CX, contributing to the development of customer experience platforms.",
      "Building responsive and user-friendly web interfaces using React.js and Next.js.",
      "Collaborating closely with back-end and product teams to integrate APIs and ensure seamless user experiences.",
      "Occasionally supporting back-end development using NestJS, Node.js, or Python frameworks (FastAPI, Django) as needed.",
    ],
  },
  {
    image: "images/sb.jpeg",
    title: "FrontEnd Developer",
    from: "Oct 2024",
    to: " April 2025",
    company: "Soul Body",
    companyColor: "#009688",
    powerPoints: [
      "as a front-end developer for a software house specializing in medical websites and ERP systems for hospitals and clinics",
      "Collaborated with designers and back-end developers to create acohesive and user-friendly interface",
      "Building and maintaining high-performance web applications using React and Next",
    ],
  },

  {
    image: "images/owlTech.gif",
    title: "FrontEnd Developer",
    from: "sep 2023",
    to: "Aug 2024",
    company: "OwlTech",
    companyColor: "#FBC005",
    powerPoints: [
      "Developed the company`s web-app",
      "Developed the company`s mobile app",
      "Dealt with Asp.Net",
    ],
  },
];
let expContentDOM = document.querySelector(".exp-content");

const displayExp = () => {
  const display = experience.map((exp) => {
    return `
     
        <div class='flex contain'> 
        <img width='60rem' height='60rem' src='${exp.image}'/>
        <div class=''>
        <p class='title'>${exp.title}</p>
        <p style='color:${exp.companyColor};' class='company'> ${
      exp.company
    }</p>
        <div class='flex date'>
        <p >${exp.from} - </p>
        <p> ${exp.to}</p>
        </div>  
        <ul class='expUl'>
      ${exp.powerPoints.map((ele) => `<li>${ele}</li>`).join("")}
      </ul>  
        </div>
        </div>
      
        `;
  });

  expContentDOM.innerHTML = display.join("");
};

displayExp();
// DISPLAY PORTFOLIO PROJECTS
let projects = [
  {
    name: "Social Media(REACT)",
    img: "images/social3.png",
    link: "https://social-media-site-omega.vercel.app/",
  },
  {
    name: "pharmacy store(NEXT)",
    img: "images/pharma.png",
    link: "https://pharmacy-tawny-one.vercel.app/",
  },
  // {
  //   name: "Runzu store(REACT,NODE(FullStack))",
  //   img: "images/Runzudashboardٌ.png",
  //   link: "https://runzu-store.vercel.app/",
  // },
  {
    name: "Hotel managment(REACT,TAILWIND)",
    img: "images/Hotel.png",
    link: "https://hotel-managment-eight.vercel.app/",
  },
  {
    name: "OMN(react-uI)",
    img: "images/OMN.png",
    link: "https://omn-alpha.netlify.app/",
  },
  {
    name: "Architect(JavaScript-uI)",
    img: "images/Architect.png",
    link: "https://architect-alpha.netlify.app/",
  },
  {
    name: "Admin app(React)",
    img: "images/Admin.png",
    link: "https://admino.netlify.app/home",
  },
  {
    name: "Diagram(javascript)",
    img: "images/Diagram.png",
    link: "https://diagramo.netlify.app/",
  },
  {
    name: "gaming-site(next)",
    img: "images/gaming.png",
    link: "https://gaming-boi-tutorial2.vercel.app/",
  },
  {
    name: "TODO(react,redux)",
    img: "images/TODO.png",
    link: "https://todo-alpha.netlify.app/",
  },
  {
    name: "CARDASHBOARD - react",
    img: "images/dashboard.png",
    link: "https://car-dashboard-hazel.vercel.app/",
  },

  {
    name: "Store(React)",
    img: "images/Store.png",
    link: "https://speedstore.netlify.app/",
  },
  {
    name: "Ecommerce(React)",
    img: "images/ecommerce.png",
    link: "https://e-commerce-git-main-mohamed-khaleds-projects-a6b5dc0e.vercel.app/Store",
  },
];

let projectsContentDOM = document.querySelector(".portfolio-content");

const displayProjects = () => {
  const display = projects.map((project) => {
    return `
            <div class="project-box">
              <div class="project-image">
                <img src="${project.img}" alt="project-image" />
                <div class="project-overlay">
                  <div class="project-details">
                    <a href="${project.link}" class="button" target="_blank"> preview </a>
                    <p>${project.name}</p>
                  </div>
                </div>
              </div>
          </div>
      `;
  });

  projectsContentDOM.innerHTML = display.join("");
};

displayProjects();
let cert = [
  {
    name: "REACT",
    img: "images/react.png",
    link: "https://www.hackerrank.com/certificates/1c2338061b70",
  },

  {
    name: "CSS",
    img: "images/css.png",
    link: "https://www.hackerrank.com/certificates/096c0886820b",
  },
  {
    name: "Responsive Web Design",
    img: "images/responsive.png",
    link: "https://www.freecodecamp.org/certification/fcc600bf811-2420-409b-8eaf-6cdbe6289af2/responsive-web-design ",
  },
  {
    name: "JavaScript",
    img: "images/java.png",
    link: "https://www.hackerrank.com/certificates/b8c97dd07169?utm_campaign=social-buttons&utm_medium=linkedin&utm_source=certificate_social_share&social=linkedin",
  },
  {
    name: "javascript Algorithms and Data Structure",
    img: "images/javascript.png",
    link: "https://www.freecodecamp.org/certification/fcc600bf811-2420-409b-8eaf-6cdbe6289af2/javascript-algorithms-and-data-structures-v8",
  },
];

let certContentDOM = document.querySelector(".cert-content");

const displaycert = () => {
  const display = cert.map((project) => {
    return `
            <div class="project-box">
              <div class="project-image">
                <img src="${project.img}" alt="project-image" />
                <div class="project-overlay">
                  <div class="project-details">
                    <a href="${project.link}" class="button" target="_blank"> preview </a>
                    <p>${project.name}</p>
                  </div>
                </div>
              </div>
          </div>
      `;
  });

  certContentDOM.innerHTML = display.join("");
};

displaycert();

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
  // reset: true,
});

// HOME SCROLL REVEAL
sr.reveal(".home-desc", {});
sr.reveal(".home-social li", { interval: 200 });
sr.reveal(".home-img", { delay: 300 });

// SKILLS SCROLL REVEAL
sr.reveal(".skills", { origin: "left" });
sr.reveal("#exp", { origin: "left" });

// PORTFOLIO SCROLL REVEAL
sr.reveal(".portfolio", {});
sr.reveal(".cert", {});
