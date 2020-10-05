import React from 'react';
import { MUIFileInput, setValue, processFilesWithCallback, attachField } from 'react-forms';
import { makeStyles, createStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var MUIDropFile = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var classes = useStyles(fieldProps);
    var _c = React.useState([]), files = _c[0], setFiles = _c[1];
    var handleDisplay = function (files) {
        console.log(files);
        return React.createElement(Box, { display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center" }, files.map(function (file, index) {
            return React.createElement(Box, { className: classes.acceptedFile, m: 1, p: 2, key: file.name + index }, file.name);
        }));
    };
    var accept = fieldProps.accept, onDropFile = fieldProps.onDropFile, _d = fieldProps.multiple, multiple = _d === void 0 ? true : _d, _e = fieldProps.defaultClass, defaultClass = _e === void 0 ? classes.defaultClass : _e, _f = fieldProps.activeClass, activeClass = _f === void 0 ? classes.activeClass : _f, _g = fieldProps.label, label = _g === void 0 ? "Drag and drop a file/files here" : _g, readAs = fieldProps.readAs, loadFile = fieldProps.loadFile, _h = fieldProps.encoding, encoding = _h === void 0 ? 'utf-8' : _h, _j = fieldProps.renderAccepted, renderAccepted = _j === void 0 ? handleDisplay : _j, _k = fieldProps.fullWidth, fullWidth = _k === void 0 ? true : _k, acceptedFileArea = fieldProps.acceptedFileArea, rest = __rest(fieldProps, ["accept", "onDropFile", "multiple", "defaultClass", "activeClass", "label", "readAs", "loadFile", "encoding", "renderAccepted", "fullWidth", "acceptedFileArea"]);
    var wrapWith = function (input) { return (React.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "center", minWidth: 700, width: fullWidth ? '100%' : 600 },
        React.createElement(Box, __assign({ m: 2 }, getRootProps(), { className: clsx(defaultClass, isDragActive ? activeClass : ""), display: "flex", alignItems: "center", justifyContent: "center" }),
            React.createElement(Typography, null, label),
            input),
        React.createElement(Box, { width: 300, className: acceptedFileArea }, renderAccepted(files)))); };
    var handleDrop = function (files) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!loadFile) return [3 /*break*/, 2];
                    return [4 /*yield*/, (loadFile === null || loadFile === void 0 ? void 0 : loadFile(files))];
                case 1:
                    res = _a.sent();
                    setFiles(res);
                    setValue(res, formikProps, fieldProps);
                    return [2 /*return*/];
                case 2:
                    setValue(files, formikProps, fieldProps);
                    processFilesWithCallback(files, function (prop) {
                        var imgs = prop.imgs, rem = prop.rem;
                        onDropFile === null || onDropFile === void 0 ? void 0 : onDropFile(imgs, rem);
                        setFiles(rem.concat(imgs));
                    }, readAs, encoding);
                    return [2 /*return*/];
            }
        });
    }); };
    var onDrop = React.useCallback(handleDrop, []);
    var _l = useDropzone({ onDrop: onDrop }), isDragActive = _l.isDragActive, getRootProps = _l.getRootProps, getInputProps = _l.getInputProps;
    return (React.createElement(MUIFileInput, { fieldProps: __assign(__assign({}, rest), { multiple: multiple, wrapWith: wrapWith, accept: accept, readAs: readAs, nativeInputProps: __assign({}, getInputProps()) }), formikProps: formikProps }));
};
var useStyles = makeStyles(function (theme) {
    return (createStyles({
        defaultClass: {
            border: '1px dashed grey', borderRadius: 8, minWidth: 400, height: 300, background: 'lightgrey', position: 'relative', flex: 1,
        },
        activeClass: { backgroundColor: 'transparent' },
        acceptedFile: { background: 'lightgrey', border: '1px dashed grey', margin: theme.spacing(1), padding: theme.spacing(1), minWidth: 200 }
    }));
});

attachField('drop-file', React.createElement(MUIDropFile, null));

var index = './lib';

export default index;
export { MUIDropFile };
//# sourceMappingURL=index.es.js.map
