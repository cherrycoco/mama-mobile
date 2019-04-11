const Mailchimp = require('mailchimp-api-v3');
const api_key = process.env.REACT_APP_MAILCHIMP_KEY;
const mailchimp = new Mailchimp(api_key);
const listID = '9fdf977b19';

export function handler(event, context, callback) {
  let body = JSON.parse(event.body);
  let email = body.email.toLowerCase();
  let city = body.city.toLowerCase(); 

  let data = {
    email_address : email,
    status : 'subscribed',
    location: {},
    tags: [city]
  };

  console.log(data);
  mailchimp.post(`/lists/${listID}/members`, data)
  .then(result => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    })
  })
  .catch(err => {
    callback(err);
  });
}