// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Marcel",
  middleName: "",
  lastName: "Winheim",
  message: " | Engineer | Programmer | Tech Geek | Car Geek | ",
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/marcelwinh",
    },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/marcel-winheim-224797ba/",
    },
    {
      image: "fab fa-xing",
      url: "https://www.xing.com/profile/Marcel_Winheim/cv?sc_o=mxb_p",
    },
    {
      image: "fab fa-twitter",
      url: "https://twitter.com/WinheimM",
    },
    {
      image: "fas fa-home",
      url: "https://winheim.net",
    },
    {
      image: "fab fa-facebook",
      url: "https://www.facebook.com/mwinheim",
    },
    {
      image: "fab fa-instagram",
      url: "https://www.instagram.com/mawinheim/",
    },
    {
      image: "fab fa-youtube",
      url: "https://www.youtube.com/channel/UCGKbwWRrd_4lX9RQI2QhzEg",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "https://avatars.githubusercontent.com/u/24451509?v=4",
  imageSize: 375,
  message:
    "Hi, my name is Marcel. I am a software developer in the field of IIoT. In my spare time I like to try open source projects in the smart home area and write down my knowledge about it in a blog.",
  resume: "https://drive.google.com/file/d/1g3u_2424g_ngS6YGNlJ7OyBftDD5Lb30/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "marcelwinh", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const achievements = {
  show: true,
  heading: "Achievements",
  achievements: [
    {
      img: "https://images.credly.com/size/680x680/images/6a254dad-77e5-4e71-8049-94e5c7a15981/azure-fundamentals-600x600.png",
      link: "https://www.credly.com/badges/f808edf7-ac05-41e4-958d-b8954b0c9946?source=github",
      altText: "Microsoft Certified: Azure Fundamentals"
    },
    {
      img: "https://images.credly.com/size/680x680/images/78e39333-d0db-4931-b231-13bdb37040cc/Programming_in_C_23-01.png",
      link: "https://www.credly.com/badges/1a0c461d-d89f-4659-af35-b0b975db4fc8?source=github",
      altText: "Exam 483: Programming in C#"
    },
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: "https://avatars.githubusercontent.com/u/24451509?v=4",
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: "https://avatars.githubusercontent.com/u/24451509?v=4",
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Azure", value: 75 },
    { name: "C#", value: 90 },
    { name: "Docker", value: 85 },
    { name: "Gulp", value: 70 },
    { name: "JavaScript", value: 80 },
    { name: "Jenkins", value: 60 },
    { name: "MQTT", value: 90 },
    { name: "Node.js", value: 80 },
    { name: "OPC UA", value: 50 },
    { name: "Python", value: 70 },
    { name: "RESTful Webservices", value: 90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 75 },
    { name: "Problem Solving", value: 80 },
    { name: "Well-structured", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "github2021@winhe.im",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, achievements };
