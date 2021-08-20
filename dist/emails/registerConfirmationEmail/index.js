"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _renderTemplate = require('./renderTemplate');
var _mailer = require('../../config/mailer');

 async function registerConfirmationEmail(user) {
  await _mailer.sendMail.call(void 0, {
    to: {
      name: user.firstname,
      email: user.email,
    },
    subject: 'Register confirmation',
    body: _renderTemplate.renderTemplate.call(void 0, user),
  })
} exports.registerConfirmationEmail = registerConfirmationEmail;
