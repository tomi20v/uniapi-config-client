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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EntityRoutingModule);
    return EntityRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/entity/entity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"orders view\">\n  <div class=\"container\">\n    <div *ngIf=\"entity\" class=\"app-content-left\">\n      <header>\n        <h3>\n          <span *ngIf=\"hasChanges()\" class=\"app-unsaved\">has changes</span>\n          <span class=\"glyphicon glyphicon-info-sign\"></span>\n          &nbsp;&nbsp;Entity editor\n        </h3>\n      </header>\n      <form [formGroup]=\"entityForm\" class=\"app-column\">\n        <div class=\"app-input-row-huge\">\n          <label>Name</label>\n          <input formControlName=\"name\">\n        </div>\n        <div class=\"app-input-row\">\n          <label>ID</label>\n          <input formControlName=\"_id\">\n        </div>\n        <div class=\"app-input-row-half\">\n          <label>created</label>\n          <span class=\"app-input-info disabled\">{{entityForm.value.crstamp*1000 | date : 'yyyy-MM-dd HH:mm:ss'}}</span>\n        </div>\n        <div class=\"app-input-row-half\">\n          <label>last updated</label>\n          <span class=\"app-input-info disabled\">{{entityForm.value.tstamp*1000 | date : 'yyyy-MM-dd HH:mm:ss'}}</span>\n        </div>\n        <div class=\"app-input-row\">\n          <span *ngIf=\"pluginEditing.index !== null && pluginEditing.pluginId !== null\"\n                (click)=\"onAddPlugin()\" class=\"app-input-action\">\n            new plugin\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </span>\n          <span *ngIf=\"pluginEditing.index === null && pluginEditing.pluginId === null\"\n                class=\"app-input-action\">\n            select new plugin ID\n            <span class=\"glyphicon glyphicon-arrow-right\"></span>\n          </span>\n          <span *ngIf=\"pluginEditing.index === null && pluginEditing.pluginId !== null\"\n                class=\"app-input-action\">\n            edit new plugin\n            <span class=\"glyphicon glyphicon-arrow-right\"></span>\n          </span>\n          <label>plugins</label>\n          <ul *ngIf=\"entityForm.value.plugins.length\" class=\"app-input-info\">\n              <li *ngFor=\"let plugin of entityForm.value.plugins; let index = index\">\n                  <span *ngIf=\"index !== pluginEditing.index\"\n                        (click)=\"editPlugin(index, plugin)\"\n                        class=\"app-input-action\">\n                    edit\n                    <span class=\"glyphicon glyphicon-edit\"></span>\n                  </span>\n                  <span *ngIf=\"index === pluginEditing.index\" class=\"app-input-action\">\n                    <span>currently editing</span>\n                    <span class=\"glyphicon glyphicon-arrow-right\"></span>\n                  </span>\n                  <b>{{plugin.pluginId}}</b>\n                  {{plugin.description}}\n              </li>\n          </ul>\n          <span *ngIf=\"!entityForm.value.plugins.length\"\n                class=\"app-input-info disabled\">no plugins</span>\n        </div>\n        <div class=\"app-input-row\">\n          <label>schema</label>\n          <select formControlName=\"schema\">\n              <option *ngFor=\"let schema of schemas\" value=\"{{schema.$id}}\">{{schema.$id}}</option>\n          </select>\n        </div>\n        <div>\n          <input type=\"submit\"\n                 (click)=\"onSubmit()\"\n                 value=\"save entity\"\n                 class=\"app-submit\"\n                 [disabled]=\"!hasChanges()\"/>\n        </div>\n      </form>\n      <div class=\"app-column\">\n        <plugin-chooser *ngIf=\"!pluginEditing.pluginId\"\n          (onAdd)=\"onPluginSelected($event)\"></plugin-chooser>\n        <plugin-editor [pluginId]=\"pluginEditing.pluginId\"\n          [pluginConfig]=\"pluginEditing.pluginConfig\"\n          [pluginIndex]=\"pluginEditing.index\"\n          (onSubmit)=\"onPluginUpdated(pluginEditing.index, $event)\"\n          (onRemove)=\"onPluginRemoved($event)\"\n        ></plugin-editor>\n      </div>\n    </div>\n    <div *ngIf=\"!entity\" class=\"app-content-left\">\n      No entity found\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/entity/entity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__ = __webpack_require__("../../../../../src/app/core/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_growler_growler_service__ = __webpack_require__("../../../../../src/app/core/growler/growler.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function EntityComponent(route, dataService, growler) {
        this.route = route;
        this.dataService = dataService;
        this.growler = growler;
        this.entityForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormGroup */]({
            _id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](),
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](),
            crstamp: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](),
            tstamp: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](),
            plugins: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](),
            schema: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]()
        });
        this.schemas = [];
        this.pluginEditing = {
            index: null,
            pluginId: null,
            pluginConfig: null
        };
    }
    EntityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            var id = params['id'];
            _this.dataService.getEntity(id)
                .subscribe(function (entity) {
                _this.entity = entity;
                _this.entityForm.patchValue(entity);
                // this.editingMode = true;
                _this.entityForm.controls._id.disable();
            });
        });
        this.dataService.getSchemas()
            .subscribe(function (schemas) {
            _this.schemas = schemas;
        });
    };
    EntityComponent.prototype.editPlugin = function (index, pluginConfig) {
        this.pluginEditing = __assign({}, this.pluginEditing, { index: index, pluginId: pluginConfig.pluginId, pluginConfig: pluginConfig });
    };
    EntityComponent.prototype.onAddPlugin = function () {
        this.initPluginEditing();
    };
    EntityComponent.prototype.onPluginSelected = function (pluginId) {
        this.pluginEditing = {
            index: null,
            pluginId: pluginId,
            pluginConfig: {}
        };
    };
    EntityComponent.prototype.onPluginUpdated = function (index, newPluginData) {
        var currentPlugins = this.entityForm.value.plugins;
        if (index === null) {
            currentPlugins.push(newPluginData);
        }
        else {
            currentPlugins[index] = newPluginData;
        }
        this.entityForm.patchValue({ plugins: currentPlugins });
        this.entityForm.markAsDirty();
        this.pluginEditing.index = null;
        this.pluginEditing.pluginId = null;
    };
    EntityComponent.prototype.onPluginRemoved = function (index) {
        if (index !== null) {
            var currentPlugins = this.entityForm.value.plugins;
            currentPlugins.splice(index, 1);
            this.entityForm.patchValue({ plugins: currentPlugins });
            this.entityForm.markAsDirty();
        }
        this.initPluginEditing();
    };
    EntityComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.entity._id === null) {
            if (0)
                this.dataService.insertEntity(this.entityForm.value, null, this.entityForm)
                    .subscribe(function (insertedEntity) {
                    if (insertedEntity) {
                        _this.entity = insertedEntity;
                        // this.entityForm.patchValue(insertedEntity);
                        _this.initPluginEditing();
                    }
                    else {
                        _this.growler.growl('Error inserting', GrowlerMessageType.Danger);
                    }
                }, function (err) { return console.log(err); });
        }
        else {
            this.dataService.updateEntity(this.entity._id, this.entityForm.value, null, this.entityForm)
                .subscribe(function (response) {
                if (response.ok) {
                    _this.entity = _this.entityForm.value;
                    _this.initPluginEditing();
                }
            }, function (response) { return console.log('erro response:', response); });
        }
    };
    EntityComponent.prototype.hasChanges = function () {
        // @todo should rather compare loaded and current value
        return this.entityForm.dirty;
    };
    EntityComponent.prototype.initPluginEditing = function () {
        this.pluginEditing = {
            index: null,
            pluginId: null,
            pluginConfig: null
        };
    };
    EntityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cm-entity',
            template: __webpack_require__("../../../../../src/app/entity/entity.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__core_growler_growler_service__["b" /* GrowlerService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_json_schema_form__ = __webpack_require__("../../../../angular2-json-schema-form/angular2-json-schema-form.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_routing_module__ = __webpack_require__("../../../../../src/app/entity/entity-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entity_component__ = __webpack_require__("../../../../../src/app/entity/entity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plugin_editor_plugin_editor_component__ = __webpack_require__("../../../../../src/app/entity/plugin-editor/plugin-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plugin_chooser_plugin_chooser_component__ = __webpack_require__("../../../../../src/app/entity/plugin-chooser/plugin-chooser.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__entity_routing_module__["a" /* EntityRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular2_json_schema_form__["a" /* JsonSchemaFormModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__entity_component__["a" /* EntityComponent */], __WEBPACK_IMPORTED_MODULE_6__plugin_editor_plugin_editor_component__["a" /* PluginEditorComponent */], __WEBPACK_IMPORTED_MODULE_7__plugin_chooser_plugin_chooser_component__["a" /* PluginChooserComponent */]]
        })
    ], EntityModule);
    return EntityModule;
}());



