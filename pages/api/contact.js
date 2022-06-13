export default function (req, res) {
    console.log('req', req.body);
    console.log('pass', process.env.NEXT_PUBLIC_GOOGLE_PASSWORD);
    let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_GOOGLE_USERNAME,
      pass: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD,
    },
    secure: true,
});

const name = req.body.name;
const email = req.body.email;
const phone = req.body.phone;
const address = req.body.address;
const project = req.body.project;
const message = req.body.message;


const mailData = {
    from: 'lankaactionfoundation@gmail.com',
    to: 'admin@lankaaction.com',
    subject: 'Contact - '+project,
    text: JSON.stringify(req.body),
    html: `<div>
        Name: ${name}
        <br/>
        Email: ${email}
        <br/>
        Phone: ${phone}
        <br/>
        Address: ${address}
        <br/>
        Project: ${project}
        <br/>
        Message: ${message}
    </div>`,
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