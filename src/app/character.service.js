"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CharacterService = (function () {
    function CharacterService() {
    }
    CharacterService.prototype.getCharacters = function (callback) {
        var url = 'http://localhost:5000/api/characters.json';
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function () {
            if (request.status !== 200)
                return;
            var returnedData = JSON.parse(request.responseText);
            callback(returnedData);
        };
        request.send();
    };
    ;
    return CharacterService;
}());
CharacterService = __decorate([
    core_1.Injectable()
], CharacterService);
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map