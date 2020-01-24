var api_key = process.env.REACT_APP_MAILGUN_KEY;
var DOMAIN = 'mamamobilemassage.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

export function handler(event, context, callback) {
  let body = JSON.parse(event.body);
  let email = body.email.toLowerCase();

  let fullName = body.firstName + ' ' + body.lastName;
  let messageBody = `
    <div>
      <p>Name: ${fullName}</p>
      <p>Email: ${body.email}</p>
      <p>Phone Number: ${body.tel}</p>
      <p>Address: ${body.address}</p>
      <p>Group Service required:</p>
      <ul>
        ${body.shower ? '<li>Baby Showers/Special Events ✅</li>': '<li>Baby Showers/Special Events ❎</li>'}
        ${body.group ? '<li>Mama Groups/Play Dates ✅</li>': '<li>Mama Groups/Play Dates ❎</li>'}
        ${body.corporate ? '<li>Corporate Events ✅</li>': '<li>Corporate Events ❎</li>'}
      </ul>
      <p>Additional Notes: ${body.message}</p>
    </div>
  `

  const messageBodyMama = `
    <!DOCTYPE html>
    <html>
      <body style="padding: 20px; line-height: 1.6em; font-size: 15px; font-family: 'Helvetica', 'Arial', sans-serif; background-color: #f9f9f9; color: #444 !important">
        <div style="background-color: #FDF3EA; margin: 20px auto; width: 70%; max-width: 420px; padding: 30px 50px;">
          <div style="font-size: 25px; color: #F087A0 !important; font-weight: 800; padding-bottom: 20px;">Excited to have you in our squad 💜</div>
          <div>Mama, we've received your request and our event squad will get in touch with you shortly!</div>
          <br />
          <table >
            <tr>
              <td style="font-size: 13px; color: #444 !important;"><i>We are here to support, mama, so hit us with your questions!</i></td>
            </tr>
            <tr>
              <td>📞 <a style="text-decoration: none; color: #444 !important; font-size: 13px" href=”tel:+18662663779″>1 (866) 266 - 3779</a></td>
            </tr>
            <tr>
              <td>📧 <a style="text-decoration: none; color: #444 !important; font-size: 13px" href="mailto:hello@mamamobile.com">hello@mamamobile.com</a></td>
            </tr>
          </table>
        </div>
      </body>
    </html>`;

  let dataAdmin = {
    from: `${fullName} <${email}>`,
    to: 'Event Squad <hello@mamamobile.com>,',
    cc: 'Event Squad <cherry@mamamobile.com>',
    subject: 'Event Booking 🎉',
    html: messageBody
  };

  let dataMama = {
    from: 'Event Squad <hello@mamamobile.com>',
    to: `${fullName} <${email}>`,
    subject: 'Event Booking 🎉',
    html: messageBodyMama
  }
  
  const mamaEmail = mailgun.messages().send(dataMama);
  const adminEmail = mailgun.messages().send(dataAdmin);
  
  Promise.all([mamaEmail, adminEmail])
  .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      });
    }
  ).catch(err => callback(err));
}