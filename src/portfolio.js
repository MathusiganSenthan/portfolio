/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "THUVARAGA",
  title: "Hi all, I'm THUVARAGA",
  subTitle: emoji(
    "I'm Undergraduate Student A passionate  Software Developer Specialy UI/UX 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fFgyqiFMZQysLm8ikNn3RJJEg3rmtGzy/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ThuvaAnanth",
  linkedin: "https://www.linkedin.com/in/thuvaraga-anantharajah-9674292b3/",
  gmail: "thuvananth14@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO SPECIALIZED IN UI/UX DESIGN",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    
    emoji(
      "⚡ UI/UX Design Intersted AND Specialized"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "J/Methodist Girls’ High School",
      logo: require("./assets/images/WhatsApp Image 2025-01-30 at 23.32.30_061587f8.jpg"),
      subHeader: "A/L Physical Science",
      duration: " 2011 -  2019",
      desc: "Member of Board of Prefects at School from 2017 to 2019",
    
    },
    {
      schoolName: "SLIIT University",
      logo: require("./assets/images/WhatsApp Image 2025-01-30 at 23.33.06_d0e1df83.jpg"),
      subHeader: "Reading Bsc ( Hons ) in Information Technology specialized in Information Technology (June 2022 - Present )",
      duration: "September 2022 - April 2026",
      desc: "I Worked as intern Software Engineer in Srilankan Airlines",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "UI/UX (figma)",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "SriLankan Airlines",
      companylogo: require("./assets/images/th.jpeg"),
      date: "June 2024 - 2025 February",
      desc: "I did so many UI design projects and frontend designing projects for Srilankan Airlines.",
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/th (1).jpeg"),
      projectName: "Crisis Management",
      projectDesc: "Crisis Management System | Web Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/proto/zlfbPTfUOzHcQCQg8k5mog/Crisis-Management?page-id=96%3A275&node-id=96-276&p=f&viewport=526%2C359%2C0.37&t=wIf91CnRkaBh07qo-1&scaling=min-zoom&content-scaling=fixed"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Screenshot 2025-01-31 102023.png"),
      projectName: "Charika",
      projectDesc: " Charika | Web Application  Technologies : Figma ,Angular js",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/proto/H0NgZ6ElBnZ3Vc22A0fI59/Charika?page-id=239%3A397&node-id=611-39&viewport=102%2C156%2C0.05&t=AwQlgszDlm0aPJL6-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=611%3A39"
        }
      ]
    },
    {
      image: require("./assets/images/th (2).jpeg"),
      projectName: "FIDS",
      projectDesc: " Web Application Technologies : Figma , Angular Js , .Net",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/proto/NmMDI3MYMzsMqQ1JWjdYge/FIDS?page-id=178%3A4&node-id=385-61&t=LqBRKeWWwP9riQzY-1"
        }
      ]
    },
    {
      image: require("./assets/images/th (3).jpeg"),
      projectName: "Aero Letters",
      projectDesc: "Aero Letters | Web Application Technologies : Figma ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/proto/C6HU1RTTmGJFbYo3d3PuJ6/AeroLetters?page-id=0%3A1&node-id=3-2&p=f&viewport=505%2C355%2C0.04&t=F2WKjbp1pSzeQiZ1-1&scaling=min-zoom&content-scaling=fixed"
        }
      ]
    },
    {
      image: require("./assets/images/th (4).jpeg"),
      projectName: "Aero Luggage ",
      projectDesc: "Aero Luggage | Mobile Application Technologies : Kotlin , Figma",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/proto/B1rD1h0yXfS8t06OBZimjK/TagTracker-final?page-id=34%3A1361&node-id=40-1844&p=f&viewport=554%2C232%2C0.18&t=B0bvO7OSdRbF4e83-1&scaling=scale-down&content-scaling=fixed"
        }
      ]
    },
    {
      image: require("./assets/images/th (5).jpeg"),
      projectName: "GSA Application",
      projectDesc: "GSA Application | Web Application, Technologies : Figma ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/proto/x6iEwX1ioaFvqLdieNEQYR/GSA-Automation?page-id=0%3A1&node-id=551-638&p=f&viewport=-1406%2C-537%2C0.08&t=9k10l4BuENgM1yB3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=551%3A638"
        }
      ]
    },
    {
      image: require("./assets/images/th (6).jpeg"),
      projectName: "Athoc",
      projectDesc: "Athoc | Web Application , Technologies : Figma ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/proto/BEmfAxhvH6XRpGA4JKlvAU/Adhoc?page-id=417%3A638&node-id=706-2574&viewport=410%2C322%2C0.02&t=ykk466YrdDrVHoGe-1&scaling=scale-down&content-scaling=fixed"
        }
      ]
    },
    {
      image: require("./assets/images/th (7).jpeg"),
      projectName: "YouLookup",
      projectDesc: "YouLookup | Mobile Application, Technologies : Figma",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figma.com/proto/eOTpBkzFmxut50ju5PLyNv/YOULOOKUP?page-id=96%3A233&node-id=116-361&p=f&viewport=308%2C394%2C0.77&t=BdrwAvMLcDOP7Xo0-1&scaling=min-zoom&content-scaling=fixed"
        }
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  
  
};

// Blogs Section

const blogSection = {
  
};


// Talks Sections

const talkSection = {
 
};

// Podcast Section

const podcastSection = {
 
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or work say hi? My Inbox is open for all.           number: +94777557672         email_address: thuvananth14@gmail.com",
  
};

// Twitter Section

const twitterDetails = {
  
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
