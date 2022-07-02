"use strict";
exports.__esModule = true;
exports.Home = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var localization_context_1 = require("../../lib/contexts/localization/localization.context");
var home_template_1 = require("./home.template");
var home_custom_data_1 = require("./home-custom-data");
var initial_state_1 = require("./initial.state");
var reducer_1 = require("./reducer");
function Home() {
    var t = react_1.useContext(localization_context_1.LocalizationContext).t;
    var _a = react_1.useReducer(reducer_1.homeReducer, initial_state_1.homeInitialState), state = _a[0], dispatch = _a[1];
    var inputRef = react_1.useRef(null);
    react_1.useEffect(function () {
        dispatch({
            type: 'ITEMS',
            payload: home_custom_data_1.homeCustomData
        });
    }, []);
    var addItem = function () {
        var _a, _b;
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                title: state.txt,
                isCanceled: false,
                key: Math.random() * 99999
            }
        });
        (_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.clear) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    var cancelItem = function (id) {
        react_native_1.LayoutAnimation.easeInEaseOut();
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        });
    };
    var changeTxt = function (txt) {
        dispatch({
            type: 'CHANGE_TXT',
            payload: txt
        });
        return txt;
    };
    return (react_1["default"].createElement(home_template_1.HomeTemplate, { title: t('app.title'), items: state.items, addItem: addItem, cancelItem: cancelItem, changeTxt: changeTxt, inputRef: inputRef }));
}
exports.Home = Home;
