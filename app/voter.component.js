System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoterComp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComp = (function () {
                function VoterComp() {
                    this.vote = new core_1.EventEmitter();
                }
                VoterComp.prototype.upArrow = function () {
                    if (this.myVote == 0) {
                        this.voteCount++;
                        this.myVote = 1;
                        this.upColor = true;
                    }
                    if (this.myVote == -1) {
                        this.voteCount++;
                        this.myVote = 0;
                        this.downColor = false;
                    }
                };
                VoterComp.prototype.downArrow = function () {
                    if (this.myVote == 0) {
                        this.voteCount--;
                        this.myVote = -1;
                        this.downColor = true;
                    }
                    if (this.myVote == 1) {
                        this.voteCount--;
                        this.myVote = 0;
                        this.upColor = false;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComp.prototype, "upColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComp.prototype, "downColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComp.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComp.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoterComp.prototype, "vote", void 0);
                VoterComp = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n                <div style=\"width:20px\">\n                \n                <i class=\"glyphicon glyphicon-menu-up\"\n                 on-click=\"upArrow()\"\n                  [style.color]=\"upColor ? 'orange' : 'black'\"></i>\n                  \n                <span>{{voteCount}}</span>\n                \n                <i class=\"glyphicon glyphicon-menu-down\"\n                 on-click=\"downArrow()\"\n                 [style.color]=\"downColor ? 'orange' : 'black'\"></i>\n                </div>\n            ",
                        styles: ["i:hover{cursor:pointer}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComp);
                return VoterComp;
            }());
            exports_1("VoterComp", VoterComp);
        }
    }
});
//# sourceMappingURL=voter.component.js.map