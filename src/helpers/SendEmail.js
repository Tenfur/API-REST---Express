import nodemailer from "nodemailer";

const sendEmail = (user) => {
    // Transport
    const transporter =nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "paocisneroslo18@gmail.com",
            pass: "jrtr renu nsfb aqhf"
        }
    })
    const message = {
        from: "pcisneros18@gmail.com",
        to: "paocisneros09@hotmail.com",
        subject: "Confirm your account",
        text: "This is a text message",
        html: `
            <h1>Hello, ${user.name}<h1>
            <p>You need to validate your account in the next link: www.google.com</p>
            <p>Token: ${user.validation_token} </p>
        `,
    }

    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo electrónico:', error);
        } else {
            console.log('Correo electrónico enviado:', info.response);
        }
    });
}

export default sendEmail;