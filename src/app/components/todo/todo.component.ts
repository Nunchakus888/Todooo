import {Input, Component, OnInit, Inject, ViewChild} from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdDatepickerModule} from '@angular/material';
import {MdDialog, MdDialogRef} from '@angular/material';

import {TodoModel} from '../../models/todo.model';
@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    selectedOption: string;
    @Input() data: TodoModel;

    constructor() {

    }

    ngOnInit() {
    }

    // openDialog() {
    //     const dialogRef = this.dialog.open(DialogComponent, {'data': {title: 'add todo..'}});
    //     dialogRef.afterClosed().subscribe(result => {
    //         this.selectedOption = result;
    //     });
    // }
}
