const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `<div>
    <h2>Your Recent Order for ${total}</h2>
    <p>Please start walking over, we will have your order ready in the next 20 mins.</p>
    <ul>
      ${order
        .map(
          (item) => `<li>
        <img src="${item.thumbnail}" alt="${item.name}"/>
        ${item.size} ${item.name} - ${item.price}
      </li>`
        )
        .join('')}
    </ul>
    <p>Your total is <strong>$${total}</strong> due at pickup</p>
    <style>
        ul {
          list-style: none;
        }
    </style>
  </div>`;
}

// create a transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  if (body.treacle) {
    return {
      statusCode: 400,
      body: JSON.stringify('boop beep bop goodbye error 34234'),
    };
  }
  // valudate the data coming in is correct
  const requiredFields = ['error', 'name', 'order'];

  for (const field of requiredFields) {
    console.log(`Checking that ${field} is good`);
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }

  // send the email

  // send the success or error message

  // test send an email
  const info = await transporter.sendMail({
    from: 'Pizza Co. <pizzaco@example.com>',
    to: `${body.name} <{body.email}>`,
    subject: 'New order',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });

  console.log(info);

  return {
    statusCode: '200',
    body: JSON.stringify({ message: 'success' }),
  };
};
