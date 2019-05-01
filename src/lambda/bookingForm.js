var api_key = process.env.REACT_APP_MAILGUN_KEY;
var DOMAIN = 'sandbox723d7fa090f74eca9f2e3f28e4f173a2.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

export function handler(event, context, callback) {
  let body = JSON.parse(event.body);
  let firstName = body.firstName.toUpperCase();
  let lastName = body.lastName.toUpperCase(); 
  let email = body.email.toLowerCase();

  if (body.firstName.length > 1) {
    firstName = body.firstName.substring(0,1).toUpperCase() + body.firstName.substring(1).toLowerCase();
  }

  if (body.lastName.length > 1) {
    lastName = body.lastName.substring(0,1).toUpperCase() + body.lastName.substring(1).toLowerCase();
  }

  let fullName = firstName + ' ' + lastName;
  let messageBody = `
    <div>
      <h5>Name:</h5>
      <p>${fullName}</p>
      <h5>Address:</h5>
      <p>${body.address}</p>
      <h5>Unit Number:</h5>
      <p>${body.unit}</p>
    </div>
    <div>
      <h5>Additional Notes:</h5>
      <p>${body.message}</p>
    </div>
    <div>
    <h5>Availability:</h5>
      <ul>
  `

  if (body.mon.morning) {messageBody += '<li>monday morning</li>';}
  if (body.mon.afternoon) {messageBody += '<li>monday afternoon</li>';}
  if (body.mon.night) {messageBody += '<li>monday night</li>';}
  if (body.tues.morning) {messageBody += '<li>tuesday morning</li>';}
  if (body.tues.afternoon) {messageBody += '<li>tuesday afternoon</li>';}
  if (body.tues.night) {messageBody += '<li>tuesday night</li>';}
  if (body.wed.morning) {messageBody += '<li>wednesday morning</li>';}
  if (body.wed.afternoon) {messageBody += '<li>wednesday afternoon</li>';}
  if (body.wed.night) {messageBody += '<li>wednesday night</li>';}
  if (body.thurs.morning) {messageBody += '<li>thursday morning</li>';}
  if (body.thurs.afternoon) {messageBody += '<li>thursday afternoon</li>';}
  if (body.thurs.night) {messageBody += '<li>thursday night</li>';}
  if (body.fri.morning) {messageBody += '<li>friday morning</li>';}
  if (body.fri.afternoon) {messageBody += '<li>friday afternoon</li>';}
  if (body.fri.night) {messageBody += '<li>friday night</li>';}
  if (body.sat.morning) {messageBody += '<li>saturday morning</li>';}
  if (body.sat.afternoon) {messageBody += '<li>saturday afternoon</li>';}
  if (body.sat.night) {messageBody += '<li>saturday night</li>';}
  if (body.sun.morning) {messageBody += '<li>sunday morning</li>';}
  if (body.sun.afternoon) {messageBody += '<li>sunday afternoon</li>';}
  if (body.sun.night) {messageBody += '<li>sunday night</li>';}

  messageBody += '</ul></div>'

  let data = {
    from: `${fullName} <${email}>`,
    to: 'Mama Mobile <hello@mamamobilemassage.com>',
    subject: 'Booking Request',
    html: messageBody
  };

  mailgun.messages().send(data, (error, body) => {
    if(error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(body)
      });
    }
  });
}