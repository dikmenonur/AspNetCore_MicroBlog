(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/index.js!./AngularApp/src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ../node_modules/raw-loader!./AngularApp/src/app/app.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <a [routerLink]=\"['/']\" class=\"btn btn-info\">Start</a>\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./AngularApp/src/app/blog-post-add-edit/blog-post-add-edit.component.html":
/*!************************************************************************************************************!*\
  !*** ../node_modules/raw-loader!./AngularApp/src/app/blog-post-add-edit/blog-post-add-edit.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{actionType}} blog post</h1>\r\n<form [formGroup]=\"form\" (ngSubmit)=\"save()\" #formDir=\"ngForm\" novalidate>\r\n  <div class=\"form-group row\">\r\n    <label class=\" control-label col-md-12\">Title</label>\r\n    <div class=\"col-md-12\">\r\n      <input class=\"form-control\" type=\"text\" formControlName=\"title\">\r\n    </div>\r\n    <span class=\"text-danger ml-3\" *ngIf=\"title.invalid && formDir.submitted\">\r\n      Title is required.\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"control-label col-md-12\" for=\"Body\">Body text</label>\r\n    <div class=\"col-md-12\">\r\n      <textarea class=\"form-control\" rows=\"15\" formControlName=\"body\"></textarea>\r\n    </div>\r\n    <span class=\"text-danger ml-3\" *ngIf=\"body.invalid && formDir.submitted\">\r\n      Body is required.\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-success float-right\">Save</button>\r\n    <button class=\"btn btn-secondary float-left\" (click)=\"cancel()\">Cancel</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./AngularApp/src/app/blog-post/blog-post.component.html":
/*!******************************************************************************************!*\
  !*** ../node_modules/raw-loader!./AngularApp/src/app/blog-post/blog-post.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"(blogPost$ | async) as blogPost; else loading\">\r\n\r\n  <h1>{{ blogPost.title }}</h1>\r\n  <div>{{ blogPost.body }}</div>\r\n  <ul>\r\n    <li>{{ blogPost.creator }}</li>\r\n    <li>{{ blogPost.dt | date: \"dd.MM.y\" }}</li>\r\n  </ul>\r\n\r\n</ng-container>\r\n<ng-template #loading>Loading…</ng-template>\r\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./AngularApp/src/app/blog-posts/blog-posts.component.html":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader!./AngularApp/src/app/blog-posts/blog-posts.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Blog posts</h1>\r\n\r\n<p *ngIf=\"!(blogPosts$ | async)\"><em>Loading...</em></p>\r\n<p>\r\n  <a [routerLink]=\"['/add']\" class=\"btn btn-primary float-right mb-3\">New post</a>\r\n</p>\r\n\r\n<table class=\"table table-sm table-hover\" *ngIf=\"(blogPosts$ | async)?.length>0\">\r\n  <thead>\r\n    <tr>\r\n      <th>#</th>\r\n      <th>Title</th>\r\n      <th>Creator</th>\r\n      <th>Date</th>\r\n      <th></th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let blogPost of (blogPosts$ | async)\">\r\n      <td>{{ blogPost.postId }}</td>\r\n      <td><a [routerLink]=\"['/blogpost/', blogPost.postId]\">{{ blogPost.title }}</a></td>\r\n      <td>{{ blogPost.creator }}</td>\r\n      <td>{{ blogPost.dt | date: \"dd.MM.y\" }}</td>\r\n      <td><a [routerLink]=\"['/blogpost/edit/', blogPost.postId]\" class=\"btn btn-primary btn-sm float-right\">Edit</a>\r\n      </td>\r\n      <td><a [routerLink]=\"\" (click)=\"delete(blogPost.postId)\" class=\"btn btn-danger btn-sm float-right\">Delete</a></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./AngularApp/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./AngularApp/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
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
webpackEmptyAsyncContext.id = "./AngularApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./AngularApp/src/app/app-routing.module.ts":
/*!**************************************************!*\
  !*** ./AngularApp/src/app/app-routing.module.ts ***!
  \**************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_posts_blog_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-posts/blog-posts.component */ "./AngularApp/src/app/blog-posts/blog-posts.component.ts");
