"use strict";
var Character = (function () {
    function Character(details) {
        this.name = details.name;
        this.species = details.species;
        this.town = details.town;
        this.hair = details.hair;
        this.tall = details.tall;
        this.url = details.url;
    }
    ;
    Character.prototype.question = function (key, value) {
        return (this[key] === value);
    };
    ;
    return Character;
}());
exports.Character = Character;
//# sourceMappingURL=Character.js.map