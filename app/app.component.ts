import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {FavoriteComponent} from './favorite.component';
import {LikeHeart} from './heart.component';
import {VoterComp} from './voter.component';
import {Tweet} from './tweet.component';
import {TweetService} from './tweet.service';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';
import {EmailFormComponent} from './email-form.component';



@Component({
    selector: 'my-app',
    template: `
                <email-form></email-form>
               
                
              `,
    directives: [FavoriteComponent, LikeHeart, VoterComp, Tweet, ZippyComponent, ContactFormComponent, EmailFormComponent],
    providers: [TweetService]
})
export class AppComponent {
    tweets: any[];

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }

}