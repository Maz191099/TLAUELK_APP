import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path: 'home',
        children:[
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]        
      },
      {
        path: 'productos',
        children:[
          {
            path: '',
            loadChildren: () => import('../productos/productos.module').then(m =>m.ProductosPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
      
    ]
  },
  {
    path:'',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutigModule {
  
}