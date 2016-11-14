System.register(['angular2/core', './favorite.component', './heart.component', './voter.component', './tweet.component', './tweet.service', './zippy.component', './contact-form.component', './email-form.component'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1, heart_component_1, voter_component_1, tweet_component_1, tweet_service_1, zippy_component_1, contact_form_component_1, email_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (email_form_component_1_1) {
                email_form_component_1 = email_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.tweets = tweetService.getTweets();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <email-form></email-form>\n               \n                \n              ",
                        directives: [favorite_component_1.FavoriteComponent, heart_component_1.LikeHeart, voter_component_1.VoterComp, tweet_component_1.Tweet, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent, email_form_component_1.EmailFormComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map