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

    .taskCard {
        height: auto;
    }

    .round {
        align-items: center;
    }
}
`, "",{"version":3,"sources":["webpack://./src/modules/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;AACA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,YAAY;AAChB;AACA;;;;IAII,WAAW;IACX,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA,6CAA6C;;AAE7C;;;;;CAKC;;AAED,gBAAgB;;AAEhB;IACI,qBAAqB;IACrB,4CAA2C;AAC/C;;AAEA,oBAAoB;;AAEpB;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,oBAAoB;IACpB,aAAa;IACb,YAAY;IACZ,qBAAqB;AACzB;;AAEA;;IAEI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,MAAM;IACN,OAAO;IACP,+BAA+B;IAC/B,6BAA6B;IAC7B,wBAAwB;IACxB,6CAA6C;IAC7C,qBAAqB;AACzB;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,iBAAiB;AACrB;;AAEA,YAAY;;AAEZ;IACI,gCAAgC;IAChC,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,yBAAyB;IACzB,uBAAuB;IACvB,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,cAAc;IACd,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,cAAc;IACd,kBAAkB;AACtB;;AAEA;;IAEI,yBAAyB;AAC7B;;AAEA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,yCAAyC;IACzC,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,QAAQ;IACR,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,cAAc;IACd,iBAAiB;AACrB;;AAEA;;;IAGI,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;;;IAGI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;;IAEI,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,eAAe;IACf,iCAAiC;AACrC;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,wCAAwC;IACxC,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,WAAW;IACX,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,UAAU;IACV,mBAAmB;AACvB;;AAEA;;IAEI,gBAAgB;IAChB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;IACpB,cAAc;IACd,kBAAkB;AACtB;;AAEA;;;;;;IAMI,aAAa;IACb,aAAa;IACb,oBAAoB;IACpB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;;IAEI,YAAY;IACZ,YAAY;AAChB;;AAEA;;;;IAII,cAAc;IACd,UAAU,EAAE,YAAY;AAC5B;;AAEA;;;;IAII,4BAA4B;IAC5B,cAAc;AAClB;;AAEA;;;;IAII,mBAAmB;IACnB,cAAc;AAClB;;AAEA;;;;IAII,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,cAAc;IACd,iBAAiB;AACrB;;AAEA;;;;IAII,yBAAyB;AAC7B;;AAEA;;;;IAII,eAAe;IACf,yBAAyB;AAC7B;;AAEA;;;;IAII,yBAAyB;AAC7B;;AAEA;;;;IAII,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,cAAc;AAClB;;AAEA,iBAAiB;;AAEjB;IACI,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,UAAU;AACd;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA,WAAW;;AAEX;IACI,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA,sBAAsB;;AAEtB;IACI;QACI,aAAa;QACb,sBAAsB;IAC1B;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,mBAAmB;IACvB;AACJ","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/* Prevents Error Display on Browser Screen */\n\n/*\niframe {\n    display: none;\n}\n\n*/\n\n/* Custom Font */\n\n@font-face {\n    font-family: 'roboto';\n    src: url('../fonts/Roboto/Roboto-Thin.ttf');\n}\n\n/* Overall Styling */\n\n:root {\n    --textColor: #eaebec;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: stretch;\n    height: 100vh;\n    width: 100vw;\n    font-family: 'roboto';\n}\n\nheader,\nfooter {\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n.hidden {\n    top: 0;\n    left: 0;\n    pointer-events: none !important;\n    position: absolute !important;\n    max-height: 0 !important;\n    transition: max-height 1s ease-out !important;\n    opacity: 0 !important;\n}\n\n/* Header */\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 0.8em 0.8em;\n    background-color: #233647;\n    color: var(--textColor);\n}\n\n.header-container {\n    font-size: 2em;\n}\n\n.header-img {\n    height: 4em;\n    width: 4em;\n    margin-right: 1em;\n}\n\n/* Sidebar */\n\nsidebar {\n    padding: 0.8em 1.8em 0.8em 1.8em;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    background-color: #1b2a37;\n    color: var(--textColor);\n    box-shadow: inset 0 9px 9px -9px #233647;\n}\n\n.sidebar-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\nhr {\n    border-color: #9fa0a1;\n    background-color: #9fa0a1;\n    color: #9fa0a1;\n    width: 100%;\n    border-top: 1px;\n}\n\n#project {\n    display: flex;\n    flex-direction: column;\n}\n\n#project-content {\n    width: 100%;\n}\n\n#project-form,\n#edit-project-form {\n    padding: 0.5em;\n    border-radius: 4px;\n}\n\n#project-form:hover,\n#edit-project-form:hover {\n    background-color: #233647;\n}\n\n#project-input,\n#edit-project-input {\n    border: none;\n    border-radius: 4px;\n    width: 99%;\n    height: 1.5em;\n    appearance: none;\n    background: none;\n    border: 2px solid rgba(90, 90, 90, 0.443);\n    color: #eff0f3a6;\n}\n\n#project-input:focus,\n#edit-project-input {\n    outline: none;\n    border: 2px solid #3aabb6;\n}\n\n#project-input::--webkit-input-placeholder,\n#edit-project-input::--webkit-input-placeholder {\n    color: black;\n}\n\n#sidebar-form-button-container,\n#edit-sidebar-form-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 2em;\n    margin-top: 0.5em;\n}\n\n.sidebar-form-button {\n    border: none;\n    border-radius: 2px;\n    height: 2em;\n    width: 100%;\n    color: #dbdbdb;\n    font-weight: bold;\n}\n\n.sidebar-button,\n.sidebar-project-button,\n#add-task {\n    padding: 0.5em;\n    background: none;\n    border: none;\n    border-radius: 4px;\n    font-family: 'roboto';\n    color: var(--textColor);\n    width: 100%;\n    text-align: start;\n    display: grid;\n    grid-template-columns: 4fr 1fr 1fr;\n    align-items: center;\n}\n\n.sidebar-button:hover,\n.sidebar-project-button:hover,\n#add-task:hover {\n    background-color: #2d4356;\n    cursor: pointer;\n}\n\n.remove-project-button,\n.edit-project-button {\n    background: none;\n    border: none;\n    color: var(--textColor);\n    font-family: roboto;\n}\n\n.remove-project-button:hover,\n.edit-project-button:hover {\n    cursor: pointer;\n    color: rgba(255, 255, 255, 0.528);\n}\n\n/* Main */\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    flex-grow: 1;\n    box-shadow: inset 0 9px 9px -9px #233647;\n    background-color: #192734;\n    color: var(--textColor);\n}\n\n#task-content {\n    display: flex;\n    flex-direction: column;\n}\n\n.overlay.active {\n    display: block;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.form-popup {\n    display: none;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9;\n    border-radius: 10px;\n}\n\n#form-container,\n.form-edit-container {\n    max-width: 280px;\n    padding: 20px;\n    background-color: #192734;\n    border-radius: 20px;\n    font-family: 'roboto';\n}\n\n#form-header,\n#form-edit-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0.5em;\n    font-size: 2em;\n    text-align: center;\n}\n\n#form-container input[type='text'],\n#form-container textarea,\n#form-container input[type='date'],\n.form-edit-container input[type='text'],\n.form-edit-container textarea,\n.form-edit-container input[type='date'] {\n    width: 18.5em;\n    padding: 15px;\n    margin: 5px 0 20px 0;\n    border: none;\n    background: #233647;\n    border-radius: 10px;\n    font-family: roboto;\n    color: #dbdbdb;\n}\n\n#form-container textarea,\n.form-edit-container textarea {\n    height: 91px;\n    resize: none;\n}\n\n#task-title::placeholder,\n#description::placeholder,\n#task-edit-title::placeholder,\n#edit-description::placeholder {\n    color: #dbdbdb;\n    opacity: 1; /* Firefox */\n}\n\n#task-title::-ms-input-placeholder,\n#description::-ms-input-placeholder,\n#task-edit-title::-ms-input-placeholder,\n#edit-description::-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #dbdbdb;\n}\n\n#task-title::-ms-input-placeholder,\n#description::-ms-input-placeholder,\n#task-edit-title::-ms-input-placeholder,\n#edit-description::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: #dbdbdb;\n}\n\n#task-title::-webkit-calendar-picker-indicator,\n#description::-webkit-calendar-picker-indicator,\n#task-edit-title::-webkit-calendar-picker-indicator,\n#edit-description::-webkit-calendar-picker-indicator {\n    filter: invert(1);\n}\n\n.task-form-button-div {\n    display: flex;\n    justify-content: center;\n    gap: 1em;\n}\n\n.task-form-button {\n    margin-top: 0.5em;\n    border: none;\n    border-radius: 2px;\n    height: 2.6em;\n    width: 100%;\n    color: #dbdbdb;\n    font-weight: bold;\n}\n\n#submit,\n#sidebar-submit,\n#edit-sidebar-submit,\n#edit-submit {\n    background-color: #1f8d4d;\n}\n\n#submit:hover,\n#sidebar-submit:hover,\n#edit-sidebar-submit:hover,\n#edit-submit:hover {\n    cursor: pointer;\n    background-color: #1c7842;\n}\n\n#cancel,\n#sidebar-cancel,\n#edit-sidebar-cancel,\n#edit-cancel {\n    background-color: #be0404;\n}\n\n#cancel:hover,\n#sidebar-cancel:hover,\n#edit-sidebar-cancel:hover,\n#edit-cancel:hover {\n    cursor: pointer;\n    background-color: #a50505;\n}\n\n#add-task {\n    font-size: 1em;\n}\n\n/* Main Content */\n\nmain-content {\n    padding: 0.8em 1.8em 0.8em 1.8em;\n}\n\n#main-header {\n    margin-bottom: 1em;\n    background-color: #233647;\n    border-radius: 4px;\n    padding: 1em;\n}\n\n.taskCard {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;\n    margin-bottom: 1em;\n    gap: 2em;\n    padding: 1em;\n    border: #b9bcbe 2px solid;\n    border-radius: 12px;\n    position: relative;\n    height: 2.5em;\n}\n\n.taskCard label {\n    background-color: #fff0;\n    border: 2px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 36px;\n    left: 15px;\n    position: absolute;\n    top: 15px;\n    width: 36px;\n}\n\n.taskCard label.disabled-checkbox {\n    cursor: default;\n}\n\n.taskCard label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: '';\n    height: 10px;\n    left: 9px;\n    opacity: 0;\n    position: absolute;\n    top: 10px;\n    transform: rotate(-45deg);\n    width: 17px;\n}\n\n.taskCard input[type='checkbox'] {\n    visibility: hidden;\n}\n\n.taskCard input[type='checkbox']:checked + label {\n    background-color: #5baa5f;\n    border-color: #5baa5f;\n}\n\n.taskCard input[type='checkbox']:checked + label:after {\n    opacity: 1;\n}\n\n.taskCard p,\n.taskCard date {\n    align-self: center;\n}\n\n.titleCard,\n.dateCard {\n    align-self: center;\n}\n\n.dateCard {\n    justify-self: center;\n}\n\n.taskCard button {\n    border: none;\n    background: none;\n    justify-self: center;\n}\n\n.taskCard button:hover {\n    cursor: pointer;\n}\n\n/* Footer */\n\nfooter {\n    background-color: #233647;\n    padding: 0.8em 1em 0.8em 1em;\n}\n\n#github-link {\n    text-align: center;\n    color: black;\n    text-decoration: none;\n    color: #eaebec;\n}\n\n#github-link:hover {\n    color: #d2d4d5;\n    text-decoration: none;\n}\n\n/* Styling for Phone */\n\n@media (max-width: 540px) {\n    main {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .taskCard {\n        height: auto;\n    }\n\n    .round {\n        align-items: center;\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QywwSUFBa0Q7QUFDOUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEZBQTBGLE1BQU0scUZBQXFGLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLFFBQVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxRQUFRLFVBQVUsb0JBQW9CLE9BQU8sUUFBUSxZQUFZLFdBQVcsT0FBTyxRQUFRLFlBQVksV0FBVyxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxX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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFPLGdCQUFnQixnREFBTztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxnREFBTzs7QUFFZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsZ0RBQU87QUFDZjtBQUNBOztBQUVBO0FBQ0EsUUFBUSxnREFBTztBQUNmO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGdEQUFPO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnREFBTztBQUNmOztBQUVBO0FBQ0EsK0JBQStCLGdEQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdEQUFnRCxTQUFTOztBQUV6RCw4Q0FBOEMsU0FBUztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnREFBTztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0RBQXNELDRDQUFPLENBQUM7QUFDOUQ7QUFDQTtBQUNBOztBQUVBLHdEQUF3RCwrQ0FBUSxDQUFDO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxnREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsZ0RBQU8sMEJBQTBCLDZDQUFJO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pnQnFCO0FBQ0M7O0FBRXRCOztBQUVBLDhDQUE4QywyQ0FBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFFO0FBQ1YsUUFBUSwyQ0FBRTtBQUNWO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1plO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3R5bGUuY3NzPzUyYzMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvL1JvYm90by1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogUHJldmVudHMgRXJyb3IgRGlzcGxheSBvbiBCcm93c2VyIFNjcmVlbiAqL1xuXG4vKlxuaWZyYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4qL1xuXG4vKiBDdXN0b20gRm9udCAqL1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi8qIE92ZXJhbGwgU3R5bGluZyAqL1xuXG46cm9vdCB7XG4gICAgLS10ZXh0Q29sb3I6ICNlYWViZWM7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xufVxuXG5oZWFkZXIsXG5mb290ZXIge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuLmhpZGRlbiB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcyBlYXNlLW91dCAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbn1cblxuLyogSGVhZGVyICovXG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuOGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM2NDc7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuLmhlYWRlci1pbWcge1xuICAgIGhlaWdodDogNGVtO1xuICAgIHdpZHRoOiA0ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi8qIFNpZGViYXIgKi9cblxuc2lkZWJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMS44ZW0gMC44ZW0gMS44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjJhMzc7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCA5cHggOXB4IC05cHggIzIzMzY0Nztcbn1cblxuLnNpZGViYXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmhyIHtcbiAgICBib3JkZXItY29sb3I6ICM5ZmEwYTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlmYTBhMTtcbiAgICBjb2xvcjogIzlmYTBhMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHg7XG59XG5cbiNwcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNwcm9qZWN0LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jcHJvamVjdC1mb3JtLFxuI2VkaXQtcHJvamVjdC1mb3JtIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNwcm9qZWN0LWZvcm06aG92ZXIsXG4jZWRpdC1wcm9qZWN0LWZvcm06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM2NDc7XG59XG5cbiNwcm9qZWN0LWlucHV0LFxuI2VkaXQtcHJvamVjdC1pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogOTklO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoOTAsIDkwLCA5MCwgMC40NDMpO1xuICAgIGNvbG9yOiAjZWZmMGYzYTY7XG59XG5cbiNwcm9qZWN0LWlucHV0OmZvY3VzLFxuI2VkaXQtcHJvamVjdC1pbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2FhYmI2O1xufVxuXG4jcHJvamVjdC1pbnB1dDo6LS13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXG4jZWRpdC1wcm9qZWN0LWlucHV0OjotLXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jc2lkZWJhci1mb3JtLWJ1dHRvbi1jb250YWluZXIsXG4jZWRpdC1zaWRlYmFyLWZvcm0tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuLnNpZGViYXItZm9ybS1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNkYmRiZGI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaWRlYmFyLWJ1dHRvbixcbi5zaWRlYmFyLXByb2plY3QtYnV0dG9uLFxuI2FkZC10YXNrIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZWJhci1idXR0b246aG92ZXIsXG4uc2lkZWJhci1wcm9qZWN0LWJ1dHRvbjpob3ZlcixcbiNhZGQtdGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDM1NjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZW1vdmUtcHJvamVjdC1idXR0b24sXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcbn1cblxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbjpob3Zlcixcbi5lZGl0LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjgpO1xufVxuXG4vKiBNYWluICovXG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDlweCA5cHggLTlweCAjMjMzNjQ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbiN0YXNrLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm92ZXJsYXkuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5mb3JtLXBvcHVwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jZm9ybS1jb250YWluZXIsXG4uZm9ybS1lZGl0LWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XG59XG5cbiNmb3JtLWhlYWRlcixcbiNmb3JtLWVkaXQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT0ndGV4dCddLFxuI2Zvcm0tY29udGFpbmVyIHRleHRhcmVhLFxuI2Zvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9J2RhdGUnXSxcbi5mb3JtLWVkaXQtY29udGFpbmVyIGlucHV0W3R5cGU9J3RleHQnXSxcbi5mb3JtLWVkaXQtY29udGFpbmVyIHRleHRhcmVhLFxuLmZvcm0tZWRpdC1jb250YWluZXIgaW5wdXRbdHlwZT0nZGF0ZSddIHtcbiAgICB3aWR0aDogMTguNWVtO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiA1cHggMCAyMHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMyMzM2NDc7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xuICAgIGNvbG9yOiAjZGJkYmRiO1xufVxuXG4jZm9ybS1jb250YWluZXIgdGV4dGFyZWEsXG4uZm9ybS1lZGl0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA5MXB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuI3Rhc2stdGl0bGU6OnBsYWNlaG9sZGVyLFxuI2Rlc2NyaXB0aW9uOjpwbGFjZWhvbGRlcixcbiN0YXNrLWVkaXQtdGl0bGU6OnBsYWNlaG9sZGVyLFxuI2VkaXQtZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2RiZGJkYjtcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG59XG5cbiN0YXNrLXRpdGxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4jZGVzY3JpcHRpb246Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiN0YXNrLWVkaXQtdGl0bGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiNlZGl0LWRlc2NyaXB0aW9uOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gICAgY29sb3I6ICNkYmRiZGI7XG59XG5cbiN0YXNrLXRpdGxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4jZGVzY3JpcHRpb246Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiN0YXNrLWVkaXQtdGl0bGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiNlZGl0LWRlc2NyaXB0aW9uOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgY29sb3I6ICNkYmRiZGI7XG59XG5cbiN0YXNrLXRpdGxlOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXG4jZGVzY3JpcHRpb246Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcixcbiN0YXNrLWVkaXQtdGl0bGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcixcbiNlZGl0LWRlc2NyaXB0aW9uOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuXG4udGFzay1mb3JtLWJ1dHRvbi1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxZW07XG59XG5cbi50YXNrLWZvcm0tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogMi42ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNkYmRiZGI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNzdWJtaXQsXG4jc2lkZWJhci1zdWJtaXQsXG4jZWRpdC1zaWRlYmFyLXN1Ym1pdCxcbiNlZGl0LXN1Ym1pdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmOGQ0ZDtcbn1cblxuI3N1Ym1pdDpob3ZlcixcbiNzaWRlYmFyLXN1Ym1pdDpob3ZlcixcbiNlZGl0LXNpZGViYXItc3VibWl0OmhvdmVyLFxuI2VkaXQtc3VibWl0OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjNzg0Mjtcbn1cblxuI2NhbmNlbCxcbiNzaWRlYmFyLWNhbmNlbCxcbiNlZGl0LXNpZGViYXItY2FuY2VsLFxuI2VkaXQtY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUwNDA0O1xufVxuXG4jY2FuY2VsOmhvdmVyLFxuI3NpZGViYXItY2FuY2VsOmhvdmVyLFxuI2VkaXQtc2lkZWJhci1jYW5jZWw6aG92ZXIsXG4jZWRpdC1jYW5jZWw6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTUwNTA1O1xufVxuXG4jYWRkLXRhc2sge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4vKiBNYWluIENvbnRlbnQgKi9cblxubWFpbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjhlbSAwLjhlbSAxLjhlbTtcbn1cblxuI21haW4taGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzY0NztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4udGFza0NhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmciAxZnIgMWZyO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBnYXA6IDJlbTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYm9yZGVyOiAjYjliY2JlIDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xufVxuXG4udGFza0NhcmQgbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIHdpZHRoOiAzNnB4O1xufVxuXG4udGFza0NhcmQgbGFiZWwuZGlzYWJsZWQtY2hlY2tib3gge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnRhc2tDYXJkIGxhYmVsOmFmdGVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBsZWZ0OiA5cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgd2lkdGg6IDE3cHg7XG59XG5cbi50YXNrQ2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi50YXNrQ2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYWE1ZjtcbiAgICBib3JkZXItY29sb3I6ICM1YmFhNWY7XG59XG5cbi50YXNrQ2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnRhc2tDYXJkIHAsXG4udGFza0NhcmQgZGF0ZSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udGl0bGVDYXJkLFxuLmRhdGVDYXJkIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kYXRlQ2FyZCB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi50YXNrQ2FyZCBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4udGFza0NhcmQgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEZvb3RlciAqL1xuXG5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM2NDc7XG4gICAgcGFkZGluZzogMC44ZW0gMWVtIDAuOGVtIDFlbTtcbn1cblxuI2dpdGh1Yi1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2VhZWJlYztcbn1cblxuI2dpdGh1Yi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogI2QyZDRkNTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIFN0eWxpbmcgZm9yIFBob25lICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgIG1haW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC50YXNrQ2FyZCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAucm91bmQge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUZJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCO0FBQ0EsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7OztJQVdJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxn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QkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFByZXZlbnRzIEVycm9yIERpc3BsYXkgb24gQnJvd3NlciBTY3JlZW4gKi9cXG5cXG4vKlxcbmlmcmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiovXFxuXFxuLyogQ3VzdG9tIEZvbnQgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvL1JvYm90by1UaGluLnR0ZicpO1xcbn1cXG5cXG4vKiBPdmVyYWxsIFN0eWxpbmcgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tdGV4dENvbG9yOiAjZWFlYmVjO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XFxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC44ZW0gMC44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM2NDc7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uaGVhZGVyLWltZyB7XFxuICAgIGhlaWdodDogNGVtO1xcbiAgICB3aWR0aDogNGVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcblxcbnNpZGViYXIge1xcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjhlbSAwLjhlbSAxLjhlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjJhMzc7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDlweCA5cHggLTlweCAjMjMzNjQ3O1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuaHIge1xcbiAgICBib3JkZXItY29sb3I6ICM5ZmEwYTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmEwYTE7XFxuICAgIGNvbG9yOiAjOWZhMGExO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcDogMXB4O1xcbn1cXG5cXG4jcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcm9qZWN0LWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSxcXG4jZWRpdC1wcm9qZWN0LWZvcm0ge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtOmhvdmVyLFxcbiNlZGl0LXByb2plY3QtZm9ybTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM2NDc7XFxufVxcblxcbiNwcm9qZWN0LWlucHV0LFxcbiNlZGl0LXByb2plY3QtaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IDk5JTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg5MCwgOTAsIDkwLCAwLjQ0Myk7XFxuICAgIGNvbG9yOiAjZWZmMGYzYTY7XFxufVxcblxcbiNwcm9qZWN0LWlucHV0OmZvY3VzLFxcbiNlZGl0LXByb2plY3QtaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2FhYmI2O1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dDo6LS13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXFxuI2VkaXQtcHJvamVjdC1pbnB1dDo6LS13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNzaWRlYmFyLWZvcm0tYnV0dG9uLWNvbnRhaW5lcixcXG4jZWRpdC1zaWRlYmFyLWZvcm0tYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxufVxcblxcbi5zaWRlYmFyLWZvcm0tYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICNkYmRiZGI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2lkZWJhci1idXR0b24sXFxuLnNpZGViYXItcHJvamVjdC1idXR0b24sXFxuI2FkZC10YXNrIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWJ1dHRvbjpob3ZlcixcXG4uc2lkZWJhci1wcm9qZWN0LWJ1dHRvbjpob3ZlcixcXG4jYWRkLXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0MzU2O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZW1vdmUtcHJvamVjdC1idXR0b24sXFxuLmVkaXQtcHJvamVjdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xcbn1cXG5cXG4ucmVtb3ZlLXByb2plY3QtYnV0dG9uOmhvdmVyLFxcbi5lZGl0LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyOCk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgOXB4IDlweCAtOXB4ICMyMzM2NDc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmZvcm0tcG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIsXFxuLmZvcm0tZWRpdC1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyNzM0O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XFxufVxcblxcbiNmb3JtLWhlYWRlcixcXG4jZm9ybS1lZGl0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9J3RleHQnXSxcXG4jZm9ybS1jb250YWluZXIgdGV4dGFyZWEsXFxuI2Zvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9J2RhdGUnXSxcXG4uZm9ybS1lZGl0LWNvbnRhaW5lciBpbnB1dFt0eXBlPSd0ZXh0J10sXFxuLmZvcm0tZWRpdC1jb250YWluZXIgdGV4dGFyZWEsXFxuLmZvcm0tZWRpdC1jb250YWluZXIgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgd2lkdGg6IDE4LjVlbTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luOiA1cHggMCAyMHB4IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogIzIzMzY0NztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gICAgY29sb3I6ICNkYmRiZGI7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSxcXG4uZm9ybS1lZGl0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogOTFweDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4jdGFzay10aXRsZTo6cGxhY2Vob2xkZXIsXFxuI2Rlc2NyaXB0aW9uOjpwbGFjZWhvbGRlcixcXG4jdGFzay1lZGl0LXRpdGxlOjpwbGFjZWhvbGRlcixcXG4jZWRpdC1kZXNjcmlwdGlvbjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI2RiZGJkYjtcXG4gICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4jdGFzay10aXRsZTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcbiNkZXNjcmlwdGlvbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcbiN0YXNrLWVkaXQtdGl0bGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG4jZWRpdC1kZXNjcmlwdGlvbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cXG4gICAgY29sb3I6ICNkYmRiZGI7XFxufVxcblxcbiN0YXNrLXRpdGxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuI2Rlc2NyaXB0aW9uOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuI3Rhc2stZWRpdC10aXRsZTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcbiNlZGl0LWRlc2NyaXB0aW9uOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xcbiAgICBjb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuI3Rhc2stdGl0bGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcixcXG4jZGVzY3JpcHRpb246Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcixcXG4jdGFzay1lZGl0LXRpdGxlOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXFxuI2VkaXQtZGVzY3JpcHRpb246Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4udGFzay1mb3JtLWJ1dHRvbi1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxZW07XFxufVxcblxcbi50YXNrLWZvcm0tYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBoZWlnaHQ6IDIuNmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICNkYmRiZGI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jc3VibWl0LFxcbiNzaWRlYmFyLXN1Ym1pdCxcXG4jZWRpdC1zaWRlYmFyLXN1Ym1pdCxcXG4jZWRpdC1zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY4ZDRkO1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyLFxcbiNzaWRlYmFyLXN1Ym1pdDpob3ZlcixcXG4jZWRpdC1zaWRlYmFyLXN1Ym1pdDpob3ZlcixcXG4jZWRpdC1zdWJtaXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzc4NDI7XFxufVxcblxcbiNjYW5jZWwsXFxuI3NpZGViYXItY2FuY2VsLFxcbiNlZGl0LXNpZGViYXItY2FuY2VsLFxcbiNlZGl0LWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZTA0MDQ7XFxufVxcblxcbiNjYW5jZWw6aG92ZXIsXFxuI3NpZGViYXItY2FuY2VsOmhvdmVyLFxcbiNlZGl0LXNpZGViYXItY2FuY2VsOmhvdmVyLFxcbiNlZGl0LWNhbmNlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1MDUwNTtcXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIE1haW4gQ29udGVudCAqL1xcblxcbm1haW4tY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAuOGVtIDEuOGVtIDAuOGVtIDEuOGVtO1xcbn1cXG5cXG4jbWFpbi1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM2NDc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4udGFza0NhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyIDFmciAxZnI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZ2FwOiAyZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAjYjliY2JlIDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDIuNWVtO1xcbn1cXG5cXG4udGFza0NhcmQgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHdpZHRoOiAzNnB4O1xcbn1cXG5cXG4udGFza0NhcmQgbGFiZWwuZGlzYWJsZWQtY2hlY2tib3gge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi50YXNrQ2FyZCBsYWJlbDphZnRlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgbGVmdDogOXB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IDE3cHg7XFxufVxcblxcbi50YXNrQ2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udGFza0NhcmQgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJhYTVmO1xcbiAgICBib3JkZXItY29sb3I6ICM1YmFhNWY7XFxufVxcblxcbi50YXNrQ2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrQ2FyZCBwLFxcbi50YXNrQ2FyZCBkYXRlIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGVDYXJkLFxcbi5kYXRlQ2FyZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGVDYXJkIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQ2FyZCBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFza0NhcmQgYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNjQ3O1xcbiAgICBwYWRkaW5nOiAwLjhlbSAxZW0gMC44ZW0gMWVtO1xcbn1cXG5cXG4jZ2l0aHViLWxpbmsge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogI2VhZWJlYztcXG59XFxuXFxuI2dpdGh1Yi1saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6ICNkMmQ0ZDU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgUGhvbmUgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcXG4gICAgbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAudGFza0NhcmQge1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5yb3VuZCB7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIGFkZERheXMgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH1cblxuICAgIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB9XG5cbiAgICBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgY29udGFpbnModGFza05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2sodGFza05hbWUpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSAhPT0gdGFza05hbWUpO1xuICAgIH1cblxuICAgIGdldEFsbFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5tYXAoKHRhc2spID0+IHRhc2spO1xuICAgIH1cblxuICAgIGdldFRhc2tzVG9kYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBhZGREYXlzKG5ldyBEYXRlKHRhc2suZ2V0RGF0ZSgpKSwgMSk7XG4gICAgICAgICAgICByZXR1cm4gaXNUb2RheSh0b0RhdGUodGFza0RhdGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VGFza3NUaGlzV2VlaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGFkZERheXMobmV3IERhdGUodGFzay5nZXREYXRlKCkpLCAxKTtcbiAgICAgICAgICAgIHJldHVybiBpc1RoaXNXZWVrKHRvRGF0ZSh0YXNrRGF0ZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL1RvZG9MaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICAgc3RhdGljIHNhdmVUb2RvTGlzdChkYXRhKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIG5ldyBUb2RvTGlzdCgpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSlcbiAgICAgICAgKTtcblxuICAgICAgICB0b2RvTGlzdC5zZXRQcm9qZWN0cyhcbiAgICAgICAgICAgIHRvZG9MaXN0XG4gICAgICAgICAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuICAgICAgICApO1xuXG4gICAgICAgIHRvZG9MaXN0XG4gICAgICAgICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgICAgLmZvckVhY2goKHByb2plY3QpID0+XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFRhc2tzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdG9kb0xpc3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW5hbWVQcm9qZWN0KHByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuc2V0TmFtZShuZXdQcm9qZWN0TmFtZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0TmFtZSwgdGFzaykge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZGVsZXRlVGFzayh0YXNrTmFtZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJUYXNrcyhwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuY2xlYXJUYXNrcygpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmFtZVRhc2soXG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgbmV3VGFza05hbWUsXG4gICAgICAgIG5ld1Rhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgbmV3VGFza0RhdGVcbiAgICApIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2sodGFza05hbWUpLnNldE5hbWUobmV3VGFza05hbWUpO1xuICAgICAgICB0b2RvTGlzdFxuICAgICAgICAgICAgLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICAgICAgICAuZ2V0VGFzayh0YXNrTmFtZSlcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihuZXdUYXNrRGVzY3JpcHRpb24pO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrKHRhc2tOYW1lKS5zZXREYXRlKG5ld1Rhc2tEYXRlKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRUYXNrRGVzY3JpcHRpb24ocHJvamVjdE5hbWUsIHRhc2tOYW1lLCBuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3RcbiAgICAgICAgICAgIC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICAgICAgLmdldFRhc2sodGFza05hbWUpXG4gICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldFRhc2tEYXRlKHByb2plY3ROYW1lLCB0YXNrTmFtZSwgbmV3RHVlRGF0ZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrTmFtZSkuc2V0RGF0ZShuZXdEdWVEYXRlKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRUYXNrQ29tcGxldGlvblN0YXR1cyhwcm9qZWN0TmFtZSwgdGFza05hbWUpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0XG4gICAgICAgICAgICAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIC5nZXRUYXNrKHRhc2tOYW1lKVxuICAgICAgICAgICAgLnRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKTtcblxuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZUFsbFRhc2tzUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LnVwZGF0ZUFsbFRhc2tzUHJvamVjdCgpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVRvZGF5UHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LnVwZGF0ZVRvZGF5UHJvamVjdCgpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVdlZWtQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldERhdGUoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cblxuICAgIGdldENvbXBsZXRlU3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZTtcbiAgICB9XG5cbiAgICB0b2dnbGVDb21wbGV0aW9uU3RhdHVzKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY29tcGFyZUFzYywgdG9EYXRlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0FsbCBUYXNrcycpKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb2RheScpKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUaGlzIFdlZWsnKSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH1cblxuICAgIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29udGFpbnMocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZShcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRGVsZXRlKSwgMSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQWxsVGFza3NQcm9qZWN0KCkge1xuICAgICAgICB0aGlzLmdldFByb2plY3QoJ0FsbCBUYXNrcycpLnRhc2tzID0gW107XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXROYW1lKCkgPT09ICdBbGwgVGFza3MnIHx8XG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXROYW1lKCkgPT09ICdUb2RheScgfHxcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RoaXMgV2VlaydcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0LmdldEFsbFRhc2tzKCk7XG4gICAgICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBgJHt0YXNrLmdldE5hbWUoKX0gKFByb2plY3Q6ICR7cHJvamVjdC5nZXROYW1lKCl9KWA7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2sudG9nZ2xlQ29tcGxldGlvblN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByb2plY3QoJ0FsbCBUYXNrcycpLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdBbGwgVGFza3MnKS5hZGRUYXNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRhc2sodGFza05hbWUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVG9kYXlQcm9qZWN0KCkge1xuICAgICAgICB0aGlzLmdldFByb2plY3QoJ1RvZGF5JykudGFza3MgPSBbXTtcblxuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ0FsbCBUYXNrcycgfHxcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RvZGF5JyB8fFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpID09PSAnVGhpcyBXZWVrJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0b2RheVRhc2tzID0gcHJvamVjdC5nZXRUYXNrc1RvZGF5KCk7XG4gICAgICAgICAgICB0b2RheVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGAke3Rhc2suZ2V0TmFtZSgpfSAoUHJvamVjdDogJHtwcm9qZWN0LmdldE5hbWUoKX0pYDtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFzay50b2dnbGVDb21wbGV0aW9uU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVG9kYXknKS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVG9kYXknKS5hZGRUYXNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRhc2sodGFza05hbWUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlV2Vla1Byb2plY3QoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVGhpcyBXZWVrJykudGFza3MgPSBbXTtcblxuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ0FsbCBUYXNrcycgfHxcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RvZGF5JyB8fFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpID09PSAnVGhpcyBXZWVrJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3ZWVrVGFza3MgPSBwcm9qZWN0LmdldFRhc2tzVGhpc1dlZWsoKTtcbiAgICAgICAgICAgIHdlZWtUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBgJHt0YXNrLmdldE5hbWUoKX0gKFByb2plY3Q6ICR7cHJvamVjdC5nZXROYW1lKCl9KWA7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2sudG9nZ2xlQ29tcGxldGlvblN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByb2plY3QoJ1RoaXMgV2VlaycpLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUaGlzIFdlZWsnKS5hZGRUYXNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRhc2sodGFza05hbWUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUaGlzIFdlZWsnKS5zZXRUYXNrcyhcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVGhpcyBXZWVrJylcbiAgICAgICAgICAgICAgICAuZ2V0VGFza3MoKVxuICAgICAgICAgICAgICAgIC5zb3J0KCh0YXNrQSwgdGFza0IpID0+XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmVBc2MoXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RhdGUobmV3IERhdGUodGFza0EuZ2V0RGF0ZSgpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RhdGUobmV3IERhdGUodGFza0IuZ2V0RGF0ZSgpKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XG5pbXBvcnQgZWRpdEltZyBmcm9tICcuLi9pbWcvcGVuY2lsLnBuZyc7XG5pbXBvcnQgdHJhc2hJbWcgZnJvbSAnLi4vaW1nL3RyYXNoLWJpbi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gICAgLy8gTE9BRCBDT05URU5UXG5cbiAgICBzdGF0aWMgbG9hZEhvbWVwYWdlKCkge1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKTtcbiAgICAgICAgVUkuaW5pdFByb2plY3RCdXR0b25zKCk7XG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KCdBbGwgVGFza3MnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXRhc2tzJykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XG4gICAgICAgIFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPT09ICdBbGwgVGFza3MnIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QubmFtZSA9PT0gJ1RvZGF5JyB8fFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPT09ICdUaGlzIFdlZWsnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgVUkuY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFVJLmluaXRBZGRQcm9qZWN0QnV0dG9ucygpO1xuICAgICAgICBVSS5pbml0RWRpdFByb2plY3RCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG5cbiAgICAgICAgbWFpbkhlYWRlci5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcblxuICAgICAgICBVSS5jbGVhclRhc2tzKCk7XG4gICAgICAgIFVJLmxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRUYXNrcyhwcm9qZWN0TmFtZSkge1xuICAgICAgICBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgICAgICAgIC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICAgICAgLmdldFRhc2tzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKCh0YXNrKSA9PlxuICAgICAgICAgICAgICAgIFVJLmNyZWF0ZVRhc2tDYXJkKHByb2plY3ROYW1lLCB0YXNrLm5hbWUsIHRhc2suZHVlRGF0ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb2plY3ROYW1lICE9PSAnQWxsIFRhc2tzJyAmJlxuICAgICAgICAgICAgcHJvamVjdE5hbWUgIT09ICdUb2RheScgJiZcbiAgICAgICAgICAgIHByb2plY3ROYW1lICE9PSAnVGhpcyBXZWVrJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIFVJLmluaXRBZGRUYXNrQnV0dG9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ1JFQVRFIFBST0pFQ1RcblxuICAgIHN0YXRpYyBjbGVhclByb2plY3RzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLXByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBlZGl0UHJvamVjdChlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0O1xuICAgICAgICBVSS5vcGVuRWRpdFByb2plY3RGb3JtKHByb2plY3ROYW1lLCBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0O1xuICAgICAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBVSS5jbGVhclByb2plY3RzKCk7XG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpO1xuICAgICAgICBVSS5vcGVuUHJvamVjdCgnQWxsIFRhc2tzJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC10YXNrcycpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXBwZW5kQnV0dG9uc1RvUHJvamVjdEJ1dHRvbihwcm9qZWN0TmFtZSwgcHJvamVjdEJ1dHRvbikge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtcHJvamVjdC1idXR0b24nKTtcblxuICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgZWRpdFByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0VkaXQnO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdSZW1vdmUnO1xuXG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuZWRpdFByb2plY3QpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuZGVsZXRlUHJvamVjdCk7XG5cbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hcHBlbmQoXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lcixcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLFxuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItcHJvamVjdC1idXR0b24nKTtcblxuICAgICAgICBVSS5hcHBlbmRCdXR0b25zVG9Qcm9qZWN0QnV0dG9uKHByb2plY3ROYW1lLCBwcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xuXG4gICAgICAgIFVJLmluaXRQcm9qZWN0QnV0dG9ucygpO1xuICAgIH1cblxuICAgIC8vIEFERCBQUk9KRUNUIEVWRU5UIExJU1RFTkVSU1xuXG4gICAgc3RhdGljIGluaXRBZGRQcm9qZWN0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXItc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhci1jYW5jZWwnKTtcblxuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3BlblByb2plY3RGb3JtKTtcbiAgICAgICAgc3VibWl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmFkZFByb2plY3QpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgVUkuY2FuY2VsUHJvamVjdFN1Ym1pc3Npb25cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb3BlblByb2plY3RGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICAgICAgVUkuY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0TmFtZSk7XG4gICAgICAgIFVJLmNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2FuY2VsUHJvamVjdFN1Ym1pc3Npb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFVJLmNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JykudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyBFRElUIFBST0pFQ1QgRk9STVxuXG4gICAgc3RhdGljIGluaXRFZGl0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdFByb2plY3RFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjZWRpdC1zaWRlYmFyLXN1Ym1pdCdcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2FuY2VsUHJvamVjdEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyNlZGl0LXNpZGViYXItY2FuY2VsJ1xuICAgICAgICApO1xuXG4gICAgICAgIHN1Ym1pdFByb2plY3RFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuYWRkUHJvamVjdEVkaXQpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNhbmNlbFByb2plY3RFZGl0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdEVkaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRvRWRpdCA9XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdFRvRWRpdC5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjZWRpdC1wcm9qZWN0LWlucHV0J1xuICAgICAgICApLnZhbHVlO1xuXG4gICAgICAgIFN0b3JhZ2UucmVuYW1lUHJvamVjdChwcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUpO1xuXG4gICAgICAgIFVJLmNsb3NlUHJvamVjdEVkaXRGb3JtKCk7XG5cbiAgICAgICAgVUkuY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKTtcblxuICAgICAgICBwcm9qZWN0VG9FZGl0LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5FZGl0UHJvamVjdEZvcm0ocHJvamVjdE5hbWUsIGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvRWRpdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtZm9ybScpO1xuICAgICAgICBjb25zdCBlZGl0UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1pbnB1dCcpO1xuXG4gICAgICAgIHByb2plY3RUb0VkaXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAvLyBJbnNlcnQgRm9ybSBhZnRlciBwcm9qZWN0VG9FZGl0XG4gICAgICAgIHByb2plY3RUb0VkaXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBlZGl0UHJvamVjdEZvcm0sXG4gICAgICAgICAgICBwcm9qZWN0VG9FZGl0Lm5leHRTaWJsaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgZWRpdFByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGVkaXRQcm9qZWN0SW5wdXQudmFsdWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgZWRpdFByb2plY3RJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjYW5jZWxQcm9qZWN0RWRpdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgVUkuY2xvc2VQcm9qZWN0RWRpdEZvcm0oKTtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb3NlUHJvamVjdEVkaXRGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLy8gUFJPSkVDVCBFVkVOVCBMSVNURU5FUlNcblxuICAgIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFsbFRhc2tzUHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXRhc2tzJyk7XG4gICAgICAgIGNvbnN0IHRvZGF5UHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcbiAgICAgICAgY29uc3Qgd2Vla1Byb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoaXMtd2VlaycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLnNpZGViYXItcHJvamVjdC1idXR0b24nXG4gICAgICAgICk7XG5cbiAgICAgICAgYWxsVGFza3NQcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIFVJLm9wZW5BbGxUYXNrc1Byb2plY3RzQnV0dG9uXG4gICAgICAgICk7XG4gICAgICAgIHRvZGF5UHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBVSS5vcGVuVG9kYXlQcm9qZWN0c0J1dHRvblxuICAgICAgICApO1xuICAgICAgICB3ZWVrUHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuV2Vla1Byb2plY3RzQnV0dG9uKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgocHJvamVjdEJ1dHRvbikgPT5cbiAgICAgICAgICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5oYW5kbGVQcm9qZWN0QnV0dG9uKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuQWxsVGFza3NQcm9qZWN0c0J1dHRvbigpIHtcbiAgICAgICAgU3RvcmFnZS51cGRhdGVBbGxUYXNrc1Byb2plY3QoKTtcbiAgICAgICAgVUkub3BlblByb2plY3QoJ0FsbCBUYXNrcycsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuVG9kYXlQcm9qZWN0c0J1dHRvbigpIHtcbiAgICAgICAgU3RvcmFnZS51cGRhdGVUb2RheVByb2plY3QoKTtcbiAgICAgICAgVUkub3BlblByb2plY3QoJ1RvZGF5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5XZWVrUHJvamVjdHNCdXR0b24oKSB7XG4gICAgICAgIFN0b3JhZ2UudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICAgICAgVUkub3BlblByb2plY3QoJ1RoaXMgV2VlaycsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuUHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdEJ1dHRvbikge1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdEJ1dHRvbnMgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItYnV0dG9ucycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLnNpZGViYXItcHJvamVjdC1idXR0b24nXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBbLi4uZGVmYXVsdFByb2plY3RCdXR0b25zLCAuLi5wcm9qZWN0QnV0dG9uc107XG5cbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1idXR0b24nKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG5cbiAgICAgICAgVUkubG9hZFByb2plY3RDb250ZW50KHByb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlUHJvamVjdEJ1dHRvbihlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1wcm9qZWN0LWJ1dHRvbicpIHx8XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS1wcm9qZWN0LWJ1dHRvbicpXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcblxuICAgICAgICBVSS5vcGVuUHJvamVjdChwcm9qZWN0TmFtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gQ1JFQVRFIFRBU0tcblxuICAgIHN0YXRpYyBjbGVhclRhc2tzKCkge1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlQ29tcGxldGVTdGF0dXMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJykuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRoaXMucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5pbm5lclRleHQ7XG4gICAgICAgIFN0b3JhZ2Uuc2V0VGFza0NvbXBsZXRpb25TdGF0dXMocHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2hlY2tCb3gocHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlU3RhdHVzID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICAgICAgICAuZ2V0UHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKS5pbm5lclRleHQpXG4gICAgICAgICAgICAuZ2V0VGFzayh0YXNrTmFtZSlcbiAgICAgICAgICAgIC5nZXRDb21wbGV0ZVN0YXR1cygpO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JvdW5kJyk7XG5cbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBgY2hlY2tib3gtJHt0YXNrTmFtZX1gKTtcblxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBjaGVja2JveC0ke3Rhc2tOYW1lfWApO1xuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNoYW5nZUNvbXBsZXRlU3RhdHVzKTtcblxuICAgICAgICBpZiAoY29tcGxldGVTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9PT0gJ0FsbCBUYXNrcycgfHxcbiAgICAgICAgICAgIHByb2plY3ROYW1lID09PSAnVG9kYXknIHx8XG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9PT0gJ1RoaXMgV2VlaydcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC1jaGVja2JveCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LmFwcGVuZChjaGVja2JveCwgbGFiZWwpO1xuXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVRhc2soKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJykuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dDtcbiAgICAgICAgU3RvcmFnZS5kZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XG4gICAgICAgIFVJLmNsZWFyVGFza3MoKTtcbiAgICAgICAgVUkubG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVGFza0NhcmRCdXR0b25zKHRhc2tDb250YWluZXIsIHByb2plY3ROYW1lLCB0YXNrTmFtZSwgZGF0ZSkge1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IFVJLmNyZWF0ZUNoZWNrQm94KHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgdGFza05hbWVDb250YWluZXIuaW5uZXJUZXh0ID0gdGFza05hbWU7XG4gICAgICAgIGRhdGVDb250YWluZXIuaW5uZXJUZXh0ID0gZGF0ZTtcblxuICAgICAgICBlZGl0VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2stYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXRhc2stYnV0dG9uJyk7XG5cbiAgICAgICAgZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuRWRpdFRhc2tGb3JtKTtcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnJlbW92ZVRhc2spO1xuXG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtlZGl0SW1nfSlgO1xuICAgICAgICBlZGl0VGFza0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLnN0eWxlLndpZHRoID0gJzIuOGVtJztcbiAgICAgICAgZWRpdFRhc2tCdXR0b24uc3R5bGUuaGVpZ2h0ID0gJzIuOGVtJztcblxuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0cmFzaEltZ30pYDtcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uc3R5bGUud2lkdGggPSAnMi44ZW0nO1xuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLnN0eWxlLmhlaWdodCA9ICcyLjhlbSc7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJvamVjdE5hbWUgPT09ICdBbGwgVGFza3MnIHx8XG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9PT0gJ1RvZGF5JyB8fFxuICAgICAgICAgICAgcHJvamVjdE5hbWUgPT09ICdUaGlzIFdlZWsnXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY2hlY2tCb3gsIHRhc2tOYW1lQ29udGFpbmVyLCBkYXRlQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGNoZWNrQm94LFxuICAgICAgICAgICAgICAgIHRhc2tOYW1lQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIGRhdGVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tCdXR0b24sXG4gICAgICAgICAgICAgICAgcmVtb3ZlVGFza0J1dHRvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVUYXNrQ2FyZChwcm9qZWN0TmFtZSwgdGFza05hbWUsIGRhdGUpIHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIFVJLmNyZWF0ZVRhc2tDYXJkQnV0dG9ucyh0YXNrQ29udGFpbmVyLCBwcm9qZWN0TmFtZSwgdGFza05hbWUsIGRhdGUpO1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0NhcmQnKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH1cblxuICAgIC8vIEVESVQgVEFTSyBGT1JNXG5cbiAgICBzdGF0aWMgb3BlbkVkaXRUYXNrRm9ybSgpIHtcbiAgICAgICAgY29uc3QgdGFza1RvRWRpdCA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPVxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICAgICAgICAuZ2V0UHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKS5pbm5lclRleHQpXG4gICAgICAgICAgICAuZ2V0VGFzayh0YXNrTmFtZSk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtY2FuY2VsJyk7XG5cbiAgICAgICAgZWRpdFRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5lZGl0VGFzayk7XG4gICAgICAgIGNhbmNlbEVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgVUkuY2FuY2VsRWRpdFRhc2tTdWJtaXNzaW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZWRpdC10aXRsZScpLnZhbHVlID0gdGFzay5uYW1lO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjcmlwdGlvbicpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlFZGl0Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIC8vIEluc2VydCBGb3JtIGFmdGVyIHRhc2tUb0VkaXRcbiAgICAgICAgdGFza1RvRWRpdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUVkaXRGb3JtJyksXG4gICAgICAgICAgICB0YXNrVG9FZGl0Lm5leHRTaWJsaW5nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGVkaXRUYXNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJykuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID1cbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgdGFza05hbWUgPVxuICAgICAgICAgICAgdGFza1RvRWRpdC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWVkaXQtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpLnZhbHVlO1xuXG4gICAgICAgIFN0b3JhZ2UucmVuYW1lVGFzayhcbiAgICAgICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgICBuZXdUYXNrTmFtZSxcbiAgICAgICAgICAgIG5ld1Rhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5ld1Rhc2tEYXRlXG4gICAgICAgICk7XG5cbiAgICAgICAgVUkuY2xvc2VFZGl0VGFza0Zvcm0oKTtcblxuICAgICAgICBVSS5jbGVhclRhc2tzKCk7XG4gICAgICAgIFVJLmxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb3NlRWRpdFRhc2tGb3JtKCkge1xuICAgICAgICBjb25zdCBteUVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215RWRpdEZvcm0nKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1lZGl0LXRpdGxlJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kYXRlJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICBteUVkaXRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgLy8gSW5zZXJ0IEZvcm0gYWZ0ZXIgYWRkVGFza0Zvcm0gdG8gbm90IGRlbGV0ZSBpdCB3aGVuIGNsZWFyaW5nIHRhc2tzXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI215Rm9ybScpXG4gICAgICAgICAgICAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgbXlFZGl0Rm9ybSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlGb3JtJykubmV4dFNpYmxpbmdcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNhbmNlbEVkaXRUYXNrU3VibWlzc2lvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgVUkuY2xvc2VFZGl0VGFza0Zvcm0oKTtcbiAgICB9XG5cbiAgICAvLyBBREQgVEFTSyBFVkVOVCBMSVNURU5FUlNcblxuICAgIHN0YXRpYyBpbml0QWRkVGFza0J1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKTtcblxuICAgICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3BlbkFkZFRhc2tGb3JtKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb3BlbkFkZFRhc2tGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykuZm9jdXMoKTtcblxuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuICAgICAgICBjb25zdCBjYW5jZWxUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xuXG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5hZGRUYXNrKTtcbiAgICAgICAgY2FuY2VsVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNhbmNlbFRhc2tTdWJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VBZGRUYXNrRm9ybSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUYXNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJykuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xuXG4gICAgICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0TmFtZSwgbmV3IFRhc2sodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkYXRlKSk7XG4gICAgICAgIFVJLmNyZWF0ZVRhc2tDYXJkKHByb2plY3ROYW1lLCB0YXNrTmFtZSwgZGF0ZSk7XG4gICAgICAgIFVJLmNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2FuY2VsVGFza1N1Ym1pc3Npb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFVJLmNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcblxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5sb2FkSG9tZXBhZ2UpO1xud2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgICAgIFVJLmNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICAgICAgVUkuY2xvc2VFZGl0VGFza0Zvcm0oKTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=