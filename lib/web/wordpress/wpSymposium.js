var checkRemoteFile = require( '../../../helpers/remoteFileCheck' );

const checkRemoteFileUpload = async (sites) => {
  let wpstorethemeremotefileupload = [];
  for( var i = 0; i < sites.length; i++ ) {
    const site = sites[ i ];
    checkRemoteFile( site, 'wp-symposium/server/file_upload_form.php', function(err, data, res) {
      if( res.statusCode === 200 ) {
        wpstorethemeremotefileupload.push( site );
      }
    }); 
    return wpstorethemeremotefileupload;
  }
} 

module.exports = checkRemoteFileUpload;
