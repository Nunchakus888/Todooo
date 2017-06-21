import {Component, OnInit, Inject} from '@angular/core';
import {MdRadioModule} from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import {MdDialog, MdDialogRef} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

import {TodoComponent} from '../todo/todo.component';
@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
    entryComponents: [TodoComponent]
})
export class TodoListComponent implements OnInit {

    selectedOption: string;
    constructor(public dialog: MdDialog) {
    }

    ngOnInit() {
    }

    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent, {'data': {title: 'add todo..'}});
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    inputSomething(e) {
        console.log(e);
    }

}

@Component({
    selector: 'app-dialog',
    templateUrl: '../dialog/dialog.component.html',
    styleUrls: ['../dialog/dialog.component.css'],
})

export class DialogComponent {
    constructor(@Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<DialogComponent>) {
    }
    // @ViewChild(MdDatepicker) datepicker: MdDatepicker<Date>;
}

