import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-input',
    template:
        `
        <div>
            <input type="text" autofocus [(ngModel)]="content" (keyup.enter)="inputSomething.emit($event.target.value)"/>
            <button  (click)="inputSomething.emit($event.target.value)" type="button" >Add todo</button>
        </div>`,
    styleUrls: ['./input.component.css']

})
export class InputComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @Input() content = 'Angular';
    @Output() inputSomething = new EventEmitter<string>();

}
