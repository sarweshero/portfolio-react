import self from '../img/self.jpg';
import { colors } from '../colors/mainGradient';
// import Portfolio from '../../components/portfolio/Portfolio';

export const info = {
  firstName: ' Sarweshwar',
  lastName: ' (Sarweshero)',
  Portfolio: '📁',
  Aboutme: '👤',
  initials: '🚀', // the example uses first and last, but feel free to use three or more if you like.
  position: 'Co-Founder at Xyndrix - Innovating the Future with Scalable Software Solutions',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '🚀',
      text: 'Co-Founder at Xyndrix',
    },
    {
      emoji: '💻',
      text: 'Full-Stack Developer & Metaverse Architect',
    },
    {
      emoji: '📧',
      text: 'sarweshero@gmail.com',
    },
    {
      emoji: '🌐',
      text: 'Building scalable software solutions',
    },
  ],
socials: [
  // {
  //   link: 'https://drive.google.com/file/d/1CgpeBjfsArIHH2IrvAcQTuO46drDTxs6/view?usp=sharing', // this should be https://yourname.com/resume.pdf once you've deployed
  //   icon: 'fa fa-file',
  //   label: 'resume',
  // },
  {
    link: 'tel:+916383073831', // Changes the link to a tel: scheme
    icon: 'fa fa-phone',
    label: 'Phone',
  },
  {
    link: 'https://github.com/sarweshero',
    icon: 'fa fa-github',
    label: 'github',
  },
  {
    link: 'https://linkedin.com/in/sarweshero',
    icon: 'fa fa-linkedin',
    label: 'linkedin',
  },
  {
    link: 'https://sarweshero.vercel.app',
    icon: 'fa fa-globe',
    label: 'website',
  },
],

  bio: "Hello! I'm Sarweshwar (Sarweshero), Co-Founder of Xyndrix, a software solutions company driving innovation in web applications, AI-powered platforms, and immersive Metaverse experiences. 🚀 With a strong foundation in full-stack development, backend architecture, and cloud-native systems, I specialize in building high-performance digital infrastructure that scales. 💻⚡ My expertise spans across modern web technologies, from React.js and Django to Web3 and Solidity for blockchain integration. At Xyndrix, we're pioneering the future of digital experiences, combining cutting-edge technology with practical business solutions. Let's build the next generation of scalable software together! 🌟🤝",
  skills: {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Solidity', 'HTML/CSS'],
    frameworks: ['React.js', 'Django', 'FastAPI', 'Tailwind CSS', 'Vite', 'Web3'],
    databases: ['PostgreSQL', 'Redis', 'MongoDB', 'SQLite'],
    tools: ['Docker', 'GitHub Actions', 'Git', 'Postman', 'VS Code', 'Three.js', 'WebXR'],
  },
  hobbies: [
    {
      label: 'Metaverse Development',
      emoji: '🌐',
    },
    {
      label: 'AI Research',
      emoji: '🤖',
    },
    {
      label: 'Coding',
      emoji: '💻',
    },
    {
      label: 'Innovation',
      emoji: '🚀',
    },
    {
      label: 'Tech Entrepreneurship',
      emoji: '💡',
    },
  ],
  portfolio: [
    // {
    //   title: 'Xyndrix SaaS Platform',
    //   live: 'https://xyndrix.vercel.app/',
    //   source: 'https://github.com/xyndrix',
    //   image: require('../img/Portfolio.png'),
    //   description: 'Secure multi-tenant application for enterprise data automation'
    // },
    // {
    //   title: 'Metaverse Retail Hub',
    //   live: 'https://metaverse-retail.vercel.app/',
    //   source: 'https://github.com/sarweshero/metaverse-retail',
    //   image: require('../img/Meta-Management.png'),
    //   description: 'Interactive virtual storefront built with WebXR and Three.js'
    // },
    {
      title: 'Alumni Connect Portal',
      live: 'https://karpagamalumni.in/',
      source: 'https://github.com/Nithisx/Alumini-Admin/tree/pro',
      image: require('../img/Portfolio.png'),
      description: 'Django + React-powered social network for academic institutions'
    },
  ],
};
