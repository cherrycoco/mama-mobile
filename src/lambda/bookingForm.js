var api_key = process.env.REACT_APP_MAILGUN_KEY;
var DOMAIN = 'sandbox723d7fa090f74eca9f2e3f28e4f173a2.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});
let moment = require('moment');

export function handler(event, context, callback) {
  let body = JSON.parse(event.body);
  let firstName = body.firstName.toUpperCase();
  let lastName = body.lastName.toUpperCase(); 
  let email = body.email.toLowerCase();
  let option1 = body.option1 ? moment(body.option1).format('MMMM Do YYYY, h:mm a') : null;
  let option2 = body.option2 ? moment(body.option2).format('MMMM Do YYYY, h:mm a') : null;
  let option3 = body.option3 ? moment(body.option3).format('MMMM Do YYYY, h:mm a') : null;

  if (body.firstName.length > 1) {
    firstName = body.firstName.substring(0,1).toUpperCase() + body.firstName.substring(1).toLowerCase();
  }

  if (body.lastName.length > 1) {
    lastName = body.lastName.substring(0,1).toUpperCase() + body.lastName.substring(1).toLowerCase();
  }

  let fullName = firstName + ' ' + lastName;
  let messageBody = `
    <div>
      <p>Name: ${fullName}</p>
      <p>Phone Number: ${body.tel}</p>
      <p>Address: ${body.address}</p>
      <p>Unit Number: ${body.unit}</p>
      <p>Massage Type: ${body.massage}</p>
      <p>Date Requested:</p>
      <ol>
        <li>${option1}</li>
        <li>${option2}</li>
        <li>${option3}</li>
      </ol>
      <p>Additional Notes: ${body.message}</p>
    </div>
  `

  // if (body.mon.morning) {messageBody += '<li>monday morning</li>';}
  // if (body.mon.afternoon) {messageBody += '<li>monday afternoon</li>';}
  // if (body.mon.night) {messageBody += '<li>monday night</li>';}
  // if (body.tues.morning) {messageBody += '<li>tuesday morning</li>';}
  // if (body.tues.afternoon) {messageBody += '<li>tuesday afternoon</li>';}
  // if (body.tues.night) {messageBody += '<li>tuesday night</li>';}
  // if (body.wed.morning) {messageBody += '<li>wednesday morning</li>';}
  // if (body.wed.afternoon) {messageBody += '<li>wednesday afternoon</li>';}
  // if (body.wed.night) {messageBody += '<li>wednesday night</li>';}
  // if (body.thurs.morning) {messageBody += '<li>thursday morning</li>';}
  // if (body.thurs.afternoon) {messageBody += '<li>thursday afternoon</li>';}
  // if (body.thurs.night) {messageBody += '<li>thursday night</li>';}
  // if (body.fri.morning) {messageBody += '<li>friday morning</li>';}
  // if (body.fri.afternoon) {messageBody += '<li>friday afternoon</li>';}
  // if (body.fri.night) {messageBody += '<li>friday night</li>';}
  // if (body.sat.morning) {messageBody += '<li>saturday morning</li>';}
  // if (body.sat.afternoon) {messageBody += '<li>saturday afternoon</li>';}
  // if (body.sat.night) {messageBody += '<li>saturday night</li>';}
  // if (body.sun.morning) {messageBody += '<li>sunday morning</li>';}
  // if (body.sun.afternoon) {messageBody += '<li>sunday afternoon</li>';}
  // if (body.sun.night) {messageBody += '<li>sunday night</li>';}

  console.log(messageBody);

  let data = {
    from: `${fullName} <${email}>`,
    to: 'Mama Mobile <hello@mamamobilemassage.com>',
    subject: 'Booking Request',
    html: messageBody
  };

  mailgun.messages().send(data, (error, body) => {
    if(error) {
      callback(error);
      console.log(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(body)
      });
    }
  });
}