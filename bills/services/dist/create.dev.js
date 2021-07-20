"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Bill = _interopRequireDefault(require("./../schema/Bill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(req, res) {
  var bill = new _Bill["default"](req.body);

  _Bill["default"].save().then(function (created) {
    if (!created) {
      return res.status(404).json({
        status: false,
        data: {}
      });
    }
  })["catch"](function (err) {
    return res.status(500).json({
      status: false,
      data: {}
    });
  });

  return res.json({
    'bill': 'bills services'
  });
};

exports["default"] = _default;