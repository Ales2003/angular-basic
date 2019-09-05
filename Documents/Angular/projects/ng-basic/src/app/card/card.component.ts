import {Component} from '@angular/core'

@Component({
    // куда будет вставляться компонент, app-что бы разделить на ши и не наши 
    selector: 'app-card', 
    // что будет вставляться - наша разметка, template
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

}