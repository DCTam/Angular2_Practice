import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
            .glyphicon-star{
                color: orange;
            }
            .glyphicon-star-empty{
                color: orange;
            }
            .glyphicon:hover{
                cursor:pointer;
            }
            `]
})

export class FavoriteComponent{
    @Input() isOn = false;

    @Output() change = new EventEmitter();

    onClick(){
        this.isOn = !this.isOn;
        this.change.emit({newValue: this.isOn});
    }
}