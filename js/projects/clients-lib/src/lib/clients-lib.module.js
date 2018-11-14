"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var clients_lib_component_1 = require("./clients-lib.component");
var ClientsLibModule = /** @class */ (function () {
    function ClientsLibModule() {
    }
    ClientsLibModule = __decorate([
        core_1.NgModule({
            declarations: [clients_lib_component_1.ClientsLibComponent],
            imports: [],
            exports: [clients_lib_component_1.ClientsLibComponent]
        })
    ], ClientsLibModule);
    return ClientsLibModule;
}());
exports.ClientsLibModule = ClientsLibModule;
//# sourceMappingURL=clients-lib.module.js.map