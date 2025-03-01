import recipesImg1 from "./projectSnap/recipes1.png";
import recipesImg2 from "./projectSnap/recipes2.png";
import recipesImg3 from "./projectSnap/recipes3.png";
import notesImg1 from "./projectSnap/notes-app1.png";
import notesImg2 from "./projectSnap/notes-app2.png";
import notesImg3 from "./projectSnap/notes-app3.png";
import articlesImg1 from "./projectSnap/articles-app1.png";
import articlesImg2 from "./projectSnap/articles-app2.png";
import articlesImg3 from "./projectSnap/articles-app3.png";
// import weatherImg1 from "./projectSnap/weather-app1.png";
// import weatherImg2 from "./projectSnap/weather-app2.png";
// import weatherImg3 from "./projectSnap/weather-app3.png";
// import todoImg1 from "./projectSnap/todoList1.png";
// import todoImg2 from "./projectSnap/todoList2.png";
// import todoImg3 from "./projectSnap/todoList3.png";

let projectList = [
  {
    id: 1,
    title: "articles",
    image: {
      img1: articlesImg1,
      img2: articlesImg2,
      img3: articlesImg3,
    },
    shortNote:
      "I have developed an articles app focused on frontend practices using React, React Router, and Tailwind CSS. The app includes search and categorization features for better content organization. It provides a seamless user experience with a clean and responsive UI.",
    link: "https://articles-app-task.netlify.app/",
  },
  {
    id: 2,
    title: "recipes",
    image: {
      img1: recipesImg1,
      img2: recipesImg2,
      img3: recipesImg3,
    },
    shortNote:
      "I have developed a Recipes App using React, Redux Toolkit, Bootstrap, and SCSS for efficient state management and a responsive UI. The app allows users to browse, search, and view detailed recipes with an intuitive interface.",
    link: "https://recipeslistapp.netlify.app/recipes/breakfastlist",
  },
  {
    id: 3,
    title: "notes",
    image: {
      img1: notesImg1,
      img2: notesImg2,
      img3: notesImg3,
    },
    shortNote:
      "Create, organize, and manage your notes seamlessly with our React.js-based app. Utilizing Bootstrap for sleek design and MySQL for data storage, it offers all your note-taking needs.",
    link: "https://santhosh10661.github.io/Notes/",
  },
  // {
  //   id: 3,
  //   title: "weather",
  //   image: {
  //     img1: weatherImg1,
  //     img2: weatherImg2,
  //     img3: weatherImg3,
  //   },
  //   shortNote:
  //     "Easily check the weather anytime, anywhere with our simple weather app. Built with React.js and integrated with a reliable weather API, it provides accurate weather updates and forecasts.",
  //   link: "https://santhosh10661.github.io/weather-app/",
  // },
  // {
  //   id: 4,
  //   title: "todo list",
  //   image: {
  //     img1: todoImg1,
  //     img2: todoImg2,
  //     img3: todoImg3,
  //   },
  //   shortNote:
  //     "Effortlessly manage tasks with our simple todo list. Designed with HTML, CSS, and Bootstrap, and utilizing local storage for seamless storage, stay organized and productive with ease",
  //   link: "https://santhosh10661.github.io/to-do/",
  // },
];

export default projectList;
