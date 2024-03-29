import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from '../icon';
import { WithTheme } from '../style';
import ListStyles from './style/index';
export var Brief = function (_React$Component) {
    _inherits(Brief, _React$Component);

    function Brief() {
        _classCallCheck(this, Brief);

        return _possibleConstructorReturn(this, (Brief.__proto__ || Object.getPrototypeOf(Brief)).apply(this, arguments));
    }

    _createClass(Brief, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                style = _props.style,
                wrap = _props.wrap;

            var numberOfLines = {};
            if (wrap === false) {
                numberOfLines = {
                    numberOfLines: 1
                };
            }
            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: ListStyles },
                function (styles) {
                    return React.createElement(
                        View,
                        { style: [styles.Brief] },
                        React.createElement(
                            Text,
                            _extends({ style: [styles.BriefText, style] }, numberOfLines),
                            children
                        )
                    );
                }
            );
        }
    }]);

    return Brief;
}(React.Component);

var Item = function (_React$Component2) {
    _inherits(Item, _React$Component2);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _a = this.props,
                styles = _a.styles,
                children = _a.children,
                multipleLine = _a.multipleLine,
                thumb = _a.thumb,
                extra = _a.extra,
                arrow = _a.arrow,
                style = _a.style,
                onPress = _a.onPress,
                onPressIn = _a.onPressIn,
                onPressOut = _a.onPressOut,
                wrap = _a.wrap,
                disabled = _a.disabled,
                align = _a.align,
                restProps = __rest(_a, ["styles", "children", "multipleLine", "thumb", "extra", "arrow", "style", "onPress", "onPressIn", "onPressOut", "wrap", "disabled", "align"]);
            return React.createElement(
                WithTheme,
                { styles: styles, themeStyles: ListStyles },
                function (itemStyles) {
                    var numberOfLines = {};
                    if (wrap === false) {
                        numberOfLines = {
                            numberOfLines: 1
                        };
                    }
                    var underlayColor = {};
                    if (!disabled && onPress) {
                        underlayColor = {
                            underlayColor: StyleSheet.flatten(itemStyles.underlayColor).backgroundColor,
                            activeOpacity: 0.5
                        };
                    } else {
                        underlayColor = {
                            activeOpacity: 1
                        };
                    }
                    var alignStyle = {};
                    if (align === 'top') {
                        alignStyle = {
                            alignItems: 'flex-start'
                        };
                    } else if (align === 'bottom') {
                        alignStyle = {
                            alignItems: 'flex-end'
                        };
                    }
                    var contentDom = void 0;
                    if (Array.isArray(children)) {
                        var tempContentDom = [];
                        children.forEach(function (el, index) {
                            if (React.isValidElement(el)) {
                                tempContentDom.push(el);
                            } else {
                                tempContentDom.push(React.createElement(
                                    Text,
                                    _extends({ style: [itemStyles.Content] }, numberOfLines, { key: index + '-children' }),
                                    el
                                ));
                            }
                        });
                        contentDom = React.createElement(
                            View,
                            { style: [itemStyles.column] },
                            tempContentDom
                        );
                    } else {
                        if (children && React.isValidElement(children)) {
                            contentDom = React.createElement(
                                View,
                                { style: [itemStyles.column] },
                                children
                            );
                        } else {
                            contentDom = React.createElement(
                                View,
                                { style: [itemStyles.column] },
                                React.createElement(
                                    Text,
                                    _extends({ style: [itemStyles.Content] }, numberOfLines),
                                    children
                                )
                            );
                        }
                    }
                    var extraDom = void 0;
                    if (extra) {
                        extraDom = React.createElement(
                            View,
                            { style: [itemStyles.column] },
                            React.createElement(
                                Text,
                                _extends({ style: [itemStyles.Extra] }, numberOfLines),
                                extra
                            )
                        );
                        if (React.isValidElement(extra)) {
                            var extraChildren = extra.props.children;
                            if (Array.isArray(extraChildren)) {
                                var tempExtraDom = [];
                                extraChildren.forEach(function (el, index) {
                                    if (typeof el === 'string') {
                                        tempExtraDom.push(React.createElement(
                                            Text,
                                            _extends({}, numberOfLines, { style: [itemStyles.Extra], key: index + '-children' }),
                                            el
                                        ));
                                    } else {
                                        tempExtraDom.push(el);
                                    }
                                });
                                extraDom = React.createElement(
                                    View,
                                    { style: [itemStyles.column] },
                                    tempExtraDom
                                );
                            } else {
                                extraDom = extra;
                            }
                        }
                    }
                    var arrEnum = {
                        horizontal: React.createElement(Icon, { name: 'right', style: itemStyles.Arrow }),
                        down: React.createElement(Icon, { name: 'down', style: itemStyles.ArrowV }),
                        up: React.createElement(Icon, { name: 'up', style: itemStyles.ArrowV })
                    };
                    var itemView = React.createElement(
                        View,
                        _extends({}, restProps, { style: [itemStyles.Item, style] }),
                        typeof thumb === 'string' ? React.createElement(Image, { source: { uri: thumb }, style: [itemStyles.Thumb, multipleLine && itemStyles.multipleThumb] }) : thumb,
                        React.createElement(
                            View,
                            { style: [itemStyles.Line, multipleLine && itemStyles.multipleLine, multipleLine && alignStyle] },
                            contentDom,
                            extraDom,
                            arrow ? arrEnum[arrow] || React.createElement(View, { style: itemStyles.Arrow }) : null
                        )
                    );
                    return React.createElement(
                        TouchableHighlight,
                        _extends({}, underlayColor, {
                            // TODO: fix onClick
                            onPress: _this3.props.onClick ? _this3.props.onClick : onPress || undefined, onPressIn: onPressIn, onPressOut: onPressOut }),
                        itemView
                    );
                }
            );
        }
    }]);

    return Item;
}(React.Component);

export default Item;

Item.defaultProps = {
    multipleLine: false,
    wrap: false
};
Item.Brief = Brief;