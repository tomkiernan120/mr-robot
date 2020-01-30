#!/usr/bin/env node

const prompts = require('prompts');

const infomenu = require('../lib/menus/info');


const showMenu = async () => {
   return await prompts([{
    type: 'select',
    name: 'menu',
    message: 'Select an option',
    choices: [
      { value: 1, title: "Information Gathering"},
      { value: 2, title: "Password Attacks"},
      { value: 3, title: "Wireless Testing"},
      { value: 4, title: "Exploitation Tools"},
      { value: 5, title: "Sniffing & Spoofing"},
      { value: 6, title: "Web Hacking"},
      { value: 7, title: "Private Web Hacking"},
      { value: 8, title: "Post Exploitation"},
      { value: 9, title: "Install The HACKTRONIAN"},
      { value: 99, title: "Exit"}
    ],
    initial: 1
  }]);
};


showMenu().then(( choice ) => {
  switch (choice.menu) {
    case 1:
      infomenu().then((choice) => {
        console.log( choice );
      });
      break;
  }
})
.catch( err => console.log( err ) );


// const commander = require('commander');
// const program = new commander.Command();
// const package = require( '../package.json' );
// 
// program.version(package.version);
// 
// 
// program
//   .option('-ig, --info-gather', 'gatherinfo', true )
//   .option('-pa, --password-attack', 'gatherinfo', false )
//   .option('-wt, --wireless-testing', 'gatherinfo', false )
//   .option('-et, --exploitation-tools', 'gatherinfo', false )
//   .option('-ss, --sniffing-and-spoofing', 'gatherinfo', false )
//   .option('-wh, --web-hacking', 'gatherinfo', false )
//   .option('-pwh, --private-web-hacking', 'gatherinfo', false )
//   .option('-pe, --post-exploitation', 'gatherinfo', false )
//   .option('-ih, --install-the -hacktronian', 'gatherinfo', false )
//   .option('-e, --exit', 'gatherinfo', false )
//   .parse(process.argv);
// 
// 
// swith( progr ) {
// 
// }