/* harmony import */ var _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-post/blog-post.component */ "./AngularApp/src/app/blog-post/blog-post.component.ts");
/* harmony import */ var _blog_post_add_edit_blog_post_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-post-add-edit/blog-post-add-edit.component */ "./AngularApp/src/app/blog-post-add-edit/blog-post-add-edit.component.ts");






var routes = [
    { path: '', component: _blog_posts_blog_posts_component__WEBPACK_IMPORTED_MODULE_3__["BlogPostsComponent"], pathMatch: 'full' },
    { path: 'blogpost/:id', component: _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_4__["BlogPostComponent"] },
    { path: 'add', component: _blog_post_add_edit_blog_post_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["BlogPostAddEditComponent"] },
    { path: 'blogpost/edit/:id', component: _blog_post_add_edit_blog_post_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["BlogPostAddEditComponent"] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./AngularApp/src/app/app.component.scss":
/*!***********************************************!*\
  !*** ./AngularApp/src/app/app.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBbmd1bGFyQXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./AngularApp/src/app/app.component.ts":
/*!*********************************************!*\
  !*** ./AngularApp/src/app/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ClientApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!./AngularApp/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./AngularApp/src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./AngularApp/src/app/app.module.ts":
/*!******************************************!*\
  !*** ./AngularApp/src/app/app.module.ts ***!
  \******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./AngularApp/src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./AngularApp/src/app/app.component.ts");
/* harmony import */ var _blog_posts_blog_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-posts/blog-posts.component */ "./AngularApp/src/app/blog-posts/blog-posts.component.ts");
/* harmony import */ var _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-post/blog-post.component */ "./AngularApp/src/app/blog-post/blog-post.component.ts");
/* harmony import */ var _blog_post_add_edit_blog_post_add_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog-post-add-edit/blog-post-add-edit.component */ "./AngularApp/src/app/blog-post-add-edit/blog-post-add-edit.component.ts");
/* harmony import */ var _services_blog_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/blog-post.service */ "./AngularApp/src/app/services/blog-post.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _blog_posts_blog_posts_component__WEBPACK_IMPORTED_MODULE_7__["BlogPostsComponent"],
                _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_8__["BlogPostComponent"],
                _blog_post_add_edit_blog_post_add_edit_component__WEBPACK_IMPORTED_MODULE_9__["BlogPostAddEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [
                _services_blog_post_service__WEBPACK_IMPORTED_MODULE_10__["BlogPostService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./AngularApp/src/app/blog-post-add-edit/blog-post-add-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./AngularApp/src/app/blog-post-add-edit/blog-post-add-edit.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBbmd1bGFyQXBwL3NyYy9hcHAvYmxvZy1wb3N0LWFkZC1lZGl0L2Jsb2ctcG9zdC1hZGQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./AngularApp/src/app/blog-post-add-edit/blog-post-add-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./AngularApp/src/app/blog-post-add-edit/blog-post-add-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BlogPostAddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostAddEditComponent", function() { return BlogPostAddEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blog_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/blog-post.service */ "./AngularApp/src/app/services/blog-post.service.ts");





var BlogPostAddEditComponent = /** @class */ (function () {
    function BlogPostAddEditComponent(blogPostService, formBuilder, avRoute, router) {
        this.blogPostService = blogPostService;
        this.formBuilder = formBuilder;
        this.avRoute = avRoute;
        this.router = router;
        var idParam = 'id';
        this.actionType = 'Add';
        this.formTitle = 'title';
        this.formBody = 'body';
        if (this.avRoute.snapshot.params[idParam]) {
            this.postId = this.avRoute.snapshot.params[idParam];
        }
        this.form = this.formBuilder.group({
            postId: 0,
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    BlogPostAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.postId > 0) {
            this.actionType = 'Edit';
            this.blogPostService.getBlogPost(this.postId)
                .subscribe(function (data) { return (_this.existingBlogPost = data,
                _this.form.controls[_this.formTitle].setValue(data.title),
                _this.form.controls[_this.formBody].setValue(data.body)); });
        }
    };
    BlogPostAddEditComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        if (this.actionType === 'Add') {
            var blogPost = {
                dt: new Date(),
                creator: 'Martin',
                title: this.form.get(this.formTitle).value,
                body: this.form.get(this.formBody).value
            };
            this.blogPostService.saveBlogPost(blogPost)
                .subscribe(function (data) {
                _this.router.navigate(['/blogpost', data.postId]);
            });
        }
        if (this.actionType === 'Edit') {
            var blogPost = {
                postId: this.existingBlogPost.postId,
                dt: this.existingBlogPost.dt,
                creator: this.existingBlogPost.creator,
                title: this.form.get(this.formTitle).value,
                body: this.form.get(this.formBody).value
            };
            this.blogPostService.updateBlogPost(blogPost.postId, blogPost)
                .subscribe(function (data) {
                _this.router.navigate([_this.router.url]);
            });
        }
    };
    BlogPostAddEditComponent.prototype.cancel = function () {
        this.router.navigate(['/']);
    };
    Object.defineProperty(BlogPostAddEditComponent.prototype, "title", {
        get: function () { return this.form.get(this.formTitle); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogPostAddEditComponent.prototype, "body", {
        get: function () { return this.form.get(this.formBody); },
        enumerable: true,
        configurable: true
    });
    BlogPostAddEditComponent.ctorParameters = function () { return [
        { type: _services_blog_post_service__WEBPACK_IMPORTED_MODULE_4__["BlogPostService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    BlogPostAddEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-post-add-edit',
            template: __webpack_require__(/*! raw-loader!./blog-post-add-edit.component.html */ "../node_modules/raw-loader/index.js!./AngularApp/src/app/blog-post-add-edit/blog-post-add-edit.component.html"),
            styles: [__webpack_require__(/*! ./blog-post-add-edit.component.scss */ "./AngularApp/src/app/blog-post-add-edit/blog-post-add-edit.component.scss")]
        })
    ], BlogPostAddEditComponent);
    return BlogPostAddEditComponent;
}());



/***/ }),

/***/ "./AngularApp/src/app/blog-post/blog-post.component.scss":
/*!***************************************************************!*\
  !*** ./AngularApp/src/app/blog-post/blog-post.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBbmd1bGFyQXBwL3NyYy9hcHAvYmxvZy1wb3N0L2Jsb2ctcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./AngularApp/src/app/blog-post/blog-post.component.ts":
/*!*************************************************************!*\
  !*** ./AngularApp/src/app/blog-post/blog-post.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostComponent", function() { return BlogPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blog_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/blog-post.service */ "./AngularApp/src/app/services/blog-post.service.ts");




var BlogPostComponent = /** @class */ (function () {
    function BlogPostComponent(blogPostService, avRoute) {
        this.blogPostService = blogPostService;
        this.avRoute = avRoute;
        var idParam = 'id';
        if (this.avRoute.snapshot.params[idParam]) {
            this.postId = this.avRoute.snapshot.params[idParam];
        }
    }
    BlogPostComponent.prototype.ngOnInit = function () {
        this.loadBlogPost();
    };
    BlogPostComponent.prototype.loadBlogPost = function () {
        this.blogPost$ = this.blogPostService.getBlogPost(this.postId);
    };
    BlogPostComponent.ctorParameters = function () { return [
        { type: _services_blog_post_service__WEBPACK_IMPORTED_MODULE_3__["BlogPostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    BlogPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-post',
            template: __webpack_require__(/*! raw-loader!./blog-post.component.html */ "../node_modules/raw-loader/index.js!./AngularApp/src/app/blog-post/blog-post.component.html"),
            styles: [__webpack_require__(/*! ./blog-post.component.scss */ "./AngularApp/src/app/blog-post/blog-post.component.scss")]
        })
    ], BlogPostComponent);
    return BlogPostComponent;
}());



/***/ }),

