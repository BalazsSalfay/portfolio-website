import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello there, my name is',
  name: 'Balazs Salfay',
  subtitle: "I'm a Frontend Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Creative and visually oriented Front End Developer experienced in designing, developing and managing several navigation prototypes and POCs with a UX approach.',
  paragraphTwo:
    'Committed team worker, proactive person with a strong desire to develop new skills.',
  paragraphThree:
    'Dived into ReactJS and eager to continue the exploration with a forward-moving company.',
  resume: 'https://drive.google.com/open?id=1J_5zXizYtR-GnFPqkEbe4OZeu0BXXOEs', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'e-commerce.jpg',
    title: 'BS Prints',
    info:
      'A simple project that mimicing my not - yet - exsiting photography prints selling e-commerce webstore.',
    info2: 'Tecnologies: ReactJS, Redux, Git, Heroku, Firebase, Stripe',
    url: 'https://bs-prints.herokuapp.com/',
    repo: 'https://github.com/BalazsSalfay/bs-prints-webstore', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'PLANet.jpg',
    title: 'PLANet',
    info:
      'Task and homework planning application with MS Teams integration to support the communication between teachers, kids and their parents during online school.',
    info2: 'Tecnologies: ReactJS, MeteorJS, MongoDB, Git, Heroku, Context API',
    url: 'https://planet-proto-test.herokuapp.com/',
    repo: 'https://github.com/BalazsSalfay/planet', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'facereco.jpg',
    title: 'FaceReco',
    info: 'Very simple web app with image face recognition API and basic user handling.',
    info2: 'Tecnologies: ReactJS, Express, PostgreSQL, Git, Heroku, Clarifai',
    url: 'https://facereco-client.herokuapp.com/',
    repo: 'https://github.com/BalazsSalfay/facereco-client', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'balazs.salfay@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/balazs-salfay/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/BalazsSalfay',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
