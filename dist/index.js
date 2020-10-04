'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactForms = require('react-forms');
var core = require('@material-ui/core');
var Box = _interopDefault(require('@material-ui/core/Box/Box'));
var clsx = _interopDefault(require('clsx'));
var reactDropzone = require('react-dropzone');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var MUIDropFile = function (props) {
    var classes = useStyles();
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var accept = fieldProps.accept, onDropFile = fieldProps.onDropFile, _c = fieldProps.multiple, multiple = _c === void 0 ? true : _c, _d = fieldProps.defaultClass, defaultClass = _d === void 0 ? classes.defaultClass : _d, _e = fieldProps.activeClass, activeClass = _e === void 0 ? classes.activeClass : _e, _f = fieldProps.label, label = _f === void 0 ? "Drag and drop a file/files here" : _f, readAs = fieldProps.readAs, rest = __rest(fieldProps, ["accept", "onDropFile", "multiple", "defaultClass", "activeClass", "label", "readAs"]);
    var wrapWith = function (input) { return (React.createElement(Box, __assign({}, getRootProps(), { className: clsx(defaultClass, isDragActive ? activeClass : ""), display: "flex", alignItems: "center", justifyContent: "center" }),
        React.createElement(core.Typography, null, label),
        input)); };
    var handleDrop = function (files) {
        reactForms.setValue(files, formikProps, fieldProps);
        onDropFile === null || onDropFile === void 0 ? void 0 : onDropFile(files);
    };
    var onDrop = React.useCallback(handleDrop, []);
    var _g = reactDropzone.useDropzone({ onDrop: onDrop }), isDragActive = _g.isDragActive, getRootProps = _g.getRootProps, getInputProps = _g.getInputProps;
    return (React.createElement(React.Fragment, null,
        React.createElement(reactForms.MUIFileInput, { fieldProps: __assign(__assign({}, rest), { multiple: multiple, wrapWith: wrapWith, accept: accept, readAs: readAs, nativeInputProps: __assign({}, getInputProps()) }), formikProps: formikProps })));
};
var useStyles = core.makeStyles(function () { return core.createStyles({
    defaultClass: { border: '1px dashed grey', borderRadius: 8, width: 900, height: 300, background: 'lightgrey', position: 'relative' },
    activeClass: { backgroundColor: 'transparent' }
}); });

reactForms.attachField('drop-file', React.createElement(MUIDropFile, null));

var index = './lib';

exports.MUIDropFile = MUIDropFile;
exports.default = index;
//# sourceMappingURL=index.js.map
