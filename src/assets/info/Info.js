import self from '../img/self.jpg';
import { colors } from '../colors/mainGradient';
// import Portfolio from '../../components/portfolio/Portfolio';

export const info = {
  firstName: ' Sarweshwar',
  lastName: ' Deivasihamani',
  Portfolio: '📁',
  Aboutme: '👤',
  initials: '🏡', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a full stack software engineer or a back-end developer.',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '➤',
      text: 'based in the Tamil Nadu, India',
    },
    {
      emoji: '💻',
      text: 'full stack software engineer or a back-end developer.',
    },
    {
      emoji: '📧',
      text: 'sarweshwardeivasihamani@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://drive.google.com/file/d/1CgpeBjfsArIHH2IrvAcQTuO46drDTxs6/view?usp=sharing', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: '+916383073831',
      icon: 'fa fa-phone',
      label: 'Phone',
    },
    {
      link: 'https://github.com/arunsarwesh/',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/sarweshwardeivasihamani/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://www.instagram.com/arunsarwesh_/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
  ],
  bio: "Hello! I'm Sarweshwar, a Full Stack Software Engineer and Back-End Developer from Tamil Nadu, India. 🇮🇳 I am currently studying at Karpagam Academy of Higher Education and contribute to Metaverse, our innovative student association. 🔄✨ With a strong foundation in back-end technologies like Django Rest API ⚙️🌟 and hands-on experience in Full Stack development, I create intuitive web applications and explore emerging technologies. Beyond coding, I love traveling ✈️🌍 and drawing inspiration from diverse cultures. As a motivated fresher, I'm ready to bring unique ideas and collaborate with dynamic teams. Let’s build something exceptional together! 🌟🤝",
  skills: {
    languages: ['TypeScript', 'JavaScript', 'C++', 'C', 'Python', 'HTML/CSS'],
    frameworks: ['React', 'Tailwind CSS', 'Bootstrap', 'Django', 'TensorFlow', 'PyTorch', 'Keras'],
    databases: ['MySQl', 'Postgres', 'SQLite', 'MongoDB'],
    tools: ['Git', 'Postman', 'Docker', 'npm', 'yarn', 'Jupiter Notebook', 'VS Code'],
  },
  hobbies: [
    {
      label: 'Cartoons',
      emoji: '🎞',
    },
    {
      label: 'Cricket',
      emoji: '🏏',
    },
    {
      label: 'Coding',
      emoji: '💻',
        },
    {
      label: 'Online Games',
      emoji: '🎮',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    },
  ],
  portfolio: [
    {
      title: 'Portfolio Website',
      live: '#', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/arunsarwesh/portfolio-react', // this should be a link to the **repository** of the project, where the code is hosted.
      image: require('../img/Portfolio.png'),
    },
    {
      title: 'Meta-TaskManagent',
      live: 'https://studverse2k23.netlify.app/',
      source: 'https://github.com/Munish0204/Student-login',
      image: require('../img/Meta-Management.png'),
    },
   
  ],
};
