import {Input, Output, Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {TransferDataService} from '../../services/transfer-data-service';
import {TodoModel} from '../../models/todo.model';
@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    @Input() public data: TodoModel = {
        id: '',
        title: '',
        content: '事件详情',
        time: '',
        completed: false,
    };
    @Input() private dialog;
    minDate = new Date();
    maxDate = new Date(2022, 12, 22);
    myFilter = (d: Date) => d.getFullYear();
    constructor(private service: TransferDataService) {
    }

    ngOnInit() {}

    onSubmit(todo: NgForm) {
        this.service.dataChange.emit(todo);
        this.dialog.close(true);
    }

}
