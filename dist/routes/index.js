"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _authRoutes = require('./authRoutes'); var _authRoutes2 = _interopRequireDefault(_authRoutes);
var _mainRoutes = require('./mainRoutes'); var _mainRoutes2 = _interopRequireDefault(_mainRoutes);

const routes = [..._authRoutes2.default, ..._mainRoutes2.default]

exports. default = routes
