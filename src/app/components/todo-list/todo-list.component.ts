import {Input, Output, Component, OnInit, Inject, EventEmitter} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {TodoModel} from '../../models/todo.model';
import {TodoComponent} from '../todo/todo.component';
import * as TodoActions from '../../actions/todo.action';
import {TransferDataService} from '../../services/transfer-data-service';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
    entryComponents: [TodoComponent]
})
export class TodoListComponent implements OnInit {
    todoLists$: Observable<TodoModel[]>;

    constructor(public dialog: MdDialog, private store: Store<TodoModel[]>, private service: TransferDataService) {
        this.todoLists$ = store.select(todoLists$ => todoLists$);
        service.dataChange.subscribe((value: any) => {
            this.submitTodo(value);
            console.log('service---receive---data');
        })
    }

    submitTodo(todoData) {
        console.log(todoData);
        this.store.dispatch({type: TodoActions.ADD_TODO, payload: todoData});
    }

    removeTodo() {
        this.store.dispatch({type: TodoActions.REMOVE_TODO, payload: {}});
    }

    updateTodo() {
        this.store.dispatch({type: TodoActions.UPDATE_TODO, payload: {}});
    }

    ngOnInit() {
    }

    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent, {
            disableClose: true,
            // data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            //todo..
        });
    }

}

@Component({
    selector: 'app-dialog',
    template: '<app-todo [dialog]="dialog"></app-todo>',
    styleUrls: ['../dialog/dialog.component.css'],
})

export class DialogComponent {
    @Input() public dialog = this.dialogRef;
    // constructor(@Inject(MD_DIALOG_DATA) public dialog: MdDialogRef<DialogComponent>, public dialogRef: MdDialogRef<DialogComponent>) {
    constructor(public dialogRef: MdDialogRef<DialogComponent>) {
    }

    // @ViewChild(MdDatepicker) datepicker: MdDatepicker<Date>;
}

