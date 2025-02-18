import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { CardComponent } from './card/card.component';
import { MembrosGridComponent } from './membros/membros-grid/membros-grid.component';
import { MembrosFormularioComponent } from './membros/membros-formulario/membros-formulario.component';
import { TabsFormularioComponent } from './componentes/tabs-formulario/tabs-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent
  },
  {
    path: 'membros',
    component: MembrosGridComponent
  },
  {
    path:'membros/cadastro',
    component: TabsFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
