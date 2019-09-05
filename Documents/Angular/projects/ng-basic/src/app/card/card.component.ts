import {Component} from '@angular/core'

//Вариант 1 - указание шаблона как ссылку
@Component({
    // куда будет вставляться компонент, app-что бы разделить на ши и не наши 
    selector: 'app-card', 
    // что будет вставляться - наша разметка, template
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    //можно настраивать интерполяцию
    interpolation: ['[[', ']]']
})

//Вариант 2 - указание шаблона в темплейт литералaх ``
// @Component({
//     selector: 'app-card', 
//     template: `
//     <div class="card">
//         <h1>Card Component</h1>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, in.</p>
//     </div>
//     `,
//     styles: [
//         `
//         .card {
//             padding: .5rem 1 rem;
//             border: 1px dashed #ccc;
//             margin-bottom: 1rem;
//         }
        
//         .card h2  {
//             margin-bottom: .5rem;
//         } 

//         `
//     ]   
// })


export class CardComponent {
    //declare variable
    title = 'This is dynamic variable from component app-card';

}