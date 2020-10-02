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

var MUIDropFile = function (props) {
    var classes = useStyles();
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var accept = fieldProps.accept, onDropFile = fieldProps.onDropFile, _c = fieldProps.multiple, multiple = _c === void 0 ? true : _c, _d = fieldProps.defaultClass, defaultClass = _d === void 0 ? classes.defaultClass : _d, _e = fieldProps.activeClass, activeClass = _e === void 0 ? classes.activeClass : _e, _f = fieldProps.label, label = _f === void 0 ? "Drag and drop a file/files here" : _f, readAs = fieldProps.readAs;
    var WrapWith = function (input) { return (React.createElement(Box, __assign({}, getRootProps(), { className: clsx(defaultClass, isDragActive ? activeClass : ""), display: "flex", alignItems: "center", justifyContent: "center" }),
        React.createElement(core.Typography, null, label),
        input)); };
    var onDrop = React.useCallback(onDropFile, []);
    var _g = reactDropzone.useDropzone({ onDrop: onDrop }), isDragActive = _g.isDragActive, getRootProps = _g.getRootProps;
    return (
    // @ts-ignore
    React.createElement(reactForms.MUIFileInput, { fieldProps: __assign(__assign({}, fieldProps), { multiple: multiple, WrapWith: WrapWith, accept: accept, readAs: readAs }), formikProps: formikProps }));
};
var useStyles = core.makeStyles(function () { return core.createStyles({
    defaultClass: { border: '1px dashed grey', borderRadius: 8, width: 900, height: 300, background: 'lightgrey' },
    activeClass: { backgroundColor: 'transparent' }
}); });

reactForms.attachField('dropFile', React.createElement(MUIDropFile, null));

var index = './lib';

exports.MUIDropFile = MUIDropFile;
exports.default = index;
//# sourceMappingURL=index.js.map
