const si = require('react-icons/si');
const icons = [
  'SiHtml5', 'SiCss3', 'SiJavascript', 'SiTypescript', 'SiPython',
  'SiReact', 'SiNextdotjs', 'SiAngular', 'SiNodedotjs', 'SiRedux',
  'SiTailwindcss', 'SiPostgresql', 'SiMysql', 'SiMongodb', 'SiDocker',
  'SiGit', 'SiLinux', 'SiVisualstudiocode', 'SiJira'
];
icons.forEach(i => console.log(i, i in si ? 'EXISTS' : 'MISSING'));
