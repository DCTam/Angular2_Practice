import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {LikeHeart} from './heart.component';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'tweet',
    templateUrl:'app/tweet.component.html',
    directives: [LikeHeart, FavoriteComponent]

})

export class Tweet{
    @Input() data;


    realTweet = {
        value: 15,
        isClicked: false

    }


}