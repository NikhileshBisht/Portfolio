const si = require('react-icons/si');
const icons = [
  'SiCss', 'SiCss3', 'SiVscode', 'SiVisualstudiocode'
];
icons.forEach(i => console.log(i, i in si ? 'EXISTS' : 'MISSING'));
