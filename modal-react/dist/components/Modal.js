"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _close = _interopRequireDefault(require("../assets/close.png"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Modal(props) {
  var autoClose = props.autoClose,
    autoCloseDuration = props.autoCloseDuration,
    onClose = props.onClose;
  (0, _react.useEffect)(function () {
    if (autoClose) {
      var timeout = setTimeout(function () {
        onClose();
      }, autoCloseDuration || 3000);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [autoClose, autoCloseDuration, onClose]);
  if (!props.isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    style: {
      backgroundColor: props.color || 'white',
      borderRadius: props.border || '5px'
    }
  }, props.children, !props.autoClose && /*#__PURE__*/_react.default.createElement("button", {
    className: "close-btn",
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "close-img",
    src: _close.default,
    alt: "bouton de fermeture"
  }))));
}
var _default = Modal;
exports.default = _default;
console.log('test');