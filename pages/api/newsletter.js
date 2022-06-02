export default function (req, res) {
    console.log('req', req.body);
    console.log('pass', process.env.GOOGLE_PASSWORD);
    let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GOOGLE_USERNAME,
      pass: process.env.GOOGLE_PASSWORD,
    },
    secure: true,
});

const mailData = {
    from: 'lankaactionfoundation@gmail.com',
    to: 'admin@lankaaction.com',
    subject: 'News Letter subscribe',
    text: JSON.stringify(req.body),
    html: `<a href='${req.body.email}'>${req.body.email}</a>`,
}

transporter.sendMail(mailData, function (err, info) {
    if(err){

        console.log(JSON.stringify(console.log(info)))
    } 
    else
    {
        console.log(JSON.stringify(info))
    }
      
  })

  res.status(200);

}