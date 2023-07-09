"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto/Roboto-Thin.ttf */ "./src/fonts/Roboto/Roboto-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* Prevents Error Display on Browser Screen */

/*
iframe {
    display: none;
}

*/

/* Custom Font */

@font-face {
    font-family: 'roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* Overall Styling */

:root {
    --textColor: #eaebec;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    height: 100vh;
    width: 100vw;
    font-family: 'roboto';
}

header,
footer {
    grid-column-start: 1;
    grid-column-end: 3;
}

.hidden {
    top: 0;
    left: 0;
    pointer-events: none !important;
    position: absolute !important;
    max-height: 0 !important;
    transition: max-height 1s ease-out !important;
    opacity: 0 !important;
}

/* Header */

header {
    display: flex;
    align-items: center;
    padding: 0.8em 0.8em;
    background-color: #233647;
    color: var(--textColor);
}

.header-container {
    font-size: 2em;
}

.header-img {
    height: 4em;
    width: 4em;
    margin-right: 1em;
}

/* Sidebar */

sidebar {
    padding: 0.8em 1.8em 0.8em 1.8em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: #1b2a37;
    color: var(--textColor);
    box-shadow: inset 0 9px 9px -9px #233647;
}

.sidebar-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

hr {
    border-color: #9fa0a1;
    background-color: #9fa0a1;
    color: #9fa0a1;
    width: 100%;
    border-top: 1px;
}

#project {
    display: flex;
    flex-direction: column;
}

#project-content {
    width: 100%;
}

#project-form,
#edit-project-form {
    padding: 0.5em;
    border-radius: 4px;
}

#project-form:hover,
#edit-project-form:hover {
    background-color: #233647;
}

#project-input,
#edit-project-input {
    border: none;
    border-radius: 4px;
    width: 99%;
    height: 1.5em;
    appearance: none;
    background: none;
    border: 2px solid rgba(90, 90, 90, 0.443);
    color: #eff0f3a6;
}

#project-input:focus,
#edit-project-input {
    outline: none;
    border: 2px solid #3aabb6;
}

#project-input::--webkit-input-placeholder,
#edit-project-input::--webkit-input-placeholder {
    color: black;
}

#sidebar-form-button-container,
#edit-sidebar-form-button-container {
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-top: 0.5em;
}

.sidebar-form-button {
    border: none;
    border-radius: 2px;
    height: 2em;
    width: 100%;
    color: #dbdbdb;
    font-weight: bold;
}

.sidebar-button,
.sidebar-project-button,
#add-task {
    padding: 0.5em;
    background: none;
    border: none;
    border-radius: 4px;
    font-family: 'roboto';
    color: var(--textColor);
    width: 100%;
    text-align: start;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    align-items: center;
}

.sidebar-button:hover,
.sidebar-project-button:hover,
#add-task:hover {
    background-color: #2d4356;
    cursor: pointer;
}

.remove-project-button,
.edit-project-button {
    background: none;
    border: none;
    color: var(--textColor);
    font-family: roboto;
}

.remove-project-button:hover,
.edit-project-button:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.528);
}

/* Main */

main {
    display: grid;
    grid-template-columns: 1fr 3fr;
    flex-grow: 1;
    box-shadow: inset 0 9px 9px -9px #233647;
    background-color: #192734;
    color: var(--textColor);
}

#task-content {
    display: flex;
    flex-direction: column;
}

.overlay.active {
    display: block;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.form-popup {
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    border-radius: 10px;
}

#form-container,
.form-edit-container {
    max-width: 280px;
    padding: 20px;
    background-color: #192734;
    border-radius: 20px;
    font-family: 'roboto';
}

#form-header,
#form-edit-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5em;
    font-size: 2em;
    text-align: center;
}

#form-container input[type='text'],
#form-container textarea,
#form-container input[type='date'],
.form-edit-container input[type='text'],
.form-edit-container textarea,
.form-edit-container input[type='date'] {
    width: 18.5em;
    padding: 15px;
    margin: 5px 0 20px 0;
    border: none;
    background: #233647;
    border-radius: 10px;
    font-family: roboto;
    color: #dbdbdb;
}

#form-container textarea,
.form-edit-container textarea {
    height: 91px;
    resize: none;
}

#task-title::placeholder,
#description::placeholder,
#task-edit-title::placeholder,
#edit-description::placeholder {
    color: #dbdbdb;
    opacity: 1; /* Firefox */
}

#task-title::-ms-input-placeholder,
#description::-ms-input-placeholder,
#task-edit-title::-ms-input-placeholder,
#edit-description::-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #dbdbdb;
}

#task-title::-ms-input-placeholder,
#description::-ms-input-placeholder,
#task-edit-title::-ms-input-placeholder,
#edit-description::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #dbdbdb;
}

#task-title::-webkit-calendar-picker-indicator,
#description::-webkit-calendar-picker-indicator,
#task-edit-title::-webkit-calendar-picker-indicator,
#edit-description::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

.task-form-button-div {
    display: flex;
    justify-content: center;
    gap: 1em;
}

.task-form-button {
    margin-top: 0.5em;
    border: none;
    border-radius: 2px;
    height: 2.6em;
    width: 100%;
    color: #dbdbdb;
    font-weight: bold;
}

#submit,
#sidebar-submit,
#edit-sidebar-submit,
#edit-submit {
    background-color: #1f8d4d;
}

#submit:hover,
#sidebar-submit:hover,
#edit-sidebar-submit:hover,
#edit-submit:hover {
    cursor: pointer;
    background-color: #1c7842;
}

#cancel,
#sidebar-cancel,
#edit-sidebar-cancel,
#edit-cancel {
    background-color: #be0404;
}

#cancel:hover,
#sidebar-cancel:hover,
#edit-sidebar-cancel:hover,
#edit-cancel:hover {
    cursor: pointer;
    background-color: #a50505;
}

#add-task {
    font-size: 1em;
}

/* Main Content */

main-content {
    padding: 0.8em 1.8em 0.8em 1.8em;
}

#main-header {
    margin-bottom: 1em;
    background-color: #233647;
    border-radius: 4px;
    padding: 1em;
}

.taskCard {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    margin-bottom: 1em;
    gap: 2em;
    padding: 1em;
    border: #b9bcbe 2px solid;
    border-radius: 12px;
    position: relative;
    height: 2.5em;
}

.taskCard label {
    background-color: #fff0;
    border: 2px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 36px;
    left: 15px;
    position: absolute;
    top: 15px;
    width: 36px;
}

.taskCard label.disabled-checkbox {
    cursor: default;
}

.taskCard label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: '';
    height: 10px;
    left: 9px;
    opacity: 0;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 17px;
}

.taskCard input[type='checkbox'] {
    visibility: hidden;
}

.taskCard input[type='checkbox']:checked + label {
    background-color: #5baa5f;
    border-color: #5baa5f;
}

.taskCard input[type='checkbox']:checked + label:after {
    opacity: 1;
}

.taskCard p,
.taskCard date {
    align-self: center;
}

.titleCard,
.dateCard {
    align-self: center;
}

.dateCard {
    justify-self: center;
}

.taskCard button {
    border: none;
    background: none;
    justify-self: center;
}

.taskCard button:hover {
    cursor: pointer;
}

/* Footer */

footer {
    background-color: #233647;
    padding: 0.8em 1em 0.8em 1em;
}

#github-link {
    text-align: center;
    color: black;
    text-decoration: none;
    color: #eaebec;
}

#github-link:hover {
    color: #d2d4d5;
    text-decoration: none;
}

/* Styling for Phone */

@media (max-width: 540px) {
    main {
        display: flex;
        flex-direction: column;
    }
}
`, "",{"version":3,"sources":["webpack://./src/modules/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/* Prevents Error Display on Browser Screen */\n\n/*\niframe {\n    display: none;\n}\n\n*/\n\n/* Custom Font */\n\n@font-face {\n    font-family: 'roboto';\n    src: url('../fonts/Roboto/Roboto-Thin.ttf');\n}\n\n/* Overall Styling */\n\n:root {\n    --textColor: #eaebec;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: stretch;\n    height: 100vh;\n    width: 100vw;\n    font-family: 'roboto';\n}\n\nheader,\nfooter {\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n.hidden {\n    top: 0;\n    left: 0;\n    pointer-events: none !important;\n    position: absolute !important;\n    max-height: 0 !important;\n    transition: max-height 1s ease-out !important;\n    opacity: 0 !important;\n}\n\n/* Header */\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 0.8em 0.8em;\n    background-color: #233647;\n    color: var(--textColor);\n}\n\n.header-container {\n    font-size: 2em;\n}\n\n.header-img {\n    height: 4em;\n    width: 4em;\n    margin-right: 1em;\n}\n\n/* Sidebar */\n\nsidebar {\n    padding: 0.8em 1.8em 0.8em 1.8em;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    background-color: #1b2a37;\n    color: var(--textColor);\n    box-shadow: inset 0 9px 9px -9px #233647;\n}\n\n.sidebar-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\nhr {\n    border-color: #9fa0a1;\n    background-color: #9fa0a1;\n    color: #9fa0a1;\n    width: 100%;\n    border-top: 1px;\n}\n\n#project {\n    display: flex;\n    flex-direction: column;\n}\n\n#project-content {\n    width: 100%;\n}\n\n#project-form,\n#edit-project-form {\n    padding: 0.5em;\n    border-radius: 4px;\n}\n\n#project-form:hover,\n#edit-project-form:hover {\n    background-color: #233647;\n}\n\n#project-input,\n#edit-project-input {\n    border: none;\n    border-radius: 4px;\n    width: 99%;\n    height: 1.5em;\n    appearance: none;\n    background: none;\n    border: 2px solid rgba(90, 90, 90, 0.443);\n    color: #eff0f3a6;\n}\n\n#project-input:focus,\n#edit-project-input {\n    outline: none;\n    border: 2px solid #3aabb6;\n}\n\n#project-input::--webkit-input-placeholder,\n#edit-project-input::--webkit-input-placeholder {\n    color: black;\n}\n\n#sidebar-form-button-container,\n#edit-sidebar-form-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 2em;\n    margin-top: 0.5em;\n}\n\n.sidebar-form-button {\n    border: none;\n    border-radius: 2px;\n    height: 2em;\n    width: 100%;\n    color: #dbdbdb;\n    font-weight: bold;\n}\n\n.sidebar-button,\n.sidebar-project-button,\n#add-task {\n    padding: 0.5em;\n    background: none;\n    border: none;\n    border-radius: 4px;\n    font-family: 'roboto';\n    color: var(--textColor);\n    width: 100%;\n    text-align: start;\n    display: grid;\n    grid-template-columns: 4fr 1fr 1fr;\n    align-items: center;\n}\n\n.sidebar-button:hover,\n.sidebar-project-button:hover,\n#add-task:hover {\n    background-color: #2d4356;\n    cursor: pointer;\n}\n\n.remove-project-button,\n.edit-project-button {\n    background: none;\n    border: none;\n    color: var(--textColor);\n    font-family: roboto;\n}\n\n.remove-project-button:hover,\n.edit-project-button:hover {\n    cursor: pointer;\n    color: rgba(255, 255, 255, 0.528);\n}\n\n/* Main */\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    flex-grow: 1;\n    box-shadow: inset 0 9px 9px -9px #233647;\n    background-color: #192734;\n    color: var(--textColor);\n}\n\n#task-content {\n    display: flex;\n    flex-direction: column;\n}\n\n.overlay.active {\n    display: block;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.form-popup {\n    display: none;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9;\n    border-radius: 10px;\n}\n\n#form-container,\n.form-edit-container {\n    max-width: 280px;\n    padding: 20px;\n    background-color: #192734;\n    border-radius: 20px;\n    font-family: 'roboto';\n}\n\n#form-header,\n#form-edit-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0.5em;\n    font-size: 2em;\n    text-align: center;\n}\n\n#form-container input[type='text'],\n#form-container textarea,\n#form-container input[type='date'],\n.form-edit-container input[type='text'],\n.form-edit-container textarea,\n.form-edit-container input[type='date'] {\n    width: 18.5em;\n    padding: 15px;\n    margin: 5px 0 20px 0;\n    border: none;\n    background: #233647;\n    border-radius: 10px;\n    font-family: roboto;\n    color: #dbdbdb;\n}\n\n#form-container textarea,\n.form-edit-container textarea {\n    height: 91px;\n    resize: none;\n}\n\n#task-title::placeholder,\n#description::placeholder,\n#task-edit-title::placeholder,\n#edit-description::placeholder {\n    color: #dbdbdb;\n    opacity: 1; /* Firefox */\n}\n\n#task-title::-ms-input-placeholder,\n#description::-ms-input-placeholder,\n#task-edit-title::-ms-input-placeholder,\n#edit-description::-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #dbdbdb;\n}\n\n#task-title::-ms-input-placeholder,\n#description::-ms-input-placeholder,\n#task-edit-title::-ms-input-placeholder,\n#edit-description::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: #dbdbdb;\n}\n\n#task-title::-webkit-calendar-picker-indicator,\n#description::-webkit-calendar-picker-indicator,\n#task-edit-title::-webkit-calendar-picker-indicator,\n#edit-description::-webkit-calendar-picker-indicator {\n    filter: invert(1);\n}\n\n.task-form-button-div {\n    display: flex;\n    justify-content: center;\n    gap: 1em;\n}\n\n.task-form-button {\n    margin-top: 0.5em;\n    border: none;\n    border-radius: 2px;\n    height: 2.6em;\n    width: 100%;\n    color: #dbdbdb;\n    font-weight: bold;\n}\n\n#submit,\n#sidebar-submit,\n#edit-sidebar-submit,\n#edit-submit {\n    background-color: #1f8d4d;\n}\n\n#submit:hover,\n#sidebar-submit:hover,\n#edit-sidebar-submit:hover,\n#edit-submit:hover {\n    cursor: pointer;\n    background-color: #1c7842;\n}\n\n#cancel,\n#sidebar-cancel,\n#edit-sidebar-cancel,\n#edit-cancel {\n    background-color: #be0404;\n}\n\n#cancel:hover,\n#sidebar-cancel:hover,\n#edit-sidebar-cancel:hover,\n#edit-cancel:hover {\n    cursor: pointer;\n    background-color: #a50505;\n}\n\n#add-task {\n    font-size: 1em;\n}\n\n/* Main Content */\n\nmain-content {\n    padding: 0.8em 1.8em 0.8em 1.8em;\n}\n\n#main-header {\n    margin-bottom: 1em;\n    background-color: #233647;\n    border-radius: 4px;\n    padding: 1em;\n}\n\n.taskCard {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;\n    margin-bottom: 1em;\n    gap: 2em;\n    padding: 1em;\n    border: #b9bcbe 2px solid;\n    border-radius: 12px;\n    position: relative;\n    height: 2.5em;\n}\n\n.taskCard label {\n    background-color: #fff0;\n    border: 2px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 36px;\n    left: 15px;\n    position: absolute;\n    top: 15px;\n    width: 36px;\n}\n\n.taskCard label.disabled-checkbox {\n    cursor: default;\n}\n\n.taskCard label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: '';\n    height: 10px;\n    left: 9px;\n    opacity: 0;\n    position: absolute;\n    top: 10px;\n    transform: rotate(-45deg);\n    width: 17px;\n}\n\n.taskCard input[type='checkbox'] {\n    visibility: hidden;\n}\n\n.taskCard input[type='checkbox']:checked + label {\n    background-color: #5baa5f;\n    border-color: #5baa5f;\n}\n\n.taskCard input[type='checkbox']:checked + label:after {\n    opacity: 1;\n}\n\n.taskCard p,\n.taskCard date {\n    align-self: center;\n}\n\n.titleCard,\n.dateCard {\n    align-self: center;\n}\n\n.dateCard {\n    justify-self: center;\n}\n\n.taskCard button {\n    border: none;\n    background: none;\n    justify-self: center;\n}\n\n.taskCard button:hover {\n    cursor: pointer;\n}\n\n/* Footer */\n\nfooter {\n    background-color: #233647;\n    padding: 0.8em 1em 0.8em 1em;\n}\n\n#github-link {\n    text-align: center;\n    color: black;\n    text-decoration: none;\n    color: #eaebec;\n}\n\n#github-link:hover {\n    color: #d2d4d5;\n    text-decoration: none;\n}\n\n/* Styling for Phone */\n\n@media (max-width: 540px) {\n    main {\n        display: flex;\n        flex-direction: column;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/modules/style.css":
/*!*******************************!*\
  !*** ./src/modules/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");


class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTasks() {
        return this.tasks;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName);
    }

    contains(taskName) {
        return this.tasks.some((task) => task.getName() === taskName);
    }

    addTask(newTask) {
        this.tasks.push(newTask);
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.getName() !== taskName);
    }

    getAllTasks() {
        return this.tasks.map((task) => task);
    }

    getTasksToday() {
        return this.tasks.filter((task) => {
            const taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(task.getDate()), 1);
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(taskDate));
        });
    }

    getTasksThisWeek() {
        return this.tasks.filter((task) => {
            const taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(task.getDate()), 1);
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(taskDate));
        });
    }
}


/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ "./src/modules/TodoList.js");




class Storage {
    static saveTodoList(data) {
        localStorage.setItem('todoList', JSON.stringify(data));
    }

    static getTodoList() {
        const todoList = Object.assign(
            new _TodoList__WEBPACK_IMPORTED_MODULE_2__["default"](),
            JSON.parse(localStorage.getItem('todoList'))
        );

        todoList.setProjects(
            todoList
                .getProjects()
                .map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](), project))
        );

        todoList
            .getProjects()
            .forEach((project) =>
                project.setTasks(
                    project
                        .getTasks()
                        .map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](), task))
                )
            );

        return todoList;
    }

    static addProject(project) {
        const todoList = Storage.getTodoList();
        todoList.addProject(project);
        Storage.saveTodoList(todoList);
    }

    static deleteProject(projectName) {
        const todoList = Storage.getTodoList();
        todoList.deleteProject(projectName);
        Storage.saveTodoList(todoList);
    }

    static renameProject(projectName, newProjectName) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).setName(newProjectName);
        Storage.saveTodoList(todoList);
    }

    static addTask(projectName, task) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).addTask(task);
        Storage.saveTodoList(todoList);
    }

    static deleteTask(projectName, taskName) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).deleteTask(taskName);
        Storage.saveTodoList(todoList);
    }

    static clearTasks(projectName) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).clearTasks();
        Storage.saveTodoList(todoList);
    }

    static renameTask(
        projectName,
        taskName,
        newTaskName,
        newTaskDescription,
        newTaskDate
    ) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).getTask(taskName).setName(newTaskName);
        todoList
            .getProject(projectName)
            .getTask(taskName)
            .setDescription(newTaskDescription);
        todoList.getProject(projectName).getTask(taskName).setDate(newTaskDate);
        Storage.saveTodoList(todoList);
    }

    static setTaskDescription(projectName, taskName, newDescription) {
        const todoList = Storage.getTodoList();
        todoList
            .getProject(projectName)
            .getTask(taskName)
            .setDescription(newDescription);
        Storage.saveTodoList(todoList);
    }

    static setTaskDate(projectName, taskName, newDueDate) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).getTask(taskName).setDate(newDueDate);
        Storage.saveTodoList(todoList);
    }

    static setTaskCompletionStatus(projectName, taskName) {
        const todoList = Storage.getTodoList();
        todoList
            .getProject(projectName)
            .getTask(taskName)
            .toggleCompletionStatus();

        Storage.saveTodoList(todoList);
    }

    static updateAllTasksProject() {
        const todoList = Storage.getTodoList();
        todoList.updateAllTasksProject();
        Storage.saveTodoList(todoList);
    }

    static updateTodayProject() {
        const todoList = Storage.getTodoList();
        todoList.updateTodayProject();
        Storage.saveTodoList(todoList);
    }

    static updateWeekProject() {
        const todoList = Storage.getTodoList();
        todoList.updateWeekProject();
        Storage.saveTodoList(todoList);
    }
}


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, description, dueDate) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getDate() {
        return this.dueDate;
    }

    setDate(dueDate) {
        this.dueDate = dueDate;
    }

    getCompleteStatus() {
        return this.complete;
    }

    toggleCompletionStatus() {
        this.complete = !this.complete;
    }
}


/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");




class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('All Tasks'));
        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'));
        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('This Week'));
    }

    getProjects() {
        return this.projects;
    }

    setProjects(projects) {
        this.projects = projects;
    }

    getProject(projectName) {
        return this.projects.find(
            (project) => project.getName() === projectName
        );
    }

    contains(projectName) {
        return this.projects.some(
            (project) => project.getName() === projectName
        );
    }

    addProject(newProject) {
        this.projects.push(newProject);
    }

    deleteProject(projectName) {
        const projectToDelete = this.projects.find(
            (project) => project.getName() === projectName
        );
        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }

    updateAllTasksProject() {
        this.getProject('All Tasks').tasks = [];

        this.projects.forEach((project) => {
            if (
                project.getName() === 'All Tasks' ||
                project.getName() === 'Today' ||
                project.getName() === 'This Week'
            ) {
                return;
            }

            const allTasks = project.getAllTasks();
            allTasks.forEach((task) => {
                const taskName = `${task.getName()} (Project: ${project.getName()})`;
                if (task.complete === true) {
                    const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](
                        taskName,
                        task.description,
                        task.dueDate
                    );
                    newTask.toggleCompletionStatus();
                    this.getProject('All Tasks').addTask(newTask);
                } else {
                    this.getProject('All Tasks').addTask(
                        new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.description, task.dueDate)
                    );
                }
            });
        });
    }

    updateTodayProject() {
        this.getProject('Today').tasks = [];

        this.projects.forEach((project) => {
            if (
                project.getName() === 'All Tasks' ||
                project.getName() === 'Today' ||
                project.getName() === 'This Week'
            ) {
                return;
            }

            const todayTasks = project.getTasksToday();
            todayTasks.forEach((task) => {
                const taskName = `${task.getName()} (Project: ${project.getName()})`;
                if (task.complete === true) {
                    const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](
                        taskName,
                        task.description,
                        task.dueDate
                    );
                    newTask.toggleCompletionStatus();
                    this.getProject('Today').addTask(newTask);
                } else {
                    this.getProject('Today').addTask(
                        new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.description, task.dueDate)
                    );
                }
            });
        });
    }

    updateWeekProject() {
        this.getProject('This Week').tasks = [];

        this.projects.forEach((project) => {
            if (
                project.getName() === 'All Tasks' ||
                project.getName() === 'Today' ||
                project.getName() === 'This Week'
            ) {
                return;
            }

            const weekTasks = project.getTasksThisWeek();
            weekTasks.forEach((task) => {
                const taskName = `${task.getName()} (Project: ${project.getName()})`;
                if (task.complete === true) {
                    const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](
                        taskName,
                        task.description,
                        task.dueDate
                    );
                    newTask.toggleCompletionStatus();
                    this.getProject('This Week').addTask(newTask);
                } else {
                    this.getProject('This Week').addTask(
                        new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.description, task.dueDate)
                    );
                }
            });
        });

        this.getProject('This Week').setTasks(
            this.getProject('This Week')
                .getTasks()
                .sort((taskA, taskB) =>
                    (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(
                        (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(taskA.getDate())),
                        (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(taskB.getDate()))
                    )
                )
        );
    }
}


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var _img_pencil_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/pencil.png */ "./src/img/pencil.png");
/* harmony import */ var _img_trash_bin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/trash-bin.png */ "./src/img/trash-bin.png");






class UI {
    // LOAD CONTENT

    static loadHomepage() {
        UI.loadProjects();
        UI.initProjectButtons();
        UI.openProject('All Tasks', document.querySelector('#all-tasks'));
    }

    static loadProjects() {
        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList()
            .getProjects()
            .forEach((project) => {
                if (
                    project.name === 'All Tasks' ||
                    project.name === 'Today' ||
                    project.name === 'This Week'
                )
                    return;
                UI.createProjectButton(project.name);
            });
        UI.initAddProjectButtons();
        UI.initEditProjectButtons();
    }

    static loadProjectContent(projectName) {
        const mainHeader = document.querySelector('#main-header');

        mainHeader.innerText = projectName;

        UI.clearTasks();
        UI.loadTasks(projectName);
    }

    static loadTasks(projectName) {
        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList()
            .getProject(projectName)
            .getTasks()
            .forEach((task) =>
                UI.createTaskCard(projectName, task.name, task.dueDate)
            );
        if (
            projectName !== 'All Tasks' &&
            projectName !== 'Today' &&
            projectName !== 'This Week'
        ) {
            UI.initAddTaskButtons();
        }
    }

    // CREATE PROJECT

    static clearProjects() {
        const projects = document.querySelectorAll('.sidebar-project-button');
        projects.forEach((project) => project.remove());
    }

    static editProject(e) {
        const projectName = this.previousSibling.innerText;
        UI.openEditProjectForm(projectName, e);
    }

    static deleteProject() {
        const projectName = this.previousSibling.previousSibling.innerText;
        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(projectName);
        UI.clearProjects();
        UI.loadProjects();
        UI.openProject('All Tasks', document.querySelector('#all-tasks'));
    }

    static appendButtonsToProjectButton(projectName, projectButton) {
        const projectNameContainer = document.createElement('p');
        const editProjectButton = document.createElement('button');
        const removeProjectButton = document.createElement('button');

        editProjectButton.classList.add('edit-project-button');
        removeProjectButton.classList.add('remove-project-button');

        projectNameContainer.innerText = projectName;
        editProjectButton.innerText = 'Edit';
        removeProjectButton.innerText = 'Remove';

        editProjectButton.addEventListener('click', UI.editProject);
        removeProjectButton.addEventListener('click', UI.deleteProject);

        projectButton.append(
            projectNameContainer,
            editProjectButton,
            removeProjectButton
        );
    }

    static createProjectButton(projectName) {
        const projectButton = document.createElement('button');

        projectButton.classList.add('sidebar-project-button');

        UI.appendButtonsToProjectButton(projectName, projectButton);

        document.querySelector('#project').appendChild(projectButton);

        UI.initProjectButtons();
    }

    // ADD PROJECT EVENT LISTENERS

    static initAddProjectButtons() {
        const addProjectButton = document.querySelector('#add-project');
        const submitProjectButton = document.querySelector('#sidebar-submit');
        const cancelProjectButton = document.querySelector('#sidebar-cancel');

        addProjectButton.addEventListener('click', UI.openProjectForm);
        submitProjectButton.addEventListener('click', UI.addProject);
        cancelProjectButton.addEventListener(
            'click',
            UI.cancelProjectSubmission
        );
    }

    static openProjectForm() {
        document.querySelector('#project-form').classList.remove('hidden');
        document.querySelector('#project-input').focus();
    }

    static addProject(e) {
        e.preventDefault();
        const projectName = document.querySelector('#project-input').value;
        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName));
        UI.createProjectButton(projectName);
        UI.closeProjectForm();
    }

    static cancelProjectSubmission(e) {
        e.preventDefault();
        UI.closeProjectForm();
    }

    static closeProjectForm() {
        console.log('closed');
        document.querySelector('#project-form').classList.add('hidden');
        document.querySelector('#project-input').value = '';
    }

    // EDIT PROJECT FORM

    static initEditProjectButtons() {
        const submitProjectEdit = document.querySelector(
            '#edit-sidebar-submit'
        );
        const cancelProjectEdit = document.querySelector(
            '#edit-sidebar-cancel'
        );

        submitProjectEdit.addEventListener('click', UI.addProjectEdit);
        cancelProjectEdit.addEventListener('click', UI.cancelProjectEdit);
    }

    static addProjectEdit(e) {
        e.preventDefault();

        const projectToEdit =
            this.parentElement.parentElement.previousSibling.firstElementChild;
        const projectName = projectToEdit.innerText;
        const newProjectName = document.querySelector(
            '#edit-project-input'
        ).value;

        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].renameProject(projectName, newProjectName);

        UI.closeProjectEditForm();

        UI.clearProjects();
        UI.loadProjects();

        projectToEdit.style.display = 'grid';
    }

    static openEditProjectForm(projectName, e) {
        const projectToEdit = e.target.parentElement;
        const editProjectForm = document.querySelector('.edit-project-form');
        const editProjectInput = document.querySelector('#edit-project-input');

        projectToEdit.style.display = 'none';

        // Insert Form after projectToEdit
        projectToEdit.parentNode.insertBefore(
            editProjectForm,
            projectToEdit.nextSibling
        );

        editProjectForm.classList.remove('hidden');

        editProjectInput.value = projectName;
        editProjectInput.focus();
    }

    static cancelProjectEdit(e) {
        e.preventDefault();
        UI.closeProjectEditForm();
        this.parentElement.parentElement.previousSibling.style.display = 'grid';
    }

    static closeProjectEditForm() {
        document.querySelector('.edit-project-form').classList.add('hidden');
        document.querySelector('#edit-project-input').value = '';
    }

    // PROJECT EVENT LISTENERS

    static initProjectButtons() {
        const allTasksProjectsButton = document.querySelector('#all-tasks');
        const todayProjectsButton = document.querySelector('#today');
        const weekProjectsButton = document.querySelector('#this-week');
        const projectButtons = document.querySelectorAll(
            '.sidebar-project-button'
        );

        allTasksProjectsButton.addEventListener(
            'click',
            UI.openAllTasksProjectsButton
        );
        todayProjectsButton.addEventListener(
            'click',
            UI.openTodayProjectsButton
        );
        weekProjectsButton.addEventListener('click', UI.openWeekProjectsButton);
        projectButtons.forEach((projectButton) =>
            projectButton.addEventListener('click', UI.handleProjectButton)
        );
    }

    static openAllTasksProjectsButton() {
        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].updateAllTasksProject();
        UI.openProject('All Tasks', this);
    }

    static openTodayProjectsButton() {
        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].updateTodayProject();
        UI.openProject('Today', this);
    }

    static openWeekProjectsButton() {
        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].updateWeekProject();
        UI.openProject('This Week', this);
    }

    static openProject(projectName, projectButton) {
        const defaultProjectButtons =
            document.querySelectorAll('.sidebar-buttons');
        const projectButtons = document.querySelectorAll(
            '.sidebar-project-button'
        );
        const buttons = [...defaultProjectButtons, ...projectButtons];

        buttons.forEach((button) => button.classList.remove('selected'));
        projectButton.classList.add('selected');

        if (projectButton.classList.contains('sidebar-button')) {
            document.querySelector('#add-task').style.display = 'none';
        } else {
            document.querySelector('#add-task').style.display = 'block';
        }

        UI.loadProjectContent(projectName);
    }

    static handleProjectButton(e) {
        if (
            e.target.classList.contains('edit-project-button') ||
            e.target.classList.contains('remove-project-button')
        )
            return;
        const projectName = this.firstElementChild.innerText;

        UI.openProject(projectName, this);
    }

    // CREATE TASK

    static clearTasks() {
        const taskContainer = document.querySelector('#task');
        taskContainer.innerHTML = '';
    }

    static changeCompleteStatus() {
        const projectName = document.querySelector('#main-header').innerText;
        const taskName = this.parentElement.nextSibling.innerText;
        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].setTaskCompletionStatus(projectName, taskName);
    }

    static createCheckBox(projectName, taskName) {
        const completeStatus = _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList()
            .getProject(document.querySelector('#main-header').innerText)
            .getTask(taskName)
            .getCompleteStatus();
        const div = document.createElement('div');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');

        div.classList.add('round');

        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `checkbox-${taskName}`);

        label.setAttribute('for', `checkbox-${taskName}`);
        label.addEventListener('click', UI.changeCompleteStatus);

        if (completeStatus === true) {
            checkbox.click();
        }

        if (
            projectName === 'All Tasks' ||
            projectName === 'Today' ||
            projectName === 'This Week'
        ) {
            checkbox.disabled = true;
            label.classList.add('disabled-checkbox');
        }

        div.append(checkbox, label);

        return div;
    }

    static removeTask() {
        const projectName = document.querySelector('#main-header').innerText;
        const taskName =
            this.previousSibling.previousSibling.previousSibling.innerText;
        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(projectName, taskName);
        UI.clearTasks();
        UI.loadTasks(projectName);
    }

    static createTaskCardButtons(taskContainer, projectName, taskName, date) {
        const checkBox = UI.createCheckBox(projectName, taskName);
        const taskNameContainer = document.createElement('p');
        const dateContainer = document.createElement('p');
        const editTaskButton = document.createElement('button');
        const removeTaskButton = document.createElement('button');

        taskNameContainer.innerText = taskName;
        dateContainer.innerText = date;

        editTaskButton.classList.add('edit-task-button');
        removeTaskButton.classList.add('remove-task-button');

        editTaskButton.addEventListener('click', UI.openEditTaskForm);
        removeTaskButton.addEventListener('click', UI.removeTask);

        editTaskButton.style.backgroundImage = `url(${_img_pencil_png__WEBPACK_IMPORTED_MODULE_3__})`;
        editTaskButton.style.backgroundSize = 'cover';
        editTaskButton.style.width = '2.8em';
        editTaskButton.style.height = '2.8em';

        removeTaskButton.style.backgroundImage = `url(${_img_trash_bin_png__WEBPACK_IMPORTED_MODULE_4__})`;
        removeTaskButton.style.backgroundSize = 'cover';
        removeTaskButton.style.width = '2.8em';
        removeTaskButton.style.height = '2.8em';

        if (
            projectName === 'All Tasks' ||
            projectName === 'Today' ||
            projectName === 'This Week'
        ) {
            taskContainer.append(checkBox, taskNameContainer, dateContainer);
        } else {
            taskContainer.append(
                checkBox,
                taskNameContainer,
                dateContainer,
                editTaskButton,
                removeTaskButton
            );
        }
    }

    static createTaskCard(projectName, taskName, date) {
        const taskContainer = document.createElement('div');

        UI.createTaskCardButtons(taskContainer, projectName, taskName, date);

        taskContainer.classList.add('taskCard');

        document.querySelector('#task').appendChild(taskContainer);
    }

    // EDIT TASK FORM

    static openEditTaskForm() {
        const taskToEdit = this.parentElement;
        const taskName =
            this.previousElementSibling.previousElementSibling.innerText;
        const task = _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList()
            .getProject(document.querySelector('#main-header').innerText)
            .getTask(taskName);
        const editTaskSubmitButton = document.querySelector('#edit-submit');
        const cancelEditTaskButton = document.querySelector('#edit-cancel');

        editTaskSubmitButton.addEventListener('click', UI.editTask);
        cancelEditTaskButton.addEventListener(
            'click',
            UI.cancelEditTaskSubmission
        );

        document.querySelector('#task-edit-title').value = task.name;
        document.querySelector('#edit-description').value = task.description;
        document.querySelector('#edit-date').value = task.dueDate;
        document.querySelector('#overlay').classList.add('active');
        document.querySelector('#myEditForm').style.display = 'block';

        // Insert Form after taskToEdit
        taskToEdit.parentNode.insertBefore(
            document.querySelector('#myEditForm'),
            taskToEdit.nextSibling
        );
    }

    static editTask(e) {
        e.preventDefault();

        const projectName = document.querySelector('#main-header').innerText;
        const taskToEdit =
            this.parentElement.parentElement.parentElement
                .previousElementSibling;
        const taskName =
            taskToEdit.firstElementChild.nextElementSibling.innerText;
        const newTaskName = document.querySelector('#task-edit-title').value;
        const newTaskDescription =
            document.querySelector('#edit-description').value;
        const newTaskDate = document.querySelector('#edit-date').value;

        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].renameTask(
            projectName,
            taskName,
            newTaskName,
            newTaskDescription,
            newTaskDate
        );

        UI.closeEditTaskForm();

        UI.clearTasks();
        UI.loadTasks(projectName);
    }

    static closeEditTaskForm() {
        const myEditForm = document.querySelector('#myEditForm');

        document.querySelector('#task-edit-title').value = '';
        document.querySelector('#edit-description').value = '';
        document.querySelector('#edit-date').value = '';
        document.querySelector('#overlay').classList.remove('active');

        myEditForm.style.display = 'none';

        // Insert Form after addTaskForm to not delete it when clearing tasks
        document
            .querySelector('#myForm')
            .parentNode.insertBefore(
                myEditForm,
                document.querySelector('#myForm').nextSibling
            );
    }

    static cancelEditTaskSubmission(e) {
        e.preventDefault();
        UI.closeEditTaskForm();
    }

    // ADD TASK EVENT LISTENERS

    static initAddTaskButtons() {
        const addTaskButton = document.querySelector('#add-task');

        addTaskButton.addEventListener('click', UI.openAddTaskForm);
    }

    static openAddTaskForm() {
        document.querySelector('#overlay').classList.add('active');
        document.querySelector('#myForm').style.display = 'block';
        document.querySelector('#task-title').focus();

        const addTaskButton = document.querySelector('#submit');
        const cancelTaskButton = document.querySelector('#cancel');

        addTaskButton.addEventListener('click', UI.addTask);
        cancelTaskButton.addEventListener('click', UI.cancelTaskSubmission);
    }

    static closeAddTaskForm() {
        document.querySelector('#task-title').value = '';
        document.querySelector('#description').value = '';
        document.querySelector('#date').value = '';
        document.querySelector('#overlay').classList.remove('active');
        document.querySelector('#myForm').style.display = 'none';
    }

    static addTask(e) {
        e.preventDefault();

        const projectName = document.querySelector('#main-header').innerText;
        const taskName = document.querySelector('#task-title').value;
        const description = document.querySelector('#description').value;
        const date = document.querySelector('#date').value;

        _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(projectName, new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, description, date));
        UI.createTaskCard(projectName, taskName, date);
        UI.closeAddTaskForm();
    }

    static cancelTaskSubmission(e) {
        e.preventDefault();
        UI.closeAddTaskForm();
    }
}


/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/modules/style.css");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");



const overlay = document.querySelector('#overlay');

document.addEventListener('DOMContentLoaded', _UI__WEBPACK_IMPORTED_MODULE_1__["default"].loadHomepage);
window.onclick = (event) => {
    if (event.target === overlay) {
        console.log('clicked');
        _UI__WEBPACK_IMPORTED_MODULE_1__["default"].closeAddTaskForm();
        _UI__WEBPACK_IMPORTED_MODULE_1__["default"].closeEditTaskForm();
    }
};


/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Thin.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Thin.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a732a12eb07742232407.ttf";

/***/ }),

/***/ "./src/img/pencil.png":
/*!****************************!*\
  !*** ./src/img/pencil.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59d4c14d9db8a89389c1.png";

/***/ }),

/***/ "./src/img/trash-bin.png":
/*!*******************************!*\
  !*** ./src/img/trash-bin.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3064958e440239dc1a1d.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QywwSUFBa0Q7QUFDOUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBGQUEwRixNQUFNLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksZ0JBQWdCLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxRQUFRLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sUUFBUSxVQUFVLG9CQUFvQixPQUFPLFFBQVEsWUFBWSxXQUFXLE9BQU8sUUFBUSxZQUFZLFdBQVcsT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQU8sZ0JBQWdCLGdEQUFPO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLGdEQUFPOztBQUVmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxnREFBTztBQUNmO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGdEQUFPO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLFFBQVEsZ0RBQU87QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFPO0FBQ2Y7O0FBRUE7QUFDQSwrQkFBK0IsZ0RBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0RBQWdELFNBQVM7O0FBRXpELDhDQUE4QyxTQUFTO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFPO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBc0QsNENBQU8sQ0FBQztBQUM5RDtBQUNBO0FBQ0E7O0FBRUEsd0RBQXdELCtDQUFRLENBQUM7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLGdEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxnREFBTywwQkFBMEIsNkNBQUk7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDemdCcUI7QUFDQzs7QUFFdEI7O0FBRUEsOENBQThDLDJDQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQUU7QUFDVixRQUFRLDJDQUFFO0FBQ1Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdHlsZS5jc3M/NTJjMyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8vUm9ib3RvLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICAgIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBQcmV2ZW50cyBFcnJvciBEaXNwbGF5IG9uIEJyb3dzZXIgU2NyZWVuICovXG5cbi8qXG5pZnJhbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiovXG5cbi8qIEN1c3RvbSBGb250ICovXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLyogT3ZlcmFsbCBTdHlsaW5nICovXG5cbjpyb290IHtcbiAgICAtLXRleHRDb2xvcjogI2VhZWJlYztcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XG59XG5cbmhlYWRlcixcbmZvb3RlciB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4uaGlkZGVuIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xufVxuXG4vKiBIZWFkZXIgKi9cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC44ZW0gMC44ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzY0NztcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uaGVhZGVyLWltZyB7XG4gICAgaGVpZ2h0OiA0ZW07XG4gICAgd2lkdGg6IDRlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLyogU2lkZWJhciAqL1xuXG5zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjhlbSAwLjhlbSAxLjhlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmEzNztcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDlweCA5cHggLTlweCAjMjMzNjQ3O1xufVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuaHIge1xuICAgIGJvcmRlci1jb2xvcjogIzlmYTBhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZhMGExO1xuICAgIGNvbG9yOiAjOWZhMGExO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweDtcbn1cblxuI3Byb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3Byb2plY3QtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNwcm9qZWN0LWZvcm0sXG4jZWRpdC1wcm9qZWN0LWZvcm0ge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI3Byb2plY3QtZm9ybTpob3ZlcixcbiNlZGl0LXByb2plY3QtZm9ybTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzY0Nztcbn1cblxuI3Byb2plY3QtaW5wdXQsXG4jZWRpdC1wcm9qZWN0LWlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiA5OSU7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg5MCwgOTAsIDkwLCAwLjQ0Myk7XG4gICAgY29sb3I6ICNlZmYwZjNhNjtcbn1cblxuI3Byb2plY3QtaW5wdXQ6Zm9jdXMsXG4jZWRpdC1wcm9qZWN0LWlucHV0IHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYWFiYjY7XG59XG5cbiNwcm9qZWN0LWlucHV0OjotLXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbiNlZGl0LXByb2plY3QtaW5wdXQ6Oi0td2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNzaWRlYmFyLWZvcm0tYnV0dG9uLWNvbnRhaW5lcixcbiNlZGl0LXNpZGViYXItZm9ybS1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4uc2lkZWJhci1mb3JtLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2RiZGJkYjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZGViYXItYnV0dG9uLFxuLnNpZGViYXItcHJvamVjdC1idXR0b24sXG4jYWRkLXRhc2sge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyLWJ1dHRvbjpob3Zlcixcbi5zaWRlYmFyLXByb2plY3QtYnV0dG9uOmhvdmVyLFxuI2FkZC10YXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0MzU2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbixcbi5lZGl0LXByb2plY3QtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xufVxuXG4ucmVtb3ZlLXByb2plY3QtYnV0dG9uOmhvdmVyLFxuLmVkaXQtcHJvamVjdC1idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyOCk7XG59XG5cbi8qIE1haW4gKi9cblxubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgOXB4IDlweCAtOXB4ICMyMzM2NDc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbn1cblxuI3Rhc2stY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ub3ZlcmxheS5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZvcm0tcG9wdXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB6LWluZGV4OiA5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNmb3JtLWNvbnRhaW5lcixcbi5mb3JtLWVkaXQtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcbn1cblxuI2Zvcm0taGVhZGVyLFxuI2Zvcm0tZWRpdC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPSd0ZXh0J10sXG4jZm9ybS1jb250YWluZXIgdGV4dGFyZWEsXG4jZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT0nZGF0ZSddLFxuLmZvcm0tZWRpdC1jb250YWluZXIgaW5wdXRbdHlwZT0ndGV4dCddLFxuLmZvcm0tZWRpdC1jb250YWluZXIgdGV4dGFyZWEsXG4uZm9ybS1lZGl0LWNvbnRhaW5lciBpbnB1dFt0eXBlPSdkYXRlJ10ge1xuICAgIHdpZHRoOiAxOC41ZW07XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IDVweCAwIDIwcHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzIzMzY0NztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgY29sb3I6ICNkYmRiZGI7XG59XG5cbiNmb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSxcbi5mb3JtLWVkaXQtY29udGFpbmVyIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDkxcHg7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4jdGFzay10aXRsZTo6cGxhY2Vob2xkZXIsXG4jZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyLFxuI3Rhc2stZWRpdC10aXRsZTo6cGxhY2Vob2xkZXIsXG4jZWRpdC1kZXNjcmlwdGlvbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZGJkYmRiO1xuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbn1cblxuI3Rhc2stdGl0bGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiNkZXNjcmlwdGlvbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuI3Rhc2stZWRpdC10aXRsZTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuI2VkaXQtZGVzY3JpcHRpb246Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgICBjb2xvcjogI2RiZGJkYjtcbn1cblxuI3Rhc2stdGl0bGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiNkZXNjcmlwdGlvbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuI3Rhc2stZWRpdC10aXRsZTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuI2VkaXQtZGVzY3JpcHRpb246Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgICBjb2xvcjogI2RiZGJkYjtcbn1cblxuI3Rhc2stdGl0bGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcixcbiNkZXNjcmlwdGlvbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLFxuI3Rhc2stZWRpdC10aXRsZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLFxuI2VkaXQtZGVzY3JpcHRpb246Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi50YXNrLWZvcm0tYnV0dG9uLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFlbTtcbn1cblxuLnRhc2stZm9ybS1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiAyLjZlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2RiZGJkYjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3N1Ym1pdCxcbiNzaWRlYmFyLXN1Ym1pdCxcbiNlZGl0LXNpZGViYXItc3VibWl0LFxuI2VkaXQtc3VibWl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY4ZDRkO1xufVxuXG4jc3VibWl0OmhvdmVyLFxuI3NpZGViYXItc3VibWl0OmhvdmVyLFxuI2VkaXQtc2lkZWJhci1zdWJtaXQ6aG92ZXIsXG4jZWRpdC1zdWJtaXQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM3ODQyO1xufVxuXG4jY2FuY2VsLFxuI3NpZGViYXItY2FuY2VsLFxuI2VkaXQtc2lkZWJhci1jYW5jZWwsXG4jZWRpdC1jYW5jZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZTA0MDQ7XG59XG5cbiNjYW5jZWw6aG92ZXIsXG4jc2lkZWJhci1jYW5jZWw6aG92ZXIsXG4jZWRpdC1zaWRlYmFyLWNhbmNlbDpob3ZlcixcbiNlZGl0LWNhbmNlbDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNTA1MDU7XG59XG5cbiNhZGQtdGFzayB7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cbi8qIE1haW4gQ29udGVudCAqL1xuXG5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAuOGVtIDEuOGVtIDAuOGVtIDEuOGVtO1xufVxuXG4jbWFpbi1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNjQ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi50YXNrQ2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyIDFmciAxZnI7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGdhcDogMmVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBib3JkZXI6ICNiOWJjYmUgMnB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMi41ZW07XG59XG5cbi50YXNrQ2FyZCBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjA7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgd2lkdGg6IDM2cHg7XG59XG5cbi50YXNrQ2FyZCBsYWJlbC5kaXNhYmxlZC1jaGVja2JveCB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4udGFza0NhcmQgbGFiZWw6YWZ0ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IDlweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB3aWR0aDogMTdweDtcbn1cblxuLnRhc2tDYXJkIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnRhc2tDYXJkIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJhYTVmO1xuICAgIGJvcmRlci1jb2xvcjogIzViYWE1Zjtcbn1cblxuLnRhc2tDYXJkIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4udGFza0NhcmQgcCxcbi50YXNrQ2FyZCBkYXRlIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50aXRsZUNhcmQsXG4uZGF0ZUNhcmQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmRhdGVDYXJkIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnRhc2tDYXJkIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi50YXNrQ2FyZCBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRm9vdGVyICovXG5cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzY0NztcbiAgICBwYWRkaW5nOiAwLjhlbSAxZW0gMC44ZW0gMWVtO1xufVxuXG4jZ2l0aHViLWxpbmsge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZWFlYmVjO1xufVxuXG4jZ2l0aHViLWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjZDJkNGQ1O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogU3R5bGluZyBmb3IgUGhvbmUgKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgbWFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRkksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0lBV0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTs7OztJQUlJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBLDZDQUE2Qzs7QUFFN0M7Ozs7O0NBS0M7O0FBRUQsZ0JBQWdCOztBQUVoQjtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBMkM7QUFDL0M7O0FBRUEsb0JBQW9COztBQUVw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QUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLFdBQVc7O0FBRVg7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBQcmV2ZW50cyBFcnJvciBEaXNwbGF5IG9uIEJyb3dzZXIgU2NyZWVuICovXFxuXFxuLypcXG5pZnJhbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qL1xcblxcbi8qIEN1c3RvbSBGb250ICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90by9Sb2JvdG8tVGhpbi50dGYnKTtcXG59XFxuXFxuLyogT3ZlcmFsbCBTdHlsaW5nICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXRleHRDb2xvcjogI2VhZWJlYztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxuICAgIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcyBlYXNlLW91dCAhaW1wb3J0YW50O1xcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuOGVtIDAuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNjQ3O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmhlYWRlci1pbWcge1xcbiAgICBoZWlnaHQ6IDRlbTtcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG5zaWRlYmFyIHtcXG4gICAgcGFkZGluZzogMC44ZW0gMS44ZW0gMC44ZW0gMS44ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyYTM3O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCA5cHggOXB4IC05cHggIzIzMzY0NztcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmhyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWZhMGExO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZhMGExO1xcbiAgICBjb2xvcjogIzlmYTBhMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IDFweDtcXG59XFxuXFxuI3Byb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0sXFxuI2VkaXQtcHJvamVjdC1mb3JtIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybTpob3ZlcixcXG4jZWRpdC1wcm9qZWN0LWZvcm06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNjQ3O1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dCxcXG4jZWRpdC1wcm9qZWN0LWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiA5OSU7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoOTAsIDkwLCA5MCwgMC40NDMpO1xcbiAgICBjb2xvcjogI2VmZjBmM2E2O1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dDpmb2N1cyxcXG4jZWRpdC1wcm9qZWN0LWlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhYWJiNjtcXG59XFxuXFxuI3Byb2plY3QtaW5wdXQ6Oi0td2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxcbiNlZGl0LXByb2plY3QtaW5wdXQ6Oi0td2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jc2lkZWJhci1mb3JtLWJ1dHRvbi1jb250YWluZXIsXFxuI2VkaXQtc2lkZWJhci1mb3JtLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbn1cXG5cXG4uc2lkZWJhci1mb3JtLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAjZGJkYmRiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNpZGViYXItYnV0dG9uLFxcbi5zaWRlYmFyLXByb2plY3QtYnV0dG9uLFxcbiNhZGQtdGFzayB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhci1idXR0b246aG92ZXIsXFxuLnNpZGViYXItcHJvamVjdC1idXR0b246aG92ZXIsXFxuI2FkZC10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDM1NjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVtb3ZlLXByb2plY3QtYnV0dG9uLFxcbi5lZGl0LXByb2plY3QtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlcixcXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjgpO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDlweCA5cHggLTlweCAjMjMzNjQ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyNzM0O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG59XFxuXFxuI3Rhc2stY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5mb3JtLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogOTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyLFxcbi5mb3JtLWVkaXQtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAyODBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xcbn1cXG5cXG4jZm9ybS1oZWFkZXIsXFxuI2Zvcm0tZWRpdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPSd0ZXh0J10sXFxuI2Zvcm0tY29udGFpbmVyIHRleHRhcmVhLFxcbiNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPSdkYXRlJ10sXFxuLmZvcm0tZWRpdC1jb250YWluZXIgaW5wdXRbdHlwZT0ndGV4dCddLFxcbi5mb3JtLWVkaXQtY29udGFpbmVyIHRleHRhcmVhLFxcbi5mb3JtLWVkaXQtY29udGFpbmVyIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICAgIHdpZHRoOiAxOC41ZW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogNXB4IDAgMjBweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICMyMzM2NDc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICAgIGNvbG9yOiAjZGJkYmRiO1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIgdGV4dGFyZWEsXFxuLmZvcm0tZWRpdC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDkxcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI3Rhc2stdGl0bGU6OnBsYWNlaG9sZGVyLFxcbiNkZXNjcmlwdGlvbjo6cGxhY2Vob2xkZXIsXFxuI3Rhc2stZWRpdC10aXRsZTo6cGxhY2Vob2xkZXIsXFxuI2VkaXQtZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNkYmRiZGI7XFxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuI3Rhc2stdGl0bGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG4jZGVzY3JpcHRpb246Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG4jdGFzay1lZGl0LXRpdGxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuI2VkaXQtZGVzY3JpcHRpb246Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXFxuICAgIGNvbG9yOiAjZGJkYmRiO1xcbn1cXG5cXG4jdGFzay10aXRsZTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcbiNkZXNjcmlwdGlvbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcbiN0YXNrLWVkaXQtdGl0bGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG4jZWRpdC1kZXNjcmlwdGlvbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cXG4gICAgY29sb3I6ICNkYmRiZGI7XFxufVxcblxcbiN0YXNrLXRpdGxlOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXFxuI2Rlc2NyaXB0aW9uOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXFxuI3Rhc2stZWRpdC10aXRsZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLFxcbiNlZGl0LWRlc2NyaXB0aW9uOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLnRhc2stZm9ybS1idXR0b24tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG4udGFzay1mb3JtLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgaGVpZ2h0OiAyLjZlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAjZGJkYmRiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3N1Ym1pdCxcXG4jc2lkZWJhci1zdWJtaXQsXFxuI2VkaXQtc2lkZWJhci1zdWJtaXQsXFxuI2VkaXQtc3VibWl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmOGQ0ZDtcXG59XFxuXFxuI3N1Ym1pdDpob3ZlcixcXG4jc2lkZWJhci1zdWJtaXQ6aG92ZXIsXFxuI2VkaXQtc2lkZWJhci1zdWJtaXQ6aG92ZXIsXFxuI2VkaXQtc3VibWl0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM3ODQyO1xcbn1cXG5cXG4jY2FuY2VsLFxcbiNzaWRlYmFyLWNhbmNlbCxcXG4jZWRpdC1zaWRlYmFyLWNhbmNlbCxcXG4jZWRpdC1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUwNDA0O1xcbn1cXG5cXG4jY2FuY2VsOmhvdmVyLFxcbiNzaWRlYmFyLWNhbmNlbDpob3ZlcixcXG4jZWRpdC1zaWRlYmFyLWNhbmNlbDpob3ZlcixcXG4jZWRpdC1jYW5jZWw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNTA1MDU7XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKiBNYWluIENvbnRlbnQgKi9cXG5cXG5tYWluLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjhlbSAwLjhlbSAxLjhlbTtcXG59XFxuXFxuI21haW4taGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNjQ3O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLnRhc2tDYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmciAxZnIgMWZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGdhcDogMmVtO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJvcmRlcjogI2I5YmNiZSAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG59XFxuXFxuLnRhc2tDYXJkIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICB3aWR0aDogMzZweDtcXG59XFxuXFxuLnRhc2tDYXJkIGxhYmVsLmRpc2FibGVkLWNoZWNrYm94IHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4udGFza0NhcmQgbGFiZWw6YWZ0ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGxlZnQ6IDlweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHdpZHRoOiAxN3B4O1xcbn1cXG5cXG4udGFza0NhcmQgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2tDYXJkIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYWE1ZjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNWJhYTVmO1xcbn1cXG5cXG4udGFza0NhcmQgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFza0NhcmQgcCxcXG4udGFza0NhcmQgZGF0ZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlQ2FyZCxcXG4uZGF0ZUNhcmQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlQ2FyZCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFza0NhcmQgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tDYXJkIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzY0NztcXG4gICAgcGFkZGluZzogMC44ZW0gMWVtIDAuOGVtIDFlbTtcXG59XFxuXFxuI2dpdGh1Yi1saW5rIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNlYWViZWM7XFxufVxcblxcbiNnaXRodWItbGluazpob3ZlciB7XFxuICAgIGNvbG9yOiAjZDJkNGQ1O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIFBob25lICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XFxuICAgIG1haW4ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2VlaywgYWRkRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxuXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgIH1cblxuICAgIGdldFRhc2sodGFza05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBjb250YWlucyh0YXNrTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICAgIH1cblxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrTmFtZSkge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpICE9PSB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0QWxsVGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLm1hcCgodGFzaykgPT4gdGFzayk7XG4gICAgfVxuXG4gICAgZ2V0VGFza3NUb2RheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGFkZERheXMobmV3IERhdGUodGFzay5nZXREYXRlKCkpLCAxKTtcbiAgICAgICAgICAgIHJldHVybiBpc1RvZGF5KHRvRGF0ZSh0YXNrRGF0ZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUYXNrc1RoaXNXZWVrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gYWRkRGF5cyhuZXcgRGF0ZSh0YXNrLmdldERhdGUoKSksIDEpO1xuICAgICAgICAgICAgcmV0dXJuIGlzVGhpc1dlZWsodG9EYXRlKHRhc2tEYXRlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vVG9kb0xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgc2F2ZVRvZG9MaXN0KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgbmV3IFRvZG9MaXN0KCksXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKVxuICAgICAgICApO1xuXG4gICAgICAgIHRvZG9MaXN0LnNldFByb2plY3RzKFxuICAgICAgICAgICAgdG9kb0xpc3RcbiAgICAgICAgICAgICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG4gICAgICAgICk7XG5cbiAgICAgICAgdG9kb0xpc3RcbiAgICAgICAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAgICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNldFRhc2tzKFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VGFza3MoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0b2RvTGlzdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmFtZVByb2plY3QocHJvamVjdE5hbWUsIG5ld1Byb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5zZXROYW1lKG5ld1Byb2plY3ROYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUYXNrKHByb2plY3ROYW1lLCB0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5hZGRUYXNrKHRhc2spO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5kZWxldGVUYXNrKHRhc2tOYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhclRhc2tzKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5jbGVhclRhc2tzKCk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuYW1lVGFzayhcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIHRhc2tOYW1lLFxuICAgICAgICBuZXdUYXNrTmFtZSxcbiAgICAgICAgbmV3VGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICBuZXdUYXNrRGF0ZVxuICAgICkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrTmFtZSkuc2V0TmFtZShuZXdUYXNrTmFtZSk7XG4gICAgICAgIHRvZG9MaXN0XG4gICAgICAgICAgICAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIC5nZXRUYXNrKHRhc2tOYW1lKVxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2sodGFza05hbWUpLnNldERhdGUobmV3VGFza0RhdGUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldFRhc2tEZXNjcmlwdGlvbihwcm9qZWN0TmFtZSwgdGFza05hbWUsIG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdFxuICAgICAgICAgICAgLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICAgICAgICAuZ2V0VGFzayh0YXNrTmFtZSlcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbik7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0VGFza0RhdGUocHJvamVjdE5hbWUsIHRhc2tOYW1lLCBuZXdEdWVEYXRlKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrKHRhc2tOYW1lKS5zZXREYXRlKG5ld0R1ZURhdGUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldFRhc2tDb21wbGV0aW9uU3RhdHVzKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3RcbiAgICAgICAgICAgIC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICAgICAgLmdldFRhc2sodGFza05hbWUpXG4gICAgICAgICAgICAudG9nZ2xlQ29tcGxldGlvblN0YXR1cygpO1xuXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlQWxsVGFza3NQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QudXBkYXRlQWxsVGFza3NQcm9qZWN0KCk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlVG9kYXlQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QudXBkYXRlVG9kYXlQcm9qZWN0KCk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlV2Vla1Byb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC51cGRhdGVXZWVrUHJvamVjdCgpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0RGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0Q29tcGxldGVTdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlO1xuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjb21wYXJlQXNjLCB0b0RhdGUgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnQWxsIFRhc2tzJykpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RvZGF5JykpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RoaXMgV2VlaycpKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cblxuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb250YWlucyhwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5zb21lKFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBbGxUYXNrc1Byb2plY3QoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnQWxsIFRhc2tzJykudGFza3MgPSBbXTtcblxuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ0FsbCBUYXNrcycgfHxcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RvZGF5JyB8fFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpID09PSAnVGhpcyBXZWVrJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3QuZ2V0QWxsVGFza3MoKTtcbiAgICAgICAgICAgIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGAke3Rhc2suZ2V0TmFtZSgpfSAoUHJvamVjdDogJHtwcm9qZWN0LmdldE5hbWUoKX0pYDtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFzay50b2dnbGVDb21wbGV0aW9uU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnQWxsIFRhc2tzJykuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByb2plY3QoJ0FsbCBUYXNrcycpLmFkZFRhc2soXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGFzayh0YXNrTmFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVUb2RheVByb2plY3QoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVG9kYXknKS50YXNrcyA9IFtdO1xuXG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpID09PSAnQWxsIFRhc2tzJyB8fFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpID09PSAnVG9kYXknIHx8XG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXROYW1lKCkgPT09ICdUaGlzIFdlZWsnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZGF5VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzVG9kYXkoKTtcbiAgICAgICAgICAgIHRvZGF5VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gYCR7dGFzay5nZXROYW1lKCl9IChQcm9qZWN0OiAke3Byb2plY3QuZ2V0TmFtZSgpfSlgO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLnRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUb2RheScpLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUb2RheScpLmFkZFRhc2soXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGFzayh0YXNrTmFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVXZWVrUHJvamVjdCgpIHtcbiAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUaGlzIFdlZWsnKS50YXNrcyA9IFtdO1xuXG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpID09PSAnQWxsIFRhc2tzJyB8fFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpID09PSAnVG9kYXknIHx8XG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXROYW1lKCkgPT09ICdUaGlzIFdlZWsnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHdlZWtUYXNrcyA9IHByb2plY3QuZ2V0VGFza3NUaGlzV2VlaygpO1xuICAgICAgICAgICAgd2Vla1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGAke3Rhc2suZ2V0TmFtZSgpfSAoUHJvamVjdDogJHtwcm9qZWN0LmdldE5hbWUoKX0pYDtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFzay50b2dnbGVDb21wbGV0aW9uU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVGhpcyBXZWVrJykuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByb2plY3QoJ1RoaXMgV2VlaycpLmFkZFRhc2soXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGFzayh0YXNrTmFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldFByb2plY3QoJ1RoaXMgV2VlaycpLnNldFRhc2tzKFxuICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUaGlzIFdlZWsnKVxuICAgICAgICAgICAgICAgIC5nZXRUYXNrcygpXG4gICAgICAgICAgICAgICAgLnNvcnQoKHRhc2tBLCB0YXNrQikgPT5cbiAgICAgICAgICAgICAgICAgICAgY29tcGFyZUFzYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRGF0ZShuZXcgRGF0ZSh0YXNrQS5nZXREYXRlKCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRGF0ZShuZXcgRGF0ZSh0YXNrQi5nZXREYXRlKCkpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcbmltcG9ydCBlZGl0SW1nIGZyb20gJy4uL2ltZy9wZW5jaWwucG5nJztcbmltcG9ydCB0cmFzaEltZyBmcm9tICcuLi9pbWcvdHJhc2gtYmluLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgICAvLyBMT0FEIENPTlRFTlRcblxuICAgIHN0YXRpYyBsb2FkSG9tZXBhZ2UoKSB7XG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpO1xuICAgICAgICBVSS5pbml0UHJvamVjdEJ1dHRvbnMoKTtcbiAgICAgICAgVUkub3BlblByb2plY3QoJ0FsbCBUYXNrcycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtdGFza3MnKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0cygpIHtcbiAgICAgICAgU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICAgICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgICAgLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QubmFtZSA9PT0gJ0FsbCBUYXNrcycgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5uYW1lID09PSAnVG9kYXknIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QubmFtZSA9PT0gJ1RoaXMgV2VlaydcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBVSS5jcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgVUkuaW5pdEFkZFByb2plY3RCdXR0b25zKCk7XG4gICAgICAgIFVJLmluaXRFZGl0UHJvamVjdEJ1dHRvbnMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFByb2plY3RDb250ZW50KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcblxuICAgICAgICBtYWluSGVhZGVyLmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xuXG4gICAgICAgIFVJLmNsZWFyVGFza3MoKTtcbiAgICAgICAgVUkubG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFRhc2tzKHByb2plY3ROYW1lKSB7XG4gICAgICAgIFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgICAgICAgLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICAgICAgICAuZ2V0VGFza3MoKVxuICAgICAgICAgICAgLmZvckVhY2goKHRhc2spID0+XG4gICAgICAgICAgICAgICAgVUkuY3JlYXRlVGFza0NhcmQocHJvamVjdE5hbWUsIHRhc2submFtZSwgdGFzay5kdWVEYXRlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJvamVjdE5hbWUgIT09ICdBbGwgVGFza3MnICYmXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSAhPT0gJ1RvZGF5JyAmJlxuICAgICAgICAgICAgcHJvamVjdE5hbWUgIT09ICdUaGlzIFdlZWsnXG4gICAgICAgICkge1xuICAgICAgICAgICAgVUkuaW5pdEFkZFRhc2tCdXR0b25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDUkVBVEUgUFJPSkVDVFxuXG4gICAgc3RhdGljIGNsZWFyUHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdC5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGVkaXRQcm9qZWN0KGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLnByZXZpb3VzU2libGluZy5pbm5lclRleHQ7XG4gICAgICAgIFVJLm9wZW5FZGl0UHJvamVjdEZvcm0ocHJvamVjdE5hbWUsIGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZy5pbm5lclRleHQ7XG4gICAgICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIFVJLmNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgVUkubG9hZFByb2plY3RzKCk7XG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KCdBbGwgVGFza3MnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXRhc2tzJykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhcHBlbmRCdXR0b25zVG9Qcm9qZWN0QnV0dG9uKHByb2plY3ROYW1lLCBwcm9qZWN0QnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgZWRpdFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1wcm9qZWN0LWJ1dHRvbicpO1xuXG4gICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xuICAgICAgICBlZGl0UHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSAnRWRpdCc7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ1JlbW92ZSc7XG5cbiAgICAgICAgZWRpdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5lZGl0UHJvamVjdCk7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5kZWxldGVQcm9qZWN0KTtcblxuICAgICAgICBwcm9qZWN0QnV0dG9uLmFwcGVuZChcbiAgICAgICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLFxuICAgICAgICAgICAgZWRpdFByb2plY3RCdXR0b24sXG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1wcm9qZWN0LWJ1dHRvbicpO1xuXG4gICAgICAgIFVJLmFwcGVuZEJ1dHRvbnNUb1Byb2plY3RCdXR0b24ocHJvamVjdE5hbWUsIHByb2plY3RCdXR0b24pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG5cbiAgICAgICAgVUkuaW5pdFByb2plY3RCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgLy8gQUREIFBST0pFQ1QgRVZFTlQgTElTVEVORVJTXG5cbiAgICBzdGF0aWMgaW5pdEFkZFByb2plY3RCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhci1zdWJtaXQnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyLWNhbmNlbCcpO1xuXG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuUHJvamVjdEZvcm0pO1xuICAgICAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuYWRkUHJvamVjdCk7XG4gICAgICAgIGNhbmNlbFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBVSS5jYW5jZWxQcm9qZWN0U3VibWlzc2lvblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKS5mb2N1cygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JykudmFsdWU7XG4gICAgICAgIFN0b3JhZ2UuYWRkUHJvamVjdChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICAgICAgICBVSS5jcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3ROYW1lKTtcbiAgICAgICAgVUkuY2xvc2VQcm9qZWN0Rm9ybSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjYW5jZWxQcm9qZWN0U3VibWlzc2lvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgVUkuY2xvc2VQcm9qZWN0Rm9ybSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIEVESVQgUFJPSkVDVCBGT1JNXG5cbiAgICBzdGF0aWMgaW5pdEVkaXRQcm9qZWN0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3Qgc3VibWl0UHJvamVjdEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyNlZGl0LXNpZGViYXItc3VibWl0J1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBjYW5jZWxQcm9qZWN0RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnI2VkaXQtc2lkZWJhci1jYW5jZWwnXG4gICAgICAgICk7XG5cbiAgICAgICAgc3VibWl0UHJvamVjdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5hZGRQcm9qZWN0RWRpdCk7XG4gICAgICAgIGNhbmNlbFByb2plY3RFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY2FuY2VsUHJvamVjdEVkaXQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0RWRpdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VG9FZGl0ID1cbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0VG9FZGl0LmlubmVyVGV4dDtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyNlZGl0LXByb2plY3QtaW5wdXQnXG4gICAgICAgICkudmFsdWU7XG5cbiAgICAgICAgU3RvcmFnZS5yZW5hbWVQcm9qZWN0KHByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgVUkuY2xvc2VQcm9qZWN0RWRpdEZvcm0oKTtcblxuICAgICAgICBVSS5jbGVhclByb2plY3RzKCk7XG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpO1xuXG4gICAgICAgIHByb2plY3RUb0VkaXQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICB9XG5cbiAgICBzdGF0aWMgb3BlbkVkaXRQcm9qZWN0Rm9ybShwcm9qZWN0TmFtZSwgZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9FZGl0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LWlucHV0Jyk7XG5cbiAgICAgICAgcHJvamVjdFRvRWRpdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIC8vIEluc2VydCBGb3JtIGFmdGVyIHByb2plY3RUb0VkaXRcbiAgICAgICAgcHJvamVjdFRvRWRpdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0Rm9ybSxcbiAgICAgICAgICAgIHByb2plY3RUb0VkaXQubmV4dFNpYmxpbmdcbiAgICAgICAgKTtcblxuICAgICAgICBlZGl0UHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgZWRpdFByb2plY3RJbnB1dC52YWx1ZSA9IHByb2plY3ROYW1lO1xuICAgICAgICBlZGl0UHJvamVjdElucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNhbmNlbFByb2plY3RFZGl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBVSS5jbG9zZVByb2plY3RFZGl0Rm9ybSgpO1xuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VQcm9qZWN0RWRpdEZvcm0oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtZm9ybScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LWlucHV0JykudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyBQUk9KRUNUIEVWRU5UIExJU1RFTkVSU1xuXG4gICAgc3RhdGljIGluaXRQcm9qZWN0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYWxsVGFza3NQcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtdGFza3MnKTtcbiAgICAgICAgY29uc3QgdG9kYXlQcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuICAgICAgICBjb25zdCB3ZWVrUHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpcy13ZWVrJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICcuc2lkZWJhci1wcm9qZWN0LWJ1dHRvbidcbiAgICAgICAgKTtcblxuICAgICAgICBhbGxUYXNrc1Byb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgVUkub3BlbkFsbFRhc2tzUHJvamVjdHNCdXR0b25cbiAgICAgICAgKTtcbiAgICAgICAgdG9kYXlQcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIFVJLm9wZW5Ub2RheVByb2plY3RzQnV0dG9uXG4gICAgICAgICk7XG4gICAgICAgIHdlZWtQcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLm9wZW5XZWVrUHJvamVjdHNCdXR0b24pO1xuICAgICAgICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChwcm9qZWN0QnV0dG9uKSA9PlxuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmhhbmRsZVByb2plY3RCdXR0b24pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5BbGxUYXNrc1Byb2plY3RzQnV0dG9uKCkge1xuICAgICAgICBTdG9yYWdlLnVwZGF0ZUFsbFRhc2tzUHJvamVjdCgpO1xuICAgICAgICBVSS5vcGVuUHJvamVjdCgnQWxsIFRhc2tzJywgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5Ub2RheVByb2plY3RzQnV0dG9uKCkge1xuICAgICAgICBTdG9yYWdlLnVwZGF0ZVRvZGF5UHJvamVjdCgpO1xuICAgICAgICBVSS5vcGVuUHJvamVjdCgnVG9kYXknLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb3BlbldlZWtQcm9qZWN0c0J1dHRvbigpIHtcbiAgICAgICAgU3RvcmFnZS51cGRhdGVXZWVrUHJvamVjdCgpO1xuICAgICAgICBVSS5vcGVuUHJvamVjdCgnVGhpcyBXZWVrJywgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5Qcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0QnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0QnV0dG9ucyA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1idXR0b25zJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICcuc2lkZWJhci1wcm9qZWN0LWJ1dHRvbidcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IFsuLi5kZWZhdWx0UHJvamVjdEJ1dHRvbnMsIC4uLnByb2plY3RCdXR0b25zXTtcblxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICAgICAgaWYgKHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLWJ1dHRvbicpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cblxuICAgICAgICBVSS5sb2FkUHJvamVjdENvbnRlbnQocHJvamVjdE5hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVQcm9qZWN0QnV0dG9uKGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QtYnV0dG9uJykgfHxcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlLXByb2plY3QtYnV0dG9uJylcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0O1xuXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KHByb2plY3ROYW1lLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBDUkVBVEUgVEFTS1xuXG4gICAgc3RhdGljIGNsZWFyVGFza3MoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaGFuZ2VDb21wbGV0ZVN0YXR1cygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGhpcy5wYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLmlubmVyVGV4dDtcbiAgICAgICAgU3RvcmFnZS5zZXRUYXNrQ29tcGxldGlvblN0YXR1cyhwcm9qZWN0TmFtZSwgdGFza05hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDaGVja0JveChwcm9qZWN0TmFtZSwgdGFza05hbWUpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVTdGF0dXMgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgICAgICAgIC5nZXRQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWhlYWRlcicpLmlubmVyVGV4dClcbiAgICAgICAgICAgIC5nZXRUYXNrKHRhc2tOYW1lKVxuICAgICAgICAgICAgLmdldENvbXBsZXRlU3RhdHVzKCk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncm91bmQnKTtcblxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGBjaGVja2JveC0ke3Rhc2tOYW1lfWApO1xuXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYGNoZWNrYm94LSR7dGFza05hbWV9YCk7XG4gICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY2hhbmdlQ29tcGxldGVTdGF0dXMpO1xuXG4gICAgICAgIGlmIChjb21wbGV0ZVN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2hlY2tib3guY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb2plY3ROYW1lID09PSAnQWxsIFRhc2tzJyB8fFxuICAgICAgICAgICAgcHJvamVjdE5hbWUgPT09ICdUb2RheScgfHxcbiAgICAgICAgICAgIHByb2plY3ROYW1lID09PSAnVGhpcyBXZWVrJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLWNoZWNrYm94Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuYXBwZW5kKGNoZWNrYm94LCBsYWJlbCk7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlVGFzaygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID1cbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0O1xuICAgICAgICBTdG9yYWdlLmRlbGV0ZVRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcbiAgICAgICAgVUkuY2xlYXJUYXNrcygpO1xuICAgICAgICBVSS5sb2FkVGFza3MocHJvamVjdE5hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVUYXNrQ2FyZEJ1dHRvbnModGFza0NvbnRhaW5lciwgcHJvamVjdE5hbWUsIHRhc2tOYW1lLCBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gVUkuY3JlYXRlQ2hlY2tCb3gocHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcbiAgICAgICAgY29uc3QgdGFza05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICB0YXNrTmFtZUNvbnRhaW5lci5pbm5lclRleHQgPSB0YXNrTmFtZTtcbiAgICAgICAgZGF0ZUNvbnRhaW5lci5pbm5lclRleHQgPSBkYXRlO1xuXG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFzay1idXR0b24nKTtcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtdGFzay1idXR0b24nKTtcblxuICAgICAgICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLm9wZW5FZGl0VGFza0Zvcm0pO1xuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVtb3ZlVGFzayk7XG5cbiAgICAgICAgZWRpdFRhc2tCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2VkaXRJbWd9KWA7XG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgICAgZWRpdFRhc2tCdXR0b24uc3R5bGUud2lkdGggPSAnMi44ZW0nO1xuICAgICAgICBlZGl0VGFza0J1dHRvbi5zdHlsZS5oZWlnaHQgPSAnMi44ZW0nO1xuXG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RyYXNoSW1nfSlgO1xuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5zdHlsZS53aWR0aCA9ICcyLjhlbSc7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uc3R5bGUuaGVpZ2h0ID0gJzIuOGVtJztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9PT0gJ0FsbCBUYXNrcycgfHxcbiAgICAgICAgICAgIHByb2plY3ROYW1lID09PSAnVG9kYXknIHx8XG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9PT0gJ1RoaXMgV2VlaydcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChjaGVja0JveCwgdGFza05hbWVDb250YWluZXIsIGRhdGVDb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgY2hlY2tCb3gsXG4gICAgICAgICAgICAgICAgdGFza05hbWVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgZGF0ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBlZGl0VGFza0J1dHRvbixcbiAgICAgICAgICAgICAgICByZW1vdmVUYXNrQnV0dG9uXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRhc2tDYXJkKHByb2plY3ROYW1lLCB0YXNrTmFtZSwgZGF0ZSkge1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgVUkuY3JlYXRlVGFza0NhcmRCdXR0b25zKHRhc2tDb250YWluZXIsIHByb2plY3ROYW1lLCB0YXNrTmFtZSwgZGF0ZSk7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gRURJVCBUQVNLIEZPUk1cblxuICAgIHN0YXRpYyBvcGVuRWRpdFRhc2tGb3JtKCkge1xuICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgICAgICAgIC5nZXRQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWhlYWRlcicpLmlubmVyVGV4dClcbiAgICAgICAgICAgIC5nZXRUYXNrKHRhc2tOYW1lKTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1zdWJtaXQnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsRWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1jYW5jZWwnKTtcblxuICAgICAgICBlZGl0VGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmVkaXRUYXNrKTtcbiAgICAgICAgY2FuY2VsRWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBVSS5jYW5jZWxFZGl0VGFza1N1Ym1pc3Npb25cbiAgICAgICAgKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1lZGl0LXRpdGxlJykudmFsdWUgPSB0YXNrLm5hbWU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRlc2NyaXB0aW9uJykudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kYXRlJykudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUVkaXRGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgLy8gSW5zZXJ0IEZvcm0gYWZ0ZXIgdGFza1RvRWRpdFxuICAgICAgICB0YXNrVG9FZGl0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215RWRpdEZvcm0nKSxcbiAgICAgICAgICAgIHRhc2tUb0VkaXQubmV4dFNpYmxpbmdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZWRpdFRhc2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPVxuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgIC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9XG4gICAgICAgICAgICB0YXNrVG9FZGl0LmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZWRpdC10aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3VGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kYXRlJykudmFsdWU7XG5cbiAgICAgICAgU3RvcmFnZS5yZW5hbWVUYXNrKFxuICAgICAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgICAgIG5ld1Rhc2tOYW1lLFxuICAgICAgICAgICAgbmV3VGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbmV3VGFza0RhdGVcbiAgICAgICAgKTtcblxuICAgICAgICBVSS5jbG9zZUVkaXRUYXNrRm9ybSgpO1xuXG4gICAgICAgIFVJLmNsZWFyVGFza3MoKTtcbiAgICAgICAgVUkubG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VFZGl0VGFza0Zvcm0oKSB7XG4gICAgICAgIGNvbnN0IG15RWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlFZGl0Rm9ybScpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWVkaXQtdGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRhdGUnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICAgIG15RWRpdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAvLyBJbnNlcnQgRm9ybSBhZnRlciBhZGRUYXNrRm9ybSB0byBub3QgZGVsZXRlIGl0IHdoZW4gY2xlYXJpbmcgdGFza3NcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjbXlGb3JtJylcbiAgICAgICAgICAgIC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICBteUVkaXRGb3JtLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUZvcm0nKS5uZXh0U2libGluZ1xuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2FuY2VsRWRpdFRhc2tTdWJtaXNzaW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBVSS5jbG9zZUVkaXRUYXNrRm9ybSgpO1xuICAgIH1cblxuICAgIC8vIEFERCBUQVNLIEVWRU5UIExJU1RFTkVSU1xuXG4gICAgc3RhdGljIGluaXRBZGRUYXNrQnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuXG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuQWRkVGFza0Zvcm0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuQWRkVGFza0Zvcm0oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS5mb2N1cygpO1xuXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsJyk7XG5cbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmFkZFRhc2spO1xuICAgICAgICBjYW5jZWxUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY2FuY2VsVGFza1N1Ym1pc3Npb24pO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9zZUFkZFRhc2tGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRhc2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWU7XG5cbiAgICAgICAgU3RvcmFnZS5hZGRUYXNrKHByb2plY3ROYW1lLCBuZXcgVGFzayh0YXNrTmFtZSwgZGVzY3JpcHRpb24sIGRhdGUpKTtcbiAgICAgICAgVUkuY3JlYXRlVGFza0NhcmQocHJvamVjdE5hbWUsIHRhc2tOYW1lLCBkYXRlKTtcbiAgICAgICAgVUkuY2xvc2VBZGRUYXNrRm9ybSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjYW5jZWxUYXNrU3VibWlzc2lvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgVUkuY2xvc2VBZGRUYXNrRm9ybSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRIb21lcGFnZSk7XG53aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IG92ZXJsYXkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgICAgICAgVUkuY2xvc2VBZGRUYXNrRm9ybSgpO1xuICAgICAgICBVSS5jbG9zZUVkaXRUYXNrRm9ybSgpO1xuICAgIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==