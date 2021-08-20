"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _nodemailer = require('nodemailer'); var _nodemailer2 = _interopRequireDefault(_nodemailer);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config()













const mailer = _nodemailer2.default.createTransport({
  host: `${process.env.MAIL_SERVICE_HOST}`,
  port: Number(process.env.MAIL_SERVICE_PORT),
  auth: {
    user: `${process.env.MAIL_SERVICE_LOGIN}`,
    pass: `${process.env.MAIL_SERVICE_PASSWORD}`,
  },
})

async function sendMail(mail) {
  await mailer.sendMail({
    to: {
      name: mail.to.name,
      address: mail.to.email,
    },
    from: {
      name: _optionalChain([mail, 'optionalAccess', _ => _.from, 'optionalAccess', _2 => _2.name]) || 'My Company Name',
      address: _optionalChain([mail, 'optionalAccess', _3 => _3.from, 'optionalAccess', _4 => _4.email]) || 'mycompany@email.com',
    },
    subject: mail.subject,
    html: mail.body,
  })
}

exports.sendMail = sendMail;
