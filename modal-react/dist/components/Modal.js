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
// Import the necessary modules and assets

// Define the Modal functional component
function Modal(props) {
  // Destructure the props for easier access
  var autoClose = props.autoClose,
    autoCloseDuration = props.autoCloseDuration,
    onClose = props.onClose;

  // Use the useEffect hook to run logic when the component mounts or updates
  (0, _react.useEffect)(function () {
    // Check if the modal should auto-close
    if (autoClose) {
      // Set a timer to close the modal
      var timeout = setTimeout(function () {
        onClose(); // Call the onClose function after the specified duration
      }, autoCloseDuration || 3000); // Use the duration from props, or default to 3 seconds

      // Cleanup function to clear the timer when the component is unmounted
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [autoClose, autoCloseDuration, onClose]); // Declare dependencies for useEffect

  // If the modal isn't open, don't render anything
  if (!props.isOpen) return null;

  // Render the modal
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    style: {
      backgroundColor: props.color || 'white',
      borderRadius: props.border || '5px'
    }
  }, props.children, " ",
  // If autoClose is false, render the close button
  !props.autoClose && /*#__PURE__*/_react.default.createElement("button", {
    className: "close-btn",
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "close-img",
    src: _close.default,
    alt: "bouton de fermeture"
  }))));
}

// Export the Modal component for use in other files
var _default = Modal;
exports.default = _default;