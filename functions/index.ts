const nodemailer = require("nodemailer");

exports.sendMail = (req, res) => {
    res.set('Access-Control-Allow-Origin', process.env.MAIL_CORS);

    const query = req.query;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER, // generated ethereal user
            pass: process.env.MAIL_PASS // generated ethereal password
        }
    });

    // send mail with defined transport object
    const info = transporter.sendMail({
        from: 'team@projet.io', // sender address
        to: 'team@projet.io', // list of receivers
        subject: "Contact Site Co OGong ✔", // Subject line
        html:
        `<h1>Contact : ${query.name}</h1>
        <h2>Email : ${query.email}</h2>
        <h3>Message</h3>
        <p>${query.message}</p>` // html body
    });

    res.status(200).json(info);
};