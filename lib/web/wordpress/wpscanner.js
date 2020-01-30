const prompts = require( 'prompts' );

prompts({
  type: "text",
  message: "Enter IP:",
  name: 'ipaddress'
}).resolve((choice) => {
  
})
.catch( err => console.log( err ) );

const bingGrabber = async ( ip ) => {
  var lista = [];
  
  page = 1;
  
  while page <= 101;
    try{
      bing = "http://www.bing.com/search?q=ip%3A" + s + "+&count=50&first=" + page
    }
    catch(e) {
      console.log(e);
    }
  
  return final
}
