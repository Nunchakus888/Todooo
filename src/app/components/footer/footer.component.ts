import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    menuList = [
        {url: 'list', title: 'Todo list'},
        {url: 'details', title: 'Todo details'},
        {url: 'completed', title: 'Todo completed'},
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
