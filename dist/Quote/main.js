(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\"> \n  <app-quote></app-quote>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.quotes = [];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _time_since_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time-since.pipe */ "./src/app/time-since.pipe.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"],
                _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailsComponent"],
                _time_since_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeSincePipe"],
                _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_8__["QuoteFormComponent"],
                _time_since_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeSincePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h4>Date Posted: {{quote.time|time}}</h4>\n<blockquote >\n  <p>{{quote.entry}}</p>\n  <footer>Author:\n    <cite >{{quote.title}}</cite>\n    <cite>{{quote.entry}}</cite>\n  </footer>\n</blockquote>\n\n<i class=\" far fa-thumbs-up\" (click)=\"increaseRating(true)\">{{quote.like}}</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<i class=\"far fa-thumbs-down\" (click)=\"increaseRating(false)\">{{quote.dislike}}</i>\n\n\n  <br>\n  <button class=\"btn btn-danger\" (click)= \"deleteQuote(true)\">Delete Quote</button>"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
        this.isDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isRating = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuoteDetailsComponent.prototype.increaseRating = function (rating) {
        this.isRating.emit(rating);
    };
    QuoteDetailsComponent.prototype.deleteQuote = function (complete) {
        this.isDelete.emit(complete);
    };
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"])
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteDetailsComponent.prototype, "isDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteDetailsComponent.prototype, "isRating", void 0);
    QuoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-details',
            template: __webpack_require__(/*! ./quote-details.component.html */ "./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWZvcm0vcXVvdGUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div container= \"container-fluid text-center\">\n  \n    <div class=\"panel panel-info\">\n    <form (ngSubmit)='addNewQuote(title.value,author.value,entry.value)' #quoteForm='ngForm'>\n      <div class=\"form-group\">\n\n        <label for=\"name\">Title</label>\n        <input  type=\"text\" class=\"form-control form-control-lg text-center\" id=\"title\" [(ngModel)]=\"newQuote.title\" name=\"title\" #title=\"ngModel\" required>\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n          <h4>Complete the field</h4>\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n\n        <label for=\"name\">Author</label>\n        <input  type=\"text\" class=\"form-control form-control-lg text-center\" id=\"author\" [(ngModel)]=\"newQuote.author\" name=\"author\" #author =\"ngModel\" required>\n        <div [hidden]=\"author.valid || author.pristine\" class=\"alert alert-danger\">\n          <h4>Input author's name!</h4>\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n\n        <label for=\"name\">Quote</label>\n        <textarea class=\"form-control\" id=\"entry\" rows=\"4\" [(ngModel)]=\"newQuote.entry\" name=\"entry\" #entry=\"ngModel\" required></textarea>\n        <div [hidden]=\"entry.valid || entry.pristine\" class=\"alert alert-danger\">\n          <h4>Input Quote!</h4>\n        </div>\n\n      </div>\n\n      <!-- <div class=\"form-group\">\n\n          <label for=\"name\">Submitter</label>\n          <input  type=\"text\" class=\"form-control form-control-lg text-center\" id=\"submitter\" [(ngModel)]=\"newQuote.submitter\" name=\"submitter\" #submitter =\"ngModel\" required>\n          <div [hidden]=\"submitter.valid || submitter.pristine\" class=\"alert alert-danger\">\n            <h4>Input your name!</h4>\n          </div>\n   -->\n        <!-- </div> -->\n\n      <button type=\"submit\" class=\"btn btn-primary btn-lg\">Add Quote</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](0, "", "", "", 0, 0, 0, false);
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuoteFormComponent.prototype.submitQuote = function () {
        this.addQuote.emit(this.newQuote);
    };
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteFormComponent.prototype, "addQuote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], QuoteFormComponent.prototype, "addNewQuote", void 0);
    QuoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! ./quote-form.component.html */ "./src/app/quote-form/quote-form.component.html"),
            styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/quote-form/quote-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(id, title, author, entry, like, dislike, time, highest) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.entry = entry;
        this.like = like;
        this.dislike = dislike;
        this.time = time;
        this.highest = highest;
        this.like = 0;
        this.dislike = 0;
        this.time = 0;
        this.highest = false;
    }
    return Quote;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"color:rgb(7, 4, 10);\">ALL TIME GREAT QUOTES</h1>\n\n<div class=\"row\">\n  <div class=\"col md-6\" id=\"form\">\n      <app-quote-form [addNewQuote]='addNewQuoteFunc' ></app-quote-form>\n  </div>\n  <div class=\"col md-6\" id=\"quote\">\n    <h2 style=\"text-decoration:underline;\"><b>\"Quotes\"</b></h2>\n    <div class=\"\" *ngFor=\"let quote of quotes;let i = 'index'\">\n      <!-- <p>{{quote.title}}</p> -->\n      <p>{{quote.author}}</p>\n      <!-- <p>{{quote.Quote}}</p> -->\n      <!-- <p>{{quote.submitter}}</p> -->\n        <button class=\"btn btn-success\"  (click)='toggleDetails(i)'>Quote Details</button>\n      <div *ngIf=\"quote.showDescription\">\n          <app-quote-details [quote]='quote' (isRating)='increaseRating($event,i)' (isDelete)='deleteQuote($event,i)'></app-quote-details>\n      </div>\n    </div>\n  </div>\n</div>\n\n<h3 style=\"text-align:center; \">Great all time quotes.</h3>\n"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.id = 0;
        this.quotes = [];
    }
    QuoteComponent.prototype.toggleDetails = function (index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    };
    QuoteComponent.prototype.increaseRating = function (isRating, index) {
        if (isRating) {
            this.quotes[index].like += 1;
            this.getHighest();
        }
        else {
            this.quotes[index].dislike += 1;
        }
    };
    Object.defineProperty(QuoteComponent.prototype, "addNewQuoteFunc", {
        get: function () {
            return this.addNewQuote.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    QuoteComponent.prototype.deleteQuote = function (isDelete, index) {
        if (isDelete) {
            this.quotes.splice(index, 1);
        }
    };
    QuoteComponent.prototype.addNewQuote = function (id, title, author, entry, time) {
        var quote = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](id, title, author, entry, 0, 0, 0, false);
        this.id += 1;
        quote.id = this.id;
        this.duration = setInterval(function () {
            quote.time += 1;
        }, 1000);
        this.quotes.push(quote);
    };
    QuoteComponent.prototype.getHighest = function () {
        var highest = 0;
        var highestQuote;
        for (var _i = 0, _a = this.quotes; _i < _a.length; _i++) {
            var quote = _a[_i];
            if (quote.like > highest) {
                highest = quote.like;
                highestQuote = quote;
            }
        }
        console.log(highestQuote);
        this.getId(highestQuote);
    };
    QuoteComponent.prototype.getId = function (change) {
        for (var _i = 0, _a = this.quotes; _i < _a.length; _i++) {
            var quote = _a[_i];
            if (quote.id == change.id) {
                quote.highest = true;
            }
            else {
                quote.highest = false;
            }
        }
    };
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.duration);
    };
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/time-since.pipe.ts":
/*!************************************!*\
  !*** ./src/app/time-since.pipe.ts ***!
  \************************************/
/*! exports provided: TimeSincePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSincePipe", function() { return TimeSincePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimeSincePipe = /** @class */ (function () {
    function TimeSincePipe() {
    }
    TimeSincePipe.prototype.transform = function (value) {
        var days, hours, minutes;
        if (value <= 59) {
            return "a few seconds ago";
        }
        else if (value >= 60 && value <= 3599) {
            minutes = Math.round(value / 60);
            if (minutes == 1) {
                return minutes + " minute ago";
            }
            else {
                return minutes + " minutes ago";
            }
        }
        else {
            hours = Math.round(value / 3600);
            if (hours == 1) {
                return hours + " hour ago";
            }
            else {
                return hours + " hours ago";
            }
        }
    };
    TimeSincePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'time'
        })
    ], TimeSincePipe);
    return TimeSincePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rodney/Documents/Quote/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map