var checkRemoteFile = require( '../../../helpers/remoteFileCheck' );

const checkRemoteFileUpload = async (sites) => {
  let wpstorethemeremotefileupload = [];
  for( var i = 0; i < sites.length; i++ ) {
    const site = sites[ i ];
    checkRemoteFile( site, 'wp-content/plugins/sexy-contact-form/includes/fileupload/index.php', function(err, data, res) {
      if( res.statusCode === 200 ) {
        wpstorethemeremotefileupload.push( site );
      }
    }); 
    return wpstorethemeremotefileupload;
  }
};

module.exports = checkRemoteFileUpload;
