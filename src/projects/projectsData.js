import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Arfeelings Note Editing App",
    image: projectOne,
    description: (
      <>
        <p>
          Arfeelings Note Editing App is a user-friendly and feature-rich mobile
          application designed to enhance your note-taking experience.
        </p>
      </>
    ),
    github: "https://github.com/adizenless/Arfeelings-en",
    demo: "https://arfeelings-en.vercel.app/",
  },
  2: {
    title: "Ai Questionary App Chat with Companion",
    image: projectTwo,
    description: (
      <>
        <p>
          The AI Questionary App "Chat with Companion" is your interactive and
          intelligent companion for engaging and insightful conversations.
        </p>
      </>
    ),
    github: "https://github.com/adizenless/Ai-questionary-en",
    demo: "https://ai-questionary-en.vercel.app/",
  },
  3: {
    title: "Nongside Social Media App",
    image: projectThree,
    description: (
      <>
        <p>
          Nongside Social Media App is a vibrant and inclusive platform designed
          to connect users in a unique and meaningful way.
        </p>
      </>
    ),
    github: "https://github.com/adizenless/Nongside",
    demo: "https://nongside.vercel.app/",
  },
};

export default projects;
