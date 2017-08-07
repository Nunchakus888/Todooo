import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetailsComponent} from '../components/details/details.component';
import {TodoListComponent} from '../components/todo-list/todo-list.component';
import {TodoComponent} from '../components/todo/todo.component';
import {CompletedComponent} from '../components/completed/completed.component';


const routesConfig: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: TodoListComponent},
    {path: 'details', component: DetailsComponent},
    {path: 'completed', component: CompletedComponent},
    {path: 'todo', component: TodoComponent},
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routesConfig)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class AppRouterModule {

}
