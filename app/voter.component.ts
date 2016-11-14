import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
                <div style="width:20px">
                
                <i class="glyphicon glyphicon-menu-up"
                 on-click="upArrow()"
                  [style.color]="upColor ? 'orange' : 'black'"></i>
                  
                <span>{{voteCount}}</span>
                
                <i class="glyphicon glyphicon-menu-down"
                 on-click="downArrow()"
                 [style.color]="downColor ? 'orange' : 'black'"></i>
                </div>
            `,
    styles: [`i:hover{cursor:pointer}`]
})

export class VoterComp{
    @Input() upColor;
    @Input() downColor;
    @Input() voteCount;
    @Input() myVote;
    @Output() vote = new EventEmitter();

    upArrow(){
        if (this.myVote == 0){
            this.voteCount++;
            this.myVote = 1;
            this.upColor = true;

        }
        if(this.myVote == -1){
            this.voteCount++;
            this.myVote = 0;
            this.downColor = false;
        }
    }

    downArrow(){
        if(this.myVote == 0){
            this.voteCount--;
            this.myVote = -1;
            this.downColor = true;
        }

        if(this.myVote == 1){
            this.voteCount--;
            this.myVote = 0;
            this.upColor = false;
        }
    }


}
