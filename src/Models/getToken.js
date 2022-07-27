function getToken(){
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('client_secret', 'IKi8Q~OmWmYR_PYxuxoaU_3AW757BYqQMeVIncv5');
    data.append('grant_type', 'client_credentials');
    data.append('client_id', '52f06504-5c0a-486c-a4e4-6da3ebf7fe50');
    data.append('scope', 'https://management.azure.com/');
    
    var config = {
      method: 'get',
      url: 'https://login.microsoftonline.com/26b30a7f-3492-4fbb-a9f0-41fa780714ea/oauth2/token',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Cookie': 'fpc=Ar2vbH8jMmtNhiX2K9GWJknzBWo6AQAAAA8Dc9oOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd', 
        ...data.getHeaders()
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
}

module.exports = getToken;