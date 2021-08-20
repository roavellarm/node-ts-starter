"use strict";Object.defineProperty(exports, "__esModule", {value: true});


 var user = null; exports.user = user // eslint-disable-line
 var res = null; exports.res = res // eslint-disable-line

 function setCurrentUser(_currentUser, _response) {
  exports.user = _currentUser
  exports.res = _response
} exports.setCurrentUser = setCurrentUser;