/***/ "./AngularApp/src/app/blog-posts/blog-posts.component.scss":
/*!*****************************************************************!*\
  !*** ./AngularApp/src/app/blog-posts/blog-posts.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBbmd1bGFyQXBwL3NyYy9hcHAvYmxvZy1wb3N0cy9ibG9nLXBvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./AngularApp/src/app/blog-posts/blog-posts.component.ts":
/*!***************************************************************!*\
  !*** ./AngularApp/src/app/blog-posts/blog-posts.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostsComponent", function() { return BlogPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blog-post.service */ "./AngularApp/src/app/services/blog-post.service.ts");



var BlogPostsComponent = /** @class */ (function () {
    function BlogPostsComponent(blogPostService) {
        this.blogPostService = blogPostService;
    }
    BlogPostsComponent.prototype.ngOnInit = function () {
        this.loadBlogPosts();
    };
    BlogPostsComponent.prototype.loadBlogPosts = function () {
        this.blogPosts$ = this.blogPostService.getBlogPosts();
    };
    BlogPostsComponent.prototype.delete = function (postId) {
        var _this = this;
        var ans = confirm('Do you want to delete blog post with id: ' + postId);
        if (ans) {
            this.blogPostService.deleteBlogPost(postId).subscribe(function (data) {
                _this.loadBlogPosts();
            });
        }
    };
    BlogPostsComponent.ctorParameters = function () { return [
        { type: _services_blog_post_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostService"] }
    ]; };
    BlogPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-posts',
            template: __webpack_require__(/*! raw-loader!./blog-posts.component.html */ "../node_modules/raw-loader/index.js!./AngularApp/src/app/blog-posts/blog-posts.component.html"),
            styles: [__webpack_require__(/*! ./blog-posts.component.scss */ "./AngularApp/src/app/blog-posts/blog-posts.component.scss")]
        })
    ], BlogPostsComponent);
    return BlogPostsComponent;
}());