/***/ }),

/***/ "../../../../../src/app/entity/plugin-chooser/plugin-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entity/plugin-chooser/plugin-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-topline\">\n  <span>choose plugin to add</span>\n  <ul>\n    <li *ngFor=\"let plugin of plugins\"\n      (click)=\"clicked(plugin.$id)\">\n      <b>{{plugin.$id}}</b>\n      {{plugin.description}} &raquo;\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/entity/plugin-chooser/plugin-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__ = __webpack_require__("../../../../../src/app/core/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PluginChooserComponent = (function () {
    function PluginChooserComponent(dataService) {
        this.dataService = dataService;
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.plugins = [];
    }
    PluginChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPlugins()
            .subscribe(function (plugins) {
            _this.plugins = plugins;
        });
    };
    PluginChooserComponent.prototype.clicked = function (pluginId) {
        this.onAdd.emit(pluginId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PluginChooserComponent.prototype, "onAdd", void 0);
    PluginChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'plugin-chooser',
            template: __webpack_require__("../../../../../src/app/entity/plugin-chooser/plugin-chooser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/entity/plugin-chooser/plugin-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_data_service__["a" /* DataService */]])
    ], PluginChooserComponent);
    return PluginChooserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entity/plugin-editor/plugin-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\n    font-size: 80%;\n    font-weight: 800;\n}\ntextarea {\n    width: 100%;\n    height: 200px;\n}\nlabel.app-toplevel {\n    font-size: 125%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entity/plugin-editor/plugin-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pluginId\">\n  <span *ngIf=\"pluginIndex !== null\" class=\"app-topline\">\n    <div (click)=\"onRemoveFn()\" class=\"app-input-action\">\n      remove plugin\n      <i class=\"glyphicon glyphicon-remove\"></i>\n    </div>\n    <span>editing</span>\n  </span>\n  <span *ngIf=\"pluginIndex === null\" class=\"app-topline\">\n    <div (click)=\"onRemoveFn()\" class=\"app-input-action\">\n      cancel\n      <i class=\"glyphicon glyphicon-remove\"></i>\n    </div>\n    <span>adding new</span>\n  </span>\n  <div *ngIf=\"pluginSchema\" [class.app-form-invalid]=\"!isValid\">\n    <json-schema-form\n      *ngIf=\"pluginSchema\"\n      framework=\"no-framework\"\n      loadExternalAssets=\"true\"\n      [schema]=\"pluginSchema\"\n      [(data)]=\"pluginConfig\"\n      (isValid)=\"isValidFn($event)\"\n      (onSubmit)=\"onSubmitFn()\"\n      ></json-schema-form>\n  </div>\n  <div *ngIf=\"!pluginSchema\">loading schema...</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/entity/plugin-editor/plugin-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__ = __webpack_require__("../../../../../src/app/core/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PluginEditorComponent = (function () {
    function PluginEditorComponent(dataService) {
        this.dataService = dataService;
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isValid = false;
        this.pluginSchema = null;
    }
    PluginEditorComponent.prototype.ngOnInit = function () {
    };
    PluginEditorComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // happens on startup or on clearing, there's nothing to load
        if (!this.pluginId) { }
        else if (!changes.pluginId && this.pluginId && this.pluginSchema) { }
        else {
            this.pluginSchema = null;
            this.dataService.getPlugin(this.pluginId)
                .subscribe(function (plugin) {
                _this.pluginSchema = plugin;
            });
        }
    };
    PluginEditorComponent.prototype.isValidFn = function (isValid) {
        this.isValid = isValid;
    };
    PluginEditorComponent.prototype.onSubmitFn = function () {
        if (this.isValid) {
            this.onSubmit.emit(this.pluginConfig);
        }
    };
    PluginEditorComponent.prototype.onRemoveFn = function () {
        this.onRemove.emit(this.pluginIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PluginEditorComponent.prototype, "pluginId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PluginEditorComponent.prototype, "pluginConfig", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PluginEditorComponent.prototype, "pluginIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PluginEditorComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PluginEditorComponent.prototype, "onRemove", void 0);
    PluginEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'plugin-editor',
            template: __webpack_require__("../../../../../src/app/entity/plugin-editor/plugin-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/entity/plugin-editor/plugin-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_data_service__["a" /* DataService */]])
    ], PluginEditorComponent);
    return PluginEditorComponent;
}());



/***/ })

});
//# sourceMappingURL=entity.module.chunk.js.map