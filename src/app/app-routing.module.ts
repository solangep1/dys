import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

type PathMatch = "full" | "prefix" | undefined;

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./auth.component')
      .then(m => m.AuthComponent)
  },
  {
    path: '**', pathMatch: 'full'  as PathMatch, redirectTo: '/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
