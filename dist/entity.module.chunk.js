webpackJsonp(["entity.module"],{

/***/ "../../../../../src/app/entity/entity-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_component__ = __webpack_require__("../../../../../src/app/entity/entity.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__entity_component__["a" /* EntityComponent */] }
];
var EntityRoutingModule = (function () {
    function EntityRoutingModule() {
    }
    EntityRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EntityRoutingModule);
    return EntityRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/entity/entity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"orders view\">\n  <div class=\"container\">\n    <header>\n      <h3><span class=\"glyphicon glyphicon-info-sign\"></span>&nbsp;&nbsp;Entity Information</h3>\n    </header>\n    <form *ngIf=\"entity\" [formGroup]=\"entityForm\">\n      <div class=\"app-content-left\">\n        <div class=\"app-input-row-huge\">\n          <label>Name:</label>\n          <input formControlName=\"name\">\n        </div>\n        <div class=\"app-input-row\">\n          <label>ID:</label>\n          <input formControlName=\"_id\">\n        </div>\n        <div class=\"app-input-row-half\">\n          <label>created:</label>\n          <span class=\"app-input-info disabled\">{{entityForm.value.crstamp*1000 | date : 'yyyy-MM-dd HH:mm:ss'}}</span>\n        </div>\n        <div class=\"app-input-row-half\">\n          <label>last updated:</label>\n          <span class=\"app-input-info disabled\">{{entityForm.value.tstamp*1000 | date : 'yyyy-MM-dd HH:mm:ss'}}</span>\n        </div>\n        <div class=\"app-input-row\">\n          <span class=\"glyphicon glyphicon-plus app-input-action\">new plugin</span>\n          <label>plugins:</label>\n          <ul *ngIf=\"entityForm.value.plugins.length\" class=\"app-input-info\">\n              <li *ngFor=\"let plugin of entityForm.value.plugins\">\n                  <span class=\"glyphicon glyphicon-edit app-input-action\">edit</span>\n                  <b>{{plugin.pluginId}}</b>\n                  {{plugin.description}}\n              </li>\n          </ul>\n          <span *ngIf=\"!entityForm.value.plugins.length\"\n                class=\"app-input-info disabled\">no plugins</span>\n        </div>\n        <div class=\"app-input-row\">\n          <label>schema:</label>\n          <span class=\"app-input-info\">{{entityForm.value.schema}}</span>\n        </div>\n      </div>\n    </form>\n    <div *ngIf=\"!entity\" class=\"container\">\n      No entity found\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/entity/entity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__ = __webpack_require__("../../../../../src/app/core/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntityComponent = (function () {
    function EntityComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.entityForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            _id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            crstamp: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            tstamp: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            plugins: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            schema: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]()
        });
    }
    EntityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            var id = params['id'];
            _this.dataService.getEntity(id)
                .subscribe(function (entity) {
                _this.entity = entity;
                _this.entityForm.patchValue(entity);
            });
        });
    };
    EntityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cm-entity',
            template: __webpack_require__("../../../../../src/app/entity/entity.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__["a" /* DataService */]])
    ], EntityComponent);
    return EntityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entity/entity.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityModule", function() { return EntityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_routing_module__ = __webpack_require__("../../../../../src/app/entity/entity-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_component__ = __webpack_require__("../../../../../src/app/entity/entity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CommonModule } from '@angular/common';




var EntityModule = (function () {
    function EntityModule() {
    }
    EntityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__entity_routing_module__["a" /* EntityRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__entity_component__["a" /* EntityComponent */]]
        })
    ], EntityModule);
    return EntityModule;
}());



/***/ })

});
//# sourceMappingURL=entity.module.chunk.js.map