const express = require('express');
const app = express();
const route = express.Router()
const nodemailer = require("nodemailer");
const cors = require('cors');
var bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config()
// const config = require('./config')
// app.get('/getreq', (req,res) => {
//     res.send('get request')
// });

app.use(cors());
//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: false
}));

sgMail.setApiKey('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')
app.post('/mymail', (req,res,next) => {
    const {name,email,website,subject,message} = req.body
    // console.log("server sy req body",req.body, "config", config.USER);   

    const msg = {
        to: 'app_scorrer@yahoo.com',
        from: email,
        name,
        subject,
        message,
    }

    // sgMail.send(msg)
    // .then(msg => console.log(msg, "respose"))
    // .catch(err => console.log(err.message, "error catch sy "))
    

    console.log("server sy new message ",msg);

    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Content-Type");
    
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        // service: 'yahoo',
        auth: {
          user: process.env.USER , // generated ethereal user
          pass: process.env.PASS // generated ethereal password 
        }
    });

    
    let info =  { 
        from: email, // sender address
        to: "salman.ahmed@saviours.co", // list of receivers
        subject: ' subject' , // Subject line
        // website: 'website' + website,
        text: `         name: ${name}
                        Email: ${email} 
                        Website: ${website}
                        message: ${message}  `, // plain text body
        // html: "<b>website</b>" // html body
    };
    
    transporter.sendMail(info, (error,info) => {
        if(error){
            return console.log(error, 'mail ka erro');
        }
        else{
            console.log("Message sent: %s", info.messageId);

            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }
    })

    // next()
     
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server is running on port no' , port));