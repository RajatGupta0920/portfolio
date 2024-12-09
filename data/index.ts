/** @format */

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Jotion - Note taking App for productivity',
    des: 'Your Ideas, Documents, & Plans. Unified. Jotion is the connected workspace where better, faster work happens.',
    img: '/notion-clone-image.svg',
    iconLists: [
      '/re.svg',
      '/tail.svg',
      '/ts.svg',
      '/c.svg',
      '/next.svg',
      '/convex-database.svg',
    ],
    link: 'https://github.com/RajatGupta0920/notion-clone',
  },
  {
    id: 2,
    title: 'Stream-Space - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://github.com/RajatGupta0920/stream-space',
  },
  {
    id: 3,
    title: 'Cognify AI - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: [
      '/re.svg',
      '/tail.svg',
      '/ts.svg',
      '/appwrite-logo.svg',
      '/c.svg',
    ],
    link: 'https://github.com/RajatGupta0920/cognifyai',
  },
  {
    id: 4,
    title: 'Store-It - Storage Management Platform',
    des: 'Developed StoreIt, a Storage Management Platform enabling file uploads',
    img: '/store-it-image.svg',
    iconLists: [
      '/next.svg',
      '/tail.svg',
      '/ts.svg',
      '/appwrite-logo.svg',
      '/shadcn-ui.svg',
    ],
    link: 'https://github.com/RajatGupta0920/storeit',
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rajat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rajat's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rajat is the ideal partner.",
    name: 'Akshit Gupta',
    title: 'Machine Learning Engineer at Open AI',
  },
  {
    quote:
      'Rajat is a consummate professional who combines technical skill with creative insight. He went above and beyond to ensure our project was not only completed on time but exceeded our expectations. I highly recommend him for any development needs.',
    name: 'Ansh Jain',
    title: 'Developer at SRM University India',
  },
  {
    quote:
      'From the outset, Rajat demonstrated a deep understanding of our requirements and worked tirelessly to deliver a product that aligned perfectly with our vision. His ability to blend creativity with technical precision is remarkable.',
    name: 'Yash Gautam',
    title: 'Management Trainee at Reliance Jio India',
  },
  {
    quote:
      "Rajat's collaborative spirit, innovative thinking, and dedication to delivering top-tier results made him a joy to work with. He turned our ideas into reality with seamless execution and attention to detail.",
    name: 'Abhinav Soni',
    title: 'Developer at Cognizant',
  },
  {
    quote:
      "Rajat's ability to balance creativity with practicality was instrumental in the success of our project. His proactive communication, professionalism, and exceptional problem-solving skills set him apart.",
    name: 'Priyanshu Lohar',
    title: 'Software Engineer and Researcher at Aquilonis AI & Elyon Aquaris',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Web Developer Intern',
    desc: 'Assisted in the development of a web-based platform using HTML, CSS and JS, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Full-Stack Web Dev Intern',
    desc: 'Contributed to the development of dynamic and responsive web applications using HTML, CSS, JavaScript, and backend technologies, improving user experience and functionality during a Full-Stack Web Developer Internship',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'IT Intern',
    desc: 'Assisted in developing and maintaining web-based platforms using HTML, CSS, and JavaScript during an IT Internship, enhancing platform interactivity and user engagement.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/RajatGupta0920',
  },
  {
    id: 2,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/rajat-gupta-dev/',
  },
];
