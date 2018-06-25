'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by steve on 20/09/15.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var styles = {
    error: {
        color: "rgb(244, 67, 54)",
        fontSize: "12px",
        lineHeight: "12px"
    },
    checkbox: {
        marginTop: "14px",
        marginBottom: "0px",
        height: "72px"
    }
};

var Checkbox2 = function (_React$Component) {
    _inherits(Checkbox2, _React$Component);

    function Checkbox2(props) {
        _classCallCheck(this, Checkbox2);

        var _this = _possibleConstructorReturn(this, (Checkbox2.__proto__ || Object.getPrototypeOf(Checkbox2)).call(this, props));

        var _this$props = _this.props,
            model = _this$props.model,
            form = _this$props.form;
        var key = form.key;
        //If a boolean is stored, use it; if not, if a boolean is defined as schema's default, use it.

        var value = _.isBoolean(_this.props.value) ? _this.props.value : _.isBoolean(form.schema.default) ? form.schema.default : undefined;
        _this.props.setDefault(key, model, form, value);
        return _this;
    }

    _createClass(Checkbox2, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: this.props.form.className, style: styles.checkbox },
                _react2.default.createElement(_Checkbox2.default, {
                    name: this.props.form.key.slice(-1)[0],
                    value: this.props.form.key.slice(-1)[0],
                    checked: this.props.value,
                    label: this.props.form.title,
                    disabled: this.props.form.readonly,
                    onCheck: function onCheck(e, checked) {
                        _this2.props.onChangeValidate(e);
                    }
                }),
                _react2.default.createElement(
                    'span',
                    { style: styles.error },
                    this.props.errorText
                )
            );
        }
    }]);

    return Checkbox2;
}(_react2.default.Component);

var _default = (0, _ComposedComponent2.default)(Checkbox2);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(styles, 'styles', 'src/Checkbox.js');

    __REACT_HOT_LOADER__.register(Checkbox2, 'Checkbox2', 'src/Checkbox.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/Checkbox.js');
}();

;