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

const firstName = req.body.firstName;
const lastName = req.body.lastName;
const phone = req.body.phone;
const email = req.body.email;
const dob = req.body.dob;
const address = req.body.address;
const city = req.body.city;
const state = req.body.state;
const project = req.body.project;
const startingDate = req.body.starting_date;
const yWork = req.body.why_do_you_want_to_work;
const type = req.body.type;
var country = '';
var id = '';

if(type == 'local')
{
    country = 'Sri Lanka';
    id = 'NIC-'+req.body.nic;
}
else{
    country = req.body.nationality;
    id= 'Passport-'+req.body.passport;
}

const mailData = {
    from: 'lankaactionfoundation@gmail.com',
    to: 'admin@lankaaction.com',
    subject: 'Volunteer',
    text: JSON.stringify(req.body),
    html: `<div>
        First name: ${firstName}
        <br />
Last name: ${lastName}
<br />
Identification: ${id}
<br />
D.O.B: ${dob}
<br />
Phone: ${phone}
<br />
Email: <a href="mailto:${email}">${email}</a>
<br/>
Address: ${address}
<br/>
Country: ${country}
<br/>
City: ${city}
<br/>
State: ${state}
<br/>
Project: ${project}
<br/>
Starting date: ${startingDate}
<br/>
Reason: ${yWork}
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