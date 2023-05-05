import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Inscription } from "./inscription/inscription.component";

const routes : Routes = [
{path: 'inscription', component: Inscription}
];

@NgModule({
    imports: [

        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule {

}