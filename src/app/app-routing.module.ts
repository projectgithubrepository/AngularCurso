import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { YourGuardGuard } from './your-guard.guard';

// const routes: Routes = [{
//   path: 'first-component', component: FirstComponent
// },{
//   path: 'second-component', component: SecondComponent
// }];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


// para passar informação de um componente para o outro
const routes: Routes = [{
  path: 'first-component/:id', component: FirstComponent,
  
  //rota aninhada
  children: [
    {path: 'child-a', component: ChildAComponent},
    {path: 'child-b', component: ChildBComponent},
  ]
},{
  //foi incluído depois routeGuard (arquivo de serviço your-guard-guard.ts) = validação, ou seja, previne navegação em páginas não autorizadas da aplicação
  path: 'second-component', component: SecondComponent, canActivate: [YourGuardGuard]
},{
  //redirecionamento em caso de pag inexistente. Nesse exemplo redirecionou para o FirstComponent. Mas poderia ser para uma pag de erro ou a home 
  path: '**', component: FirstComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }