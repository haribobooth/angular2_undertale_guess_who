"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var character_service_1 = require("./character.service");
var GameBoard = (function () {
    function GameBoard(characterService) {
        this.characterService = characterService;
    }
    ;
    GameBoard.prototype.ngOnInit = function () {
        var _this = this;
        this.characterService.getCharacters(function (returnedData) {
            _this.characters = returnedData;
        });
    };
    return GameBoard;
}());
GameBoard = __decorate([
    core_1.Component({
        selector: 'game-board',
        templateUrl: './game-board.component.html',
        styleUrls: ['./game-board.component.css']
    }),
    __metadata("design:paramtypes", [character_service_1.CharacterService])
], GameBoard);
exports.GameBoard = GameBoard;
//# sourceMappingURL=game-board.component.js.map