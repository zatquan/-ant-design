'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _style = require('../style');

var _getLocale = require('../_util/getLocale');

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _prompt = require('./style/prompt');

var _prompt2 = _interopRequireDefault(_prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PropmptContainer = function (_React$Component) {
    (0, _inherits3['default'])(PropmptContainer, _React$Component);

    function PropmptContainer(props) {
        (0, _classCallCheck3['default'])(this, PropmptContainer);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (PropmptContainer.__proto__ || Object.getPrototypeOf(PropmptContainer)).call(this, props));

        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.state = {
            visible: true,
            text: props.defaultValue,
            password: props.type === 'secure-text' ? props.defaultValue : ''
        };
        return _this;
    }

    (0, _createClass3['default'])(PropmptContainer, [{
        key: 'onChangeText',
        value: function onChangeText(type, value) {
            this.setState((0, _defineProperty3['default'])({}, type, value));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                title = _props.title,
                onAnimationEnd = _props.onAnimationEnd,
                message = _props.message,
                type = _props.type,
                actions = _props.actions,
                placeholders = _props.placeholders;
            var _state = this.state,
                text = _state.text,
                password = _state.password;

            var getArgs = function getArgs(func) {
                if (type === 'login-password') {
                    return func.apply(this, [text, password]);
                } else if (type === 'secure-text') {
                    return func.apply(this, [password]);
                }
                return func.apply(this, [text]);
            };
            // tslint:disable-next-line:variable-name
            var _locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'Modal', function () {
                return _zh_CN2['default'];
            });
            var callbacks = void 0;
            if (typeof actions === 'function') {
                callbacks = [{ text: _locale.cancelText, style: 'cancel', onPress: function onPress() {} }, { text: _locale.okText, onPress: function onPress() {
                        return getArgs(actions);
                    } }];
            } else {
                callbacks = actions.map(function (item) {
                    return {
                        text: item.text,
                        onPress: function onPress() {
                            if (item.onPress) {
                                return getArgs(item.onPress);
                            }
                        },
                        style: item.style || {}
                    };
                });
            }
            var footer = callbacks.map(function (button) {
                // tslint:disable-next-line:only-arrow-functions
                var orginPress = button.onPress || function () {};
                button.onPress = function () {
                    var res = orginPress();
                    if (res && res.then) {
                        res.then(function () {
                            _this2.onClose();
                        });
                    } else {
                        _this2.onClose();
                    }
                };
                return button;
            });
            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _prompt2['default'] },
                function (styles) {
                    var firstStyle = [styles.inputWrapper];
                    var lastStyle = [styles.inputWrapper];
                    if (type === 'login-password') {
                        firstStyle.push(styles.inputFirst);
                        lastStyle.push(styles.inputLast);
                    } else if (type === 'secure-text') {
                        lastStyle.push(styles.inputFirst);
                        lastStyle.push(styles.inputLast);
                    } else {
                        firstStyle.push(styles.inputFirst);
                        firstStyle.push(styles.inputLast);
                    }
                    return _react2['default'].createElement(
                        _Modal2['default'],
                        { transparent: true, title: title, visible: _this2.state.visible, footer: footer, onAnimationEnd: onAnimationEnd },
                        _react2['default'].createElement(
                            _reactNative.KeyboardAvoidingView,
                            { behavior: 'padding' },
                            message ? _react2['default'].createElement(
                                _reactNative.Text,
                                { style: styles.message },
                                message
                            ) : null,
                            _react2['default'].createElement(
                                _reactNative.View,
                                { style: styles.inputGroup },
                                type !== 'secure-text' && _react2['default'].createElement(
                                    _reactNative.View,
                                    { style: firstStyle },
                                    _react2['default'].createElement(_reactNative.TextInput, { autoFocus: true, onChangeText: function onChangeText(value) {
                                            _this2.onChangeText('text', value);
                                        }, value: _this2.state.text, style: styles.input, underlineColorAndroid: 'transparent', placeholder: placeholders[0] })
                                ),
                                (type === 'secure-text' || type === 'login-password') && _react2['default'].createElement(
                                    _reactNative.View,
                                    { style: lastStyle },
                                    _react2['default'].createElement(_reactNative.TextInput, { autoFocus: true, secureTextEntry: true, onChangeText: function onChangeText(value) {
                                            _this2.onChangeText('password', value);
                                        }, value: _this2.state.password, style: styles.input, underlineColorAndroid: 'transparent', placeholder: placeholders[1] })
                                )
                            )
                        )
                    );
                }
            );
        }
    }]);
    return PropmptContainer;
}(_react2['default'].Component);

exports['default'] = PropmptContainer;

PropmptContainer.defaultProps = {
    type: 'default',
    defaultValue: ''
};
PropmptContainer.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];