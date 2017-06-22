import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class TransferDataService {
    dataChange: EventEmitter<any>;
    constructor() {
        this.dataChange = new EventEmitter();
    }

}
