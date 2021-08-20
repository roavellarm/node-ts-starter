import { IUser } from 'interfaces'
import { renderTemplate } from './renderTemplate'
import { sendMail } from '../../config/mailer'

export async function registerConfirmationEmail(user: IUser) {
  await sendMail({
    to: {
      name: user.firstname,
      email: user.email,
    },
    subject: 'Register confirmation',
    body: renderTemplate(user),
  })
}
