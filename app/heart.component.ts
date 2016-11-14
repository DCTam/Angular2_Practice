import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'like',
    template: `
                <i class="glyphicon glyphicon-heart"
                 on-click="onClick()"
                  [style.color]="isClicked ? 'deeppink' : 'black'"
                   ><span style="color:black">{{value}}</span></i>
           
                `,
    styles: ['.glyphicon:hover {cursor:pointer}']
})

export class LikeHeart{

    @Input()isClicked = false;
    @Input() value = 0;

    onClick(){
        //this.isClicked = !this.isClicked;
        this.isClicked = !this.isClicked;
        this.value += this.isClicked ? 1 : -1;
    }

}