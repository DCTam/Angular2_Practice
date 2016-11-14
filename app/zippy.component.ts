import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    templateUrl: 'app/zippy.component.html'

})

export class ZippyComponent{
    @Input() title;
    isClicked1 = false;
    isClicked2 = false;
    hoverCheck1 = false;
    hoverCheck2 = false;

    onHover1(){
        this.hoverCheck1 = !this.hoverCheck1;
    }
    onHover2(){
        this.hoverCheck2 = !this.hoverCheck2;
    }

    onClick1(){
        this.isClicked1 = !this.isClicked1;
    }
    onClick2(){
        this.isClicked2 = !this.isClicked2;
    }

}