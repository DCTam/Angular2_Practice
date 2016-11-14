import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {FavoriteComponent} from './favorite.component';
import {LikeHeart} from './heart.component';
import {VoterComp} from './voter.component';
import {Tweet} from './tweet.component';
import {TweetService} from './tweet.service';
import {ZippyComponent} from './zippy.component';



@Component({
    selector: 'my-app',
    template: `
                <zippy title="Who this">
                    <div class="body1">Body 1 stuff</div>
                    <div class="body2">Body 2 stuff</div>
                </zippy>
                <zippy>
                    <div class="body1">Body 1 stsdfsdfsdfuff</div>
                    <div class="body2">Body 2 stuff</div>
                </zippy>
                
              `,
    directives: [FavoriteComponent, LikeHeart, VoterComp, Tweet, ZippyComponent],
    providers: [TweetService]
})
export class AppComponent {
    tweets: any[];

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }

}