import nodeMailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

interface IAddress {
  name: string
  email: string
}

export interface IMail {
  to: IAddress
  from?: IAddress
  subject: string
  body: string
}

const mailer = nodeMailer.createTransport({
  host: `${process.env.MAIL_SERVICE_HOST}`,
  port: Number(process.env.MAIL_SERVICE_PORT),
  auth: {
    user: `${process.env.MAIL_SERVICE_LOGIN}`,
    pass: `${process.env.MAIL_SERVICE_PASSWORD}`,
  },
})

async function sendMail(mail: IMail): Promise<void> {
  await mailer.sendMail({
    to: {
      name: mail.to.name,
      address: mail.to.email,
    },
    from: {
      name: mail?.from?.name || 'My Company Name',
      address: mail?.from?.email || 'mycompany@email.com',
    },
    subject: mail.subject,
    html: mail.body,
  })
}

export { sendMail }