/***/ }),

/***/ "./AngularApp/src/app/services/blog-post.service.ts":
/*!**********************************************************!*\
  !*** ./AngularApp/src/app/services/blog-post.service.ts ***!
  \**********************************************************/
/*! exports provided: BlogPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostService", function() { return BlogPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./AngularApp/src/environments/environment.ts");






var BlogPostService = /** @class */ (function () {
    function BlogPostService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        this.myAppUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appUrl;
        this.myApiUrl = 'api/BlogPosts/';
    }
    BlogPostService.prototype.getBlogPosts = function () {
        return this.http.get(this.myAppUrl + this.myApiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BlogPostService.prototype.getBlogPost = function (postId) {
        return this.http.get(this.myAppUrl + this.myApiUrl + postId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BlogPostService.prototype.saveBlogPost = function (blogPost) {
        return this.http.post(this.myAppUrl + this.myApiUrl, JSON.stringify(blogPost), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BlogPostService.prototype.updateBlogPost = function (postId, blogPost) {
        return this.http.put(this.myAppUrl + this.myApiUrl + postId, JSON.stringify(blogPost), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BlogPostService.prototype.deleteBlogPost = function (postId) {
        return this.http.delete(this.myAppUrl + this.myApiUrl + postId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BlogPostService.prototype.errorHandler = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    BlogPostService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BlogPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BlogPostService);
    return BlogPostService;
}());



/***/ }),

/***/ "./AngularApp/src/environments/environment.ts":
/*!****************************************************!*\
  !*** ./AngularApp/src/environments/environment.ts ***!
  \****************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    appUrl: 'https://localhost:44382/'
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

/***/ "./AngularApp/src/main.ts":
/*!********************************!*\
  !*** ./AngularApp/src/main.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./AngularApp/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./AngularApp/src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./AngularApp/src/main.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Git\AspNetCore_MicroBlog\MicroBlog\AngularApp\src\main.ts */"./AngularApp/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map