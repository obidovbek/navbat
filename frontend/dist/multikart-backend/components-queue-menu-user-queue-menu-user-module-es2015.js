(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-queue-menu-user-queue-menu-user-module"],{

/***/ "BTfv":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDialogComponent", function() { return CustomDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class CustomDialogComponent {
    constructor() {
        this.title = 'Dialog Title';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    closeDialog() {
        this.close.emit();
    }
}
CustomDialogComponent.ɵfac = function CustomDialogComponent_Factory(t) { return new (t || CustomDialogComponent)(); };
CustomDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomDialogComponent, selectors: [["app-custom-dialog"]], inputs: { title: "title" }, outputs: { close: "close" }, ngContentSelectors: _c0, decls: 9, vars: 1, consts: [[1, "custom-dialog-overlay", 3, "click"], [1, "custom-dialog-content"], [1, "custom-dialog-body"], [2, "width", "100%", "display", "flex", "justify-content", "flex-end"], [1, "btn", "btn-primary", 2, "padding", "6px", 3, "click"]], template: function CustomDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomDialogComponent_Template_div_click_0_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomDialogComponent_Template_button_click_7_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Yopish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: [".custom-dialog-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  z-index: 1000;\r\n  color: black;\r\n}\r\n\r\n.custom-dialog-content[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  border-radius: 10px;\r\n  transform: translate(-50%, -50%);\r\n  background: #fff;\r\n  padding: 20px;\r\n  z-index: 1001;\r\n  width: 300px;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\r\n  color: black;\r\n}\r\n\r\n.custom-dialog-body[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWRpYWxvZy1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmN1c3RvbS1kaWFsb2ctY29udGVudCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB6LWluZGV4OiAxMDAxO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jdXN0b20tZGlhbG9nLWJvZHkge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-dialog',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.css'],
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "FD+4":
/*!**********************************************************************!*\
  !*** ./src/app/components/queue-menu-user/queue-menu-user.module.ts ***!
  \**********************************************************************/
/*! exports provided: QueueMenuUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueMenuUserModule", function() { return QueueMenuUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _queue_menu_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queue-menu-user-routing.module */ "mwBw");
/* harmony import */ var _queue_menu_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queue-menu-user.component */ "VUMv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-print-element */ "KyiH");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/dialog.component */ "BTfv");








class QueueMenuUserModule {
}
QueueMenuUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QueueMenuUserModule });
QueueMenuUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QueueMenuUserModule_Factory(t) { return new (t || QueueMenuUserModule)(); }, providers: [], imports: [[
            _queue_menu_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueMenuUserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_print_element__WEBPACK_IMPORTED_MODULE_5__["NgxPrintElementModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QueueMenuUserModule, { declarations: [_queue_menu_user_component__WEBPACK_IMPORTED_MODULE_3__["QueueMenuUserComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CustomDialogComponent"]], imports: [_queue_menu_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueMenuUserRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_print_element__WEBPACK_IMPORTED_MODULE_5__["NgxPrintElementModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueMenuUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_queue_menu_user_component__WEBPACK_IMPORTED_MODULE_3__["QueueMenuUserComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CustomDialogComponent"]],
                imports: [
                    _queue_menu_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueMenuUserRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_print_element__WEBPACK_IMPORTED_MODULE_5__["NgxPrintElementModule"],
                ],
                providers: [],
                bootstrap: [],
                entryComponents: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "KyiH":
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-print-element/__ivy_ngcc__/fesm2015/ngx-print-element.js ***!
  \***********************************************************************************/
/*! exports provided: NgxPrintElementDirective, NgxPrintElementService, NgxPrintElementComponent, NgxPrintElementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintElementDirective", function() { return NgxPrintElementDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintElementService", function() { return NgxPrintElementService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintElementComponent", function() { return NgxPrintElementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintElementModule", function() { return NgxPrintElementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * callPrint
 * \@param printWindow
 * \@param iframe
 * @type {?}
 */


const _c0 = ["*"];
const callPrint = (/**
 * @param {?} printWindow
 * @param {?} iframe
 * @return {?}
 */
(printWindow, iframe) => {
    if (printWindow && printWindow.printPage) {
        printWindow.printPage();
        if (iframe) {
            document.body.removeChild(iframe);
        }
    }
    else {
        setTimeout((/**
         * @return {?}
         */
        () => {
            callPrint(printWindow, iframe);
        }), 50);
    }
});
/**
 * getBaseHref
 * \@return
 * @type {?}
 */
const getBaseHref = (/**
 * @return {?}
 */
() => {
    /** @type {?} */
    const port = (window.location.port) ? `:${window.location.port}` : '';
    return `${window.location.protocol}//${window.location.hostname}${port}${window.location.pathname}`;
});
/**
 * getMarkup
 * \@param elementHtml
 * \@param options
 * \@return
 * @type {?}
 */
const getMarkup = (/**
 * @param {?} elementHtml
 * @param {?} options
 * @return {?}
 */
(elementHtml, options) => {
    /** @type {?} */
    const template = options.templateString;
    /** @type {?} */
    const templateRegex = new RegExp(/{{\s*printBody\s*}}/gi);
    /** @type {?} */
    let stylesheets;
    /** @type {?} */
    let styles;
    /** @type {?} */
    const html = [];
    if (template && templateRegex.test(template)) {
        elementHtml = template.replace(templateRegex, elementHtml);
    }
    html.push(`<html><head><title>${options.pageTitle || ''}</title>`);
    // If stylesheet URL's or list of stylesheet URL's are specified, override page stylesheets
    if (options.stylesheets) {
        stylesheets = Array.isArray(options.stylesheets) ? options.stylesheets : [options.stylesheets];
    }
    else {
        stylesheets = Array.prototype.slice
            .call(document.getElementsByTagName('link'))
            .map((/**
         * @param {?} link
         * @return {?}
         */
        link => link));
    }
    stylesheets.forEach((/**
     * @param {?} f
     * @return {?}
     */
    (f) => {
        html.push(`<link rel="${f.rel}" href="${f.href}">`);
    }));
    // If inline styles or list of inline styles are specified, override inline styles
    if (options.styles) {
        styles = Array.isArray(options.styles) ? [...options.styles, `.print-none { display: none; }`] : [options.styles + `.print-none { display: none; }`];
    }
    else {
        styles = Array.prototype.slice
            .call(document.getElementsByTagName('style'))
            .map((/**
         * @param {?} style
         * @return {?}
         */
        style => style.innerHTML));
    }
    styles.forEach((/**
     * @param {?} style
     * @return {?}
     */
    (style) => {
        html.push(`<style type="text/css">${style}</style>`);
    }));
    html.push(`<base href="${getBaseHref()}"/>`);
    html.push('</head><body class="pe-body">');
    html.push(elementHtml);
    html.push(`
    <script type="text/javascript">
      function printPage() {
        focus();
        print();
        ${options.printMode.toLowerCase() === 'popup' ? 'close();' : ''}
      }
    </script>
  `);
    html.push('</body></html>');
    return html.join('');
});
/**
 * printHtml
 * \@param element
 * \@param selfOptions
 * @type {?}
 */
const printHtml = (/**
 * @param {?} element
 * @param {?=} selfOptions
 * @return {?}
 */
(element, selfOptions = {}) => {
    /** @type {?} */
    const defaultOptions = {
        htmlType: 'domObj',
        printMode: 'template',
        pageTitle: '',
        templateString: '',
        popupProperties: '',
        stylesheets: null,
        styles: null
    };
    /** @type {?} */
    const options = Object.assign({}, defaultOptions, selfOptions);
    /** @type {?} */
    let html = element;
    if (options.htmlType === 'domObj') {
        html = element.outerHTML;
    }
    // Get markup to be printed
    /** @type {?} */
    const markup = getMarkup(html, options);
    /** @type {?} */
    let printWindow;
    /** @type {?} */
    let printIframe;
    /** @type {?} */
    let printDocument;
    /** @type {?} */
    let printElementID;
    if (options.printMode.toLowerCase() === 'popup') {
        printWindow = window.open('about:blank', 'printElementWindow', options.popupProperties);
        printDocument = printWindow && printWindow.document;
    }
    else {
        printElementID = `printElement_${(Math.round(Math.random() * 99999)).toString()}`;
        printIframe = document.createElement('iframe');
        printIframe.setAttribute('id', printElementID);
        printIframe.setAttribute('src', 'about:blank');
        printIframe.setAttribute('frameBorder', '0');
        printIframe.setAttribute('scrolling', 'no');
        printIframe.setAttribute('style', 'position:fixed;bottom:100%;right:100%;');
        document.body.appendChild(printIframe);
        printDocument = (printIframe.contentWindow || printIframe.contentDocument);
        if (printDocument.document) {
            printDocument = printDocument.document;
        }
        printIframe = ((/** @type {?} */ (document))).frames ? ((/** @type {?} */ (document))).frames[printElementID] : document.getElementById(printElementID);
        printWindow = printIframe.contentWindow || printIframe;
    }
    focus();
    printDocument.open();
    // SetTimeout fixesiframe printMode does not work in firefox
    setTimeout((/**
     * @return {?}
     */
    () => {
        printDocument.write(markup);
        printDocument.close();
    }));
    callPrint(printWindow, printIframe);
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPrintElementService {
    /**
     * Print
     * @param {?} id
     * @param {?=} config
     * @return {?}
     */
    print(id, config) {
        // Create and insert new print section
        /** @type {?} */
        const container = document.getElementById(id);
        switch (config && config.printMode) {
            case 'template':
                printHtml(container, Object.assign({}, config, { printMode: '' }));
                break;
            case 'template-popup':
                printHtml(container, Object.assign({}, config, { printMode: 'popup' }));
                break;
            default:
                if (container) {
                    // Declare
                    /** @type {?} */
                    const domClone = container.cloneNode(true);
                    /** @type {?} */
                    const $printSection = document.createElement('div');
                    // Add visibility hidden into body
                    /** @type {?} */
                    const bodyEl = document.querySelector('body');
                    if (bodyEl) {
                        bodyEl.setAttribute('style', 'visibility: hidden !important;');
                    }
                    // Clone element container
                    $printSection.id = 'ngx-print-element';
                    $printSection.appendChild(domClone);
                    document.body.insertBefore($printSection, document.body.firstChild);
                    // Print
                    window.print();
                    // Clean up print section for future use
                    /** @type {?} */
                    const oldElem = document.getElementById('ngx-print-element');
                    if (oldElem) {
                        oldElem.parentNode && oldElem.parentNode.removeChild(oldElem);
                        oldElem.remove();
                    }
                    // Clear visibility: hidden
                    bodyEl && (bodyEl.style.visibility = '');
                }
                break;
        }
    }
}
NgxPrintElementService.ɵfac = function NgxPrintElementService_Factory(t) { return new (t || NgxPrintElementService)(); };
NgxPrintElementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxPrintElementService, factory: NgxPrintElementService.ɵfac, providedIn: 'root' });
/** @nocollapse */ NgxPrintElementService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxPrintElementService_Factory() { return new NgxPrintElementService(); }, token: NgxPrintElementService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPrintElementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPrintElementDirective {
    /**
     * @param {?} prints
     */
    constructor(prints) {
        this.prints = prints;
        this.print = [];
    }
    /**
     * Print
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.print && this.print.length === 1) {
            this.prints.print(this.print[0]);
        }
        if (this.print && this.print.length === 2) {
            this.prints.print(this.print[0], this.print[1]);
        }
    }
}
NgxPrintElementDirective.ɵfac = function NgxPrintElementDirective_Factory(t) { return new (t || NgxPrintElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxPrintElementService)); };
NgxPrintElementDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxPrintElementDirective, selectors: [["", "print", ""]], hostBindings: function NgxPrintElementDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPrintElementDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { print: "print" } });
NgxPrintElementDirective.ctorParameters = () => [
    { type: NgxPrintElementService }
];
NgxPrintElementDirective.propDecorators = {
    print: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPrintElementDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[print]'
            }]
    }], function () { return [{ type: NgxPrintElementService }]; }, { print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], 
    /**
     * Print
     * @param {?} event
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPrintElementComponent {
    /**
     * @param {?} prints
     */
    constructor(prints) {
        this.prints = prints;
    }
    /**
     * print
     * @param {?} id
     * @param {?=} config
     * @return {?}
     */
    print(id, config) {
        this.prints.print(id, config);
    }
}
NgxPrintElementComponent.ɵfac = function NgxPrintElementComponent_Factory(t) { return new (t || NgxPrintElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxPrintElementService)); };
NgxPrintElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxPrintElementComponent, selectors: [["ngx-print-element"]], exportAs: ["element"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NgxPrintElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
NgxPrintElementComponent.ctorParameters = () => [
    { type: NgxPrintElementService }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPrintElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-print-element',
                template: `<ng-content></ng-content>`,
                exportAs: 'element'
            }]
    }], function () { return [{ type: NgxPrintElementService }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPrintElementModule {
}
NgxPrintElementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPrintElementModule });
NgxPrintElementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxPrintElementModule_Factory(t) { return new (t || NgxPrintElementModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPrintElementModule, { declarations: [NgxPrintElementComponent, NgxPrintElementDirective], exports: [NgxPrintElementComponent, NgxPrintElementDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPrintElementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    NgxPrintElementComponent,
                    NgxPrintElementDirective
                ],
                exports: [
                    NgxPrintElementComponent,
                    NgxPrintElementDirective
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-print-element.js.map

/***/ }),

/***/ "VUMv":
/*!*************************************************************************!*\
  !*** ./src/app/components/queue-menu-user/queue-menu-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: QueueMenuUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueMenuUserComponent", function() { return QueueMenuUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/data.service */ "J8x5");
/* harmony import */ var src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/http.service */ "uiMJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-print-element */ "KyiH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/dialog.component */ "BTfv");










function QueueMenuUserComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueMenuUserComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const idx_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.selectedItem(idx_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.symbol, "", idx_r3 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2[ctx_r0.lang === "en" ? "en" : ctx_r0.lang === "ru" ? "ru" : "uz"], " ");
} }
function QueueMenuUserComponent_app_custom_dialog_18_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sizdan oldin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " ta navbat bor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.queue_differ, " ");
} }
function QueueMenuUserComponent_app_custom_dialog_18_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041F\u0435\u0440\u0435\u0434 \u0432\u0430\u043C\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u043E\u0447\u0435\u0440\u0435\u0434\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.queue_differ, " ");
} }
function QueueMenuUserComponent_app_custom_dialog_18_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " There is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " queue ahead of you ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.queue_differ, " ");
} }
function QueueMenuUserComponent_app_custom_dialog_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-custom-dialog", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function QueueMenuUserComponent_app_custom_dialog_18_Template_app_custom_dialog_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, QueueMenuUserComponent_app_custom_dialog_18_p_8_Template, 5, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, QueueMenuUserComponent_app_custom_dialog_18_p_9_Template, 5, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, QueueMenuUserComponent_app_custom_dialog_18_p_10_Template, 5, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r1.lang === "en" ? "Your number" : ctx_r1.lang === "ru" ? "\u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440" : "Sizning raqamingiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.queue_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.service_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.lang === "uz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.lang === "ru");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.lang === "en");
} }
class QueueMenuUserComponent {
    constructor(dataService, httpService, router, print) {
        this.dataService = dataService;
        this.httpService = httpService;
        this.router = router;
        this.print = print;
        this.isDialogVisible = false;
        this.dialogContent = '';
        this.queue_number = '';
        this.queue_differ = 0;
        this.service_name = '';
        this.row = this.dataService.selected.index;
        this.lang = this.dataService.selected.lang;
        this.config = {
            printMode: 'template-popup',
            popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
            pageTitle: 'Hello World',
        };
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"];
        if (!this.dataService.selected.lang)
            this.router.navigateByUrl('/#/infokios');
        this.symbol = this.dataService.menu[this.dataService.selected.index].symbol;
    }
    ngOnInit() { }
    selectSymbol() {
        return this.dataService.menu[this.dataService.selected.index].inner_menu;
    }
    openDialog() {
        // this.dialogContent = this.queuePrintContent();
        this.isDialogVisible = true;
    }
    closeDialog() {
        this.isDialogVisible = false;
        this.router.navigateByUrl('infokios').then(() => window.location.reload());
    }
    selectedItem(idx) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var changes = yield localStorage.getItem('changes');
            this.dataService.changes = JSON.parse(changes);
            if (!this.dataService.changes)
                this.dataService.changes = [];
            const d = new Date();
            (_a = this.dataService.changes) === null || _a === void 0 ? void 0 : _a.push({
                idx1: this.dataService.selected.index,
                idx2: idx,
                queue: this.dataService.menu[this.dataService.selected.index].inner_menu[idx]
                    .queue.overall + 1,
                idx2_name: this.dataService.menu[this.dataService.selected.index].inner_menu[idx]
                    .uz,
                date: d.getDate(),
            });
            console.log('item selected');
            this.httpService.addQueue(this.dataService.selected.index, idx).subscribe((menu) => {
                // console.log(res);
                // if (res.status === 200) {
                this.dataService.menu = menu;
                this.dataService.changes = [];
                const selectedService = this.dataService.menu[this.dataService.selected.index].inner_menu[idx];
                this.queue_number =
                    this.dataService.menu[this.dataService.selected.index].symbol +
                        (idx + 1).toString() +
                        '-' +
                        selectedService.queue.overall;
                this.queue_differ =
                    selectedService.queue.overall - selectedService.queue.current;
                this.service_name = selectedService[this.lang];
                // this.printElem(document.getElementById('queue_print').innerHTML);
                localStorage.setItem('changes', JSON.stringify(this.dataService.changes));
                localStorage.setItem('menu', JSON.stringify(menu));
                this.openDialog();
                // } else {
                //   alert('Nimadur hato yana bir bor urinib ko‘ring!');
                // }
            }, (error) => {
                console.log('oflayn');
                this.dataService.menu[this.dataService.selected.index].inner_menu[idx]
                    .queue.overall++;
                localStorage.setItem('changes', JSON.stringify(this.dataService.changes));
                this.router.navigateByUrl('/#/infokios');
            });
        });
    }
    navigateBack() {
        console.log('navigateBack');
        this.router.navigateByUrl('/queue-user');
    }
    queuePrintContent() {
        var queue_print = "<div id='queue_print' style='display:flex; font-size: 14px; justify-content: center;flex-direction: column;align-items: center;'>";
        queue_print += '<div>Sizning raqamingiz</div>';
        queue_print +=
            "<div style='font-size: 35px;font-weight: 900;padding: 8px 0;'>" +
                this.queue_number +
                '';
        queue_print +=
            '</div><div><strong>' + this.service_name + '</strong></div>';
        queue_print +=
            '<div>Sizdan oldin <strong>' +
                this.queue_differ +
                '</strong> ta navbat bor</div>';
        queue_print += '<div>Operator chaqirishini kuting</div>';
        queue_print += "<div style='margin-top:10px; font-size:1px;'>a</div>";
        queue_print += '</div>';
        return queue_print;
    }
    printElem(elem) {
        // var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        // var oldWindow = window;
        var a1 = 'Sizning raqamingiz';
        if (this.lang === 'uz') {
            a1 = 'Sizning raqamingiz';
        }
        else if (this.lang === 'ru') {
            a1 = 'Sizning raqamingiz';
        }
        else if (this.lang === 'en') {
        }
        var queue_print = "<div id='queue_print' style='display:flex; font-size: 14px; justify-content: center;flex-direction: column;align-items: center;'>";
        queue_print += '<div>Sizning raqamingiz</div>';
        queue_print +=
            "<div style='font-size: 35px;font-weight: 900;padding: 8px 0;'>" +
                this.queue_number +
                '';
        queue_print +=
            '</div><div><strong>' + this.service_name + '</strong></div>';
        queue_print +=
            '<div>Sizdan oldin <strong>' +
                this.queue_differ +
                '</strong> ta navbat bor</div>';
        queue_print += '<div>Operator chaqirishini kuting</div>';
        queue_print += "<div style='margin-top:10px; font-size:1px;'>a</div>";
        if (this.environment.otm === 'ferpi') {
            queue_print +=
                "<div><svg version='1.0' xmlns='http://www.w3.org/2000/svg'";
            queue_print +=
                " width='100.000000pt' height='51.000000pt' viewBox='0 0 100.000000 51.000000'";
            queue_print += " preserveAspectRatio='xMidYMid meet'>";
            queue_print +=
                "<g transform='translate(0.000000,51.000000) scale(0.100000,-0.100000)'";
            queue_print += " fill='#000000' stroke='none'>";
            queue_print +=
                "<path d='M0 458 c0 -30 0 -31 20 -13 15 14 17 21 9 32 -19 22 -29 15 -29 -19z'/>";
            queue_print +=
                "<path d='M71 472 c-63 -34 -71 -63 -71 -269 0 -106 4 -183 9 -183 24 0 41 34 ";
            queue_print +=
                '41 82 0 44 2 49 18 43 60 -27 129 -12 162 35 24 34 26 99 5 140 -27 51 -106 ';
            queue_print +=
                '76 -157 49 -11 -6 -22 -8 -25 -5 -13 12 19 58 47 69 21 8 30 18 30 34 0 28 ';
            queue_print +=
                '-14 29 -59 5z m114 -167 c30 -30 32 -64 4 -99 -29 -37 -89 -37 -118 0 -62 79 ';
            queue_print += "43 170 114 99z'/>";
            queue_print +=
                "<path d='M333 423 c-15 -6 -18 -83 -3 -83 6 0 10 7 10 15 0 7 8 19 18 24 16 ";
            queue_print +=
                '10 16 10 0 11 -10 0 -18 5 -18 10 0 6 9 10 21 10 11 0 17 5 14 10 -7 11 -22 ';
            queue_print += "12 -42 3z'/>";
            queue_print +=
                "<path d='M600 415 c0 -8 4 -15 10 -15 5 0 7 7 4 15 -4 8 -8 15 -10 15 -2 0 -4 ";
            queue_print += "-7 -4 -15z'/>";
            queue_print +=
                "<path d='M414 391 c19 -7 19 -8 -3 -14 -23 -6 -25 -27 -3 -35 7 -2 10 2 6 12 ";
            queue_print +=
                '-3 9 -1 16 4 16 6 0 13 -8 15 -17 3 -10 5 -3 6 15 1 27 -2 32 -21 31 -21 0 ';
            queue_print += "-22 -1 -4 -8z'/>";
            queue_print +=
                "<path d='M471 368 c1 -21 3 -26 6 -13 3 11 12 26 21 33 14 11 13 12 -6 12 -18 ";
            queue_print += "0 -22 -5 -21 -32z'/>";
            queue_print +=
                "<path d='M529 383 c-5 -68 -5 -68 21 -68 33 0 42 35 8 36 l-23 0 23 9 c30 13 ";
            queue_print +=
                '29 40 -3 40 -17 0 -25 -6 -26 -17z m31 -3 c0 -5 -4 -10 -10 -10 -5 0 -10 5 ';
            queue_print +=
                '-10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m5 -50 c-3 -5 -10 -10 -16 -10 -5 0 ';
            queue_print += "-9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z'/>";
            queue_print +=
                "<path d='M634 386 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28 ";
            queue_print +=
                '-13 2 -25 -3 -28 -12z m36 -16 c0 -11 -4 -20 -10 -20 -5 0 -10 9 -10 20 0 11 ';
            queue_print += "5 20 10 20 6 0 10 -9 10 -20z'/>";
            queue_print +=
                "<path d='M710 370 c0 -16 5 -30 10 -30 6 0 10 11 10 25 0 34 18 32 23 -2 4 ";
            queue_print += "-26 4 -26 6 5 1 28 -2 32 -24 32 -21 0 -25 -5 -25 -30z'/>";
            queue_print +=
                "<path d='M805 391 c17 -8 18 -10 3 -10 -11 -1 -18 -9 -18 -21 0 -15 7 -20 26 ";
            queue_print +=
                '-20 22 0 25 4 22 28 -2 21 -9 28 -28 29 -23 2 -23 2 -5 -6z m15 -31 c0 -5 -4 ';
            queue_print +=
                "-10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z'/>";
            queue_print +=
                "<path d='M320 261 c0 -23 5 -41 10 -41 6 0 10 4 10 9 0 5 9 11 21 14 32 9 22 ";
            queue_print +=
                '51 -13 55 -27 3 -28 1 -28 -37z m50 9 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 ';
            queue_print += "0 6 7 10 15 10 8 0 15 -4 15 -10z'/>";
            queue_print +=
                "<path d='M480 260 c0 -22 3 -40 8 -40 4 0 6 18 4 40 -2 22 -6 40 -8 40 -2 0 ";
            queue_print += "-4 -18 -4 -40z'/>";
            queue_print +=
                "<path d='M870 260 c0 -22 5 -40 10 -40 6 0 10 5 10 11 0 8 6 7 17 -2 14 -12 ";
            queue_print +=
                '16 -12 11 1 -3 8 -1 23 4 33 5 9 6 17 2 17 -4 0 -13 -8 -20 -17 -12 -16 -13 ';
            queue_print += "-15 -14 10 0 15 -4 27 -10 27 -5 0 -10 -18 -10 -40z'/>";
            queue_print +=
                "<path d='M566 282 c-10 -16 7 -62 23 -61 10 0 11 2 4 6 -15 6 -17 33 -3 33 6 ";
            queue_print += "0 10 4 10 9 0 11 -28 22 -34 13z'/>";
            queue_print +=
                "<path d='M407 273 c-13 -12 -7 -51 9 -57 22 -8 22 -8 34 15 17 30 -20 66 -43 ";
            queue_print +=
                '42z m33 -28 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 ';
            queue_print += "10 -15z'/>";
            queue_print +=
                "<path d='M520 250 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5 ";
            queue_print += "0 -10 -13 -10 -30z'/>";
            queue_print +=
                "<path d='M621 262 c-14 -26 11 -63 30 -44 11 10 9 12 -6 13 -17 0 -17 2 3 10 ";
            queue_print +=
                '13 5 22 15 20 21 -7 21 -36 21 -47 0z m29 -2 c0 -5 -5 -10 -11 -10 -5 0 -7 5 ';
            queue_print += "-4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z'/>";
            queue_print +=
                "<path d='M689 266 c6 -7 9 -20 6 -28 -4 -9 1 -14 14 -14 11 0 17 4 15 8 -3 4 ";
            queue_print +=
                '0 17 6 28 6 12 7 20 1 20 -5 0 -12 -6 -15 -12 -5 -10 -7 -10 -12 0 -3 6 -10 ';
            queue_print += "12 -16 12 -7 0 -6 -5 1 -14z'/>";
            queue_print +=
                "<path d='M761 246 c1 -23 3 -26 6 -8 2 12 11 22 18 22 7 0 16 -10 18 -22 4 ";
            queue_print +=
                "-16 5 -13 4 7 -2 24 -7 30 -24 31 -20 1 -23 -4 -22 -30z'/>";
            queue_print +=
                "<path d='M830 250 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5 ";
            queue_print += "0 -10 -13 -10 -30z'/>";
            queue_print +=
                "<path d='M950 271 c0 -6 8 -11 18 -12 12 0 11 -3 -7 -10 -18 -7 -21 -12 -12 ";
            queue_print +=
                "-23 7 -8 21 -12 32 -9 29 8 22 57 -8 61 -13 2 -23 -1 -23 -7z'/>";
            queue_print +=
                "<path d='M320 150 c0 -22 5 -40 10 -40 6 0 10 18 10 40 0 22 -4 40 -10 40 -5 ";
            queue_print += "0 -10 -18 -10 -40z'/>";
            queue_print +=
                "<path d='M514 180 c-13 -13 -5 -70 10 -70 7 0 11 14 10 36 -2 41 -6 48 -20 34z'/>";
            queue_print +=
                "<path d='M608 178 c-9 -25 5 -68 21 -67 10 0 11 2 4 6 -15 5 -17 40 -4 45 5 2 ";
            queue_print += "3 8 -4 15 -10 9 -15 9 -17 1z'/>";
            queue_print +=
                "<path d='M738 178 c-9 -25 5 -68 21 -67 10 0 11 2 4 6 -15 5 -17 40 -4 45 5 2 ";
            queue_print += "3 8 -4 15 -10 9 -15 9 -17 1z'/>";
            queue_print +=
                "<path d='M360 141 c0 -17 5 -31 10 -31 6 0 10 9 10 19 0 11 5 23 10 26 6 4 10 ";
            queue_print +=
                '-5 10 -19 0 -14 5 -26 11 -26 6 0 9 12 7 28 -2 21 -9 28 -30 30 -25 3 -28 0 ';
            queue_print += "-28 -27z'/>";
            queue_print +=
                "<path d='M440 150 c0 -12 7 -20 18 -21 14 0 14 -2 -3 -9 -18 -8 -17 -9 8 -9 ";
            queue_print +=
                "33 -1 37 24 5 33 -22 7 -22 7 -3 16 19 8 19 9 -2 9 -17 1 -23 -5 -23 -19z'/>";
            queue_print +=
                "<path d='M560 140 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5 ";
            queue_print += "0 -10 -13 -10 -30z'/>";
            queue_print +=
                "<path d='M661 143 c-1 -29 2 -33 24 -33 22 0 25 4 24 33 -1 29 -2 29 -8 8 -9 ";
            queue_print += "-35 -29 -37 -34 -4 -4 27 -4 27 -6 -4z'/>";
            queue_print +=
                "<path d='M790 140 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5 ";
            queue_print += "0 -10 -13 -10 -30z'/>";
            queue_print += '</g>';
            queue_print += '</svg></div>';
        }
        // queue_print += "<div style='margin-top: 15px; width: 100px; height: 60px; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; border-radius: 26%;'></div>"
        // queue_print += "<img src='https://navbat.ferpi.uz/assets/images/queue/logo.png'>";
        queue_print += '</div>';
        window.document.write('<html><head>');
        window.document.write('</head><body >');
        window.document.write(queue_print);
        window.document.write('</body></html>');
        window.document.close(); // necessary for IE >= 10
        window.focus(); // necessary for IE >= 10*/
        window.print();
        window.close();
        // this.router.navigate(['/infokios']).then(() => {
        //   // After navigation is successful, reload the page
        //   window.location.reload();
        // });
    }
}
QueueMenuUserComponent.ɵfac = function QueueMenuUserComponent_Factory(t) { return new (t || QueueMenuUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_print_element__WEBPACK_IMPORTED_MODULE_6__["NgxPrintElementService"])); };
QueueMenuUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QueueMenuUserComponent, selectors: [["app-queue-menu-user"]], decls: 19, vars: 4, consts: [[1, "bolim"], [1, "bolim-group"], ["class", "bolim-inner", 3, "click", 4, "ngFor", "ngForOf"], ["id", "queue_print"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "width", "250", "height", "150", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "back_button", 3, "click"], ["transform", "translate(0.000000,512.000000) scale(0.100000,-0.100000)", "fill", "#ffffff", "stroke", "none"], ["d", "M2427 3379 c-19 -11 -978 -744 -1054 -806 -51 -41 -55 -68 -15 -105\n54 -50 1066 -821 1084 -826 10 -2 28 4 38 13 19 17 20 32 20 243 l0 225 133\n-6 c289 -14 559 -77 759 -178 131 -66 225 -142 330 -267 31 -38 62 -41 83 -9\n13 20 13 42 5 157 -18 235 -75 424 -175 580 -65 103 -210 243 -310 301 -204\n119 -440 179 -704 179 l-121 0 0 239 c0 237 0 240 -22 255 -26 19 -27 19 -51\n5z m-10 -590 c12 -10 48 -13 148 -11 150 4 310 -16 443 -54 387 -112 623 -385\n686 -791 14 -93 21 -91 -64 -21 -135 110 -358 206 -600 257 -149 32 -215 40\n-405 52 -244 14 -224 33 -227 -222 l-3 -200 -462 353 c-254 194 -461 358 -459\n363 1 6 209 168 462 362 l459 352 3 -214 c2 -182 5 -215 19 -226z", 1, "icon"], [3, "title", "close", 4, "ngIf"], [1, "bolim-inner", 3, "click"], [1, "bolim1"], [1, "bolim2"], [3, "title", "close"], ["id", "queue_print", 2, "display", "flex", "font-size", "14px", "justify-content", "center", "flex-direction", "column", "align-items", "center", "color", "black"], [2, "color", "black", "font-size", "35px", "font-weight", "900", "padding", "8px 0"], [2, "color", "black"], ["style", "color: black", 4, "ngIf"]], template: function QueueMenuUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QueueMenuUserComponent_div_2_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sizning raqamingiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "O\u2018zlashtirish natijalari(baho) to\u2018g\u2018risida ma'lumot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Operator chaqirishini kuting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueMenuUserComponent_Template__svg_svg_click_15_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, QueueMenuUserComponent_app_custom_dialog_18_Template, 11, 6, "app-custom-dialog", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectSymbol());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.queue_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sizdan oldin ", ctx.queue_differ, " ta navbat bor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDialogVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CustomDialogComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Quicksand\", sans-serif;\n  color: #fff;\n}\n\n.bolim[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background-image: url('bg.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.bolim-group[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 45%);\n  gap: 15px;\n  font-size: 20px;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.bolim-inner[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  border-radius: 3px;\n  background-color: #5757c5;\n  color: #fff;\n  \n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n.bolim-inner[_ngcontent-%COMP%]:hover {\n  transform: translateY(4%);\n}\n\n.bolim-inner[_ngcontent-%COMP%]:hover   .bolim2[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #2626f3;\n}\n\n.bolim1[_ngcontent-%COMP%] {\n  border-right: 1px solid #383636;\n  left: 0px;\n  bottom: 0;\n  width: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #29df29;\n  padding: 10px;\n  font-weight: bold;\n  margin: 0;\n  font-size: 25px;\n}\n\n.bolim2[_ngcontent-%COMP%] {\n  transition: all 0.4s ease;\n  width: 90%;\n  display: flex;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n}\n\n.back_button[_ngcontent-%COMP%] {\n  -o-object-fit: content;\n     object-fit: content;\n  position: absolute;\n  bottom: -20px;\n  left: -60px;\n  cursor: pointer;\n}\n\n.back_button[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  fill: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxxdWV1ZS1tZW51LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtBQUtKOztBQUhBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0csV0FBQTtBQVVIIiwiZmlsZSI6InF1ZXVlLW1lbnUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5ib2xpbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcXVldWUvYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ib2xpbS1ncm91cHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0NSUpO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvbGltLWlubmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgODcsIDE5Nyk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCA2cHggNDhweCByZ2IoMCAwIDAgLyAxMCUpOyAqL1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ib2xpbS1pbm5lcjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0JSk7XHJcbn1cclxuLmJvbGltLWlubmVyOmhvdmVyIC5ib2xpbTJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZ2IoMzgsIDM4LCAyNDMpO1xyXG59XHJcbi5ib2xpbTF7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoNTYsIDU0LCA1NCk7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoNDEsIDIyMywgNDEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59ICAgXHJcbi5ib2xpbTJ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5iYWNrX2J1dHRvbntcclxuICAgIG9iamVjdC1maXQ6IGNvbnRlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0yMHB4O1xyXG4gICAgbGVmdDogLTYwcHg7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iYWNrX2J1dHRvbjpob3ZlciAuaWNvbiB7XHJcbiAgIGZpbGw6IGJsYWNrOyBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QueueMenuUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-queue-menu-user',
                templateUrl: './queue-menu-user.component.html',
                styleUrls: ['./queue-menu-user.component.scss'],
            }]
    }], function () { return [{ type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ngx_print_element__WEBPACK_IMPORTED_MODULE_6__["NgxPrintElementService"] }]; }, null); })();


/***/ }),

/***/ "mwBw":
/*!******************************************************************************!*\
  !*** ./src/app/components/queue-menu-user/queue-menu-user-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: QueueMenuUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueMenuUserRoutingModule", function() { return QueueMenuUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _queue_menu_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queue-menu-user.component */ "VUMv");





const routes = [
    {
        path: '',
        component: _queue_menu_user_component__WEBPACK_IMPORTED_MODULE_2__["QueueMenuUserComponent"],
    },
];
class QueueMenuUserRoutingModule {
}
QueueMenuUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QueueMenuUserRoutingModule });
QueueMenuUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QueueMenuUserRoutingModule_Factory(t) { return new (t || QueueMenuUserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QueueMenuUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueMenuUserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-queue-menu-user-queue-menu-user-module-es2015.js.map