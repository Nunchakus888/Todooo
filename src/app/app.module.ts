import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


import {AppRouterModule} from './router/app.router.module';
/*material-ui-lib*/
import {MaterialModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdDialogModule} from '@angular/material';
/*material-ui-lib*/


/*Components*/
import {AppComponent} from './app.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodoListComponent, DialogComponent} from './components/todo-list/todo-list.component';
import {DetailsComponent} from './components/details/details.component';
import {FooterComponent} from './components/footer/footer.component';
import {CompletedComponent} from './components/completed/completed.component';
/*Components*/

/*NgRx*/
import {todoReducer} from './reducer/todo.reducer';
import {TransferDataService} from './services/transfer-data-service';

/*NgRx*/
@NgModule({
    declarations: [
        AppComponent,
        TodoComponent,
        DialogComponent,
        TodoListComponent,
        DetailsComponent,
        FooterComponent,
        CompletedComponent,
    ],
    imports: [
        MaterialModule,
        MdDialogModule,
        MdDatepickerModule,
        MdNativeDateModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouterModule,
        //static provideStore(_reducer: any, _initialState?: any): ModuleWithProviders;
        StoreModule.provideStore(todoReducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 5,
            monitor: todoReducer
        })
    ],
    /**
     *This is for dynamically added components that are added using
     * ViewContainerRef.createComponent().
     * Adding them to entryComponents tells the offline template compiler to compile them
     * and create factories for them.
     * The components registered in route configurations are added automatically to
     * entryComponents as well
     * because router-outlet also uses
     * ViewContainerRef.createComponent() to add routed components to the DOM.
     *
     *
     * ---offcinal-doc----
     * Due to the dynamic nature of the MdDialog,
     * and its usage of ViewContainerRef#createComponent() to create the component
     * on the fly,the AOT compiler will not know to create the proper
     * ComponentFactory for your dialog component by default.
     * You must include your dialog class in the list of
     * entryComponents in your module definition so that the AOT compiler knows to
     * create the ComponentFactory for it.
     */
    entryComponents: [DialogComponent],
    /**
     * 若在组建中注入则每个组件的该服务对象是一个单独的实例
     * 若在全局模块中注入, 则全局仅有该对象一个实例
     */
    providers: [TransferDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
