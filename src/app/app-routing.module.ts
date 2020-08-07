import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{
    //path: 'home',
    //loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  //},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  //{
    //path: 'productos',
    //loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  //},
  //{
    //path: '',
    //redirectTo: 'tabs',
    //pathMatch: 'full'
  //},
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
    //loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'establishment-detail/:id',
    loadChildren: () => import('./pages/establishment-detail/establishment-detail.module').then( m => m.EstablishmentDetailPageModule)
  },
  {
    path: 'commentary/:id',
    loadChildren: () => import('./pages/commentary/commentary.module').then( m => m.CommentaryPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'detalle-producto/:id',
    loadChildren: () => import('./pages/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'image-model',
    loadChildren: () => import('./pages/image-model/image-model.module').then( m => m.ImageModelPageModule)
  },
  {
    path: 'establishment-register',
    loadChildren: () => import('./pages/establishment-register/establishment-register.module').then( m => m.EstablishmentRegisterPageModule)
  },  {
    path: 'home-establishment',
    loadChildren: () => import('./pages/home-establishment/home-establishment.module').then( m => m.HomeEstablishmentPageModule)
  },
  {
    path: 'form-product',
    loadChildren: () => import('./pages/form-product/form-product.module').then( m => m.FormProductPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
