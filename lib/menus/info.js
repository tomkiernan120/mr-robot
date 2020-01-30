const prompts = require('prompts');


const showMenu = async () => {
   await prompts([{
    type: 'select',
    name: 'menu',
    message: 'Select an option',
    choices: [
      {value: 1, title: "Nmap"},
      {value: 2, title: "Setoolkit"},
      {value: 3, title: "Port Scanning"},
      {value: 4, title: "Host To IP"},
      {value: 5, title: "wordpress user"},
      {value: 6, title: "CMS scanner"},
      {value: 7, title: "XSStrike"},
      {value: 8, title: "Dork - Google Dorks Passive Vulnerability Auditor"},
      {value: 9, title: "Scan A server's Users"},
      {value: 10, title: "Crips"},
      {value: 12, title: "Back To Main Menu"},
    ],
    initial: 1
  }]).then((choice) => {
    
  })
  .catch( err => console.log( err ) ); 
};


module.exports = showMenu;
