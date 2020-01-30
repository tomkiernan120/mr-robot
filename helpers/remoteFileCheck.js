const urllib = require( 'urllib' );

const checkRemoteFile = async ( site, exension, cb ) => {
  urllib.request( site + exension, cb );
};

export default checkRemoteFile;
