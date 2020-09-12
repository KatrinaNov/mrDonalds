const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
  const options = {
    from: `MRDonalds <${email}>`,
    to: data.email,
    subject: 'Ваш заказ из MRDonalds',
    html: `
      <div>
        <h2>Добрый день, ${data.nameClient}!</h2>
        <h3>Ваш заказ:</h3>
        <ul>
        ${data.order.map(({name, count, price}) => (
          `<li>${name} - ${count}шт., цена ${price * count}</li>`
        ))}
          </ul>
          <p>Итого: ${data.order.reduce((sum, item) => 
          sum + (item.price * item.count), 0)}руб.
          </p>
          <small>Ожидайте курьера.</small>
      </div>
    `
  };
  transporter.sendMail(options);
}
 
exports.senUserEmail = functions.database.ref('orders/{pushID}')
.onCreate(order => sendOrderEmail(order.val()));
  

