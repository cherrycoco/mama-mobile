// var api_key = process.env.REACT_APP_MAILGUN_KEY;
// var DOMAIN = 'sandbox723d7fa090f74eca9f2e3f28e4f173a2.mailgun.org';
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

// export function handler(event, context, callback) {
//   let body = JSON.parse(event.body);
//   let firstName = body.firstName.toUpperCase();
//   let lastName = body.lastName.toUpperCase(); 
//   let email = body.email.toLowerCase();

//   if (body.firstName.length > 1) {
//     firstName = body.firstName.substring(0,1).toUpperCase() + body.firstName.substring(1).toLowerCase();
//   }

//   if (body.lastName.length > 1) {
//     lastName = body.lastName.substring(0,1).toUpperCase() + body.lastName.substring(1).toLowerCase();
//   }

//   let fullName = firstName + ' ' + lastName;
//   let messageBody = `
//     <div>
//       <p>Name: ${fullName}</p>
//       <p>Phone Number: ${body.tel}</p>
//       <p>Address: ${body.address}</p>
//       <p>Unit Number: ${body.unit}</p>
//       <p>Massage Type: ${body.massage}</p>
//       <p>Date Requested:</p>
//       <ol>
//         <li>${body.option1.split('T').join(' ')}</li>
//         <li>${body.option2.split('T').join(' ')}</li>
//         <li>${body.option3.split('T').join(' ')}</li>
//       </ol>
//       <p>Additional Notes: ${body.message}</p>
//     </div>
//   `

//   let data = {
//     from: `${fullName} <${email}>`,
//     to: 'Mama Mobile <hello@mamamobilemassage.com>',
//     subject: 'Booking Request',
//     html: messageBody
//   };

//   mailgun.messages().send(data, (error, body) => {
//     if(error) {
//       callback(error);
//       console.log(error);
//     } else {
//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(body)
//       });
//     }
//   });
// }