"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var clients_lib_service_1 = require("./clients-lib.service");
describe('ClientsLibService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(clients_lib_service_1.ClientsLibService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=clients-lib.service.spec.js.map