require('es6-promise').polyfill();
require('isomorphic-fetch');

function sendMail(to,subject,html){
    console.log('read '+JSON.stringify({to,subject,html}))
    fetch('http://06a1cf11.ngrok.io/mail', {
        method: 'post',
        headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json; charset=utf-8'
          },
        body: JSON.stringify({to,subject,html})
      })
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.text();
    })
    .then(function(response) {
        console.log('mail sent successfully');
    });
}

module.exports={
    sendMail
}