import {Component, Inject, Optional} from '@angular/core';


import {MD_DIALOG_DATA} from '@angular/material';
import {MdDialogRef} from '@angular/material';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
})

export class DialogComponent {
    constructor(@Optional() @Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<DialogComponent>) {
    }

    // @ViewChild(MdDatepicker) datepicker: MdDatepicker<Date>;
}
