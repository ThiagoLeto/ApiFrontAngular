import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistrosComponent } from './registros/registros.component';
import { PostRegistroComponent } from './registros/post-registro/post-registro.component';
import { MenuComponent } from './menu/menu.component';
import { PostProductoComponent } from './productos/post-producto/post-producto.component';

const rutas: Routes=[
  { path: '', redirectTo:'/menu', pathMatch:'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'registros', component: RegistrosComponent },
  { path: 'registros/postRegistro', component: PostRegistroComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/postProducto', component: PostProductoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    RegistrosComponent,
    PostRegistroComponent,
    MenuComponent,
    PostProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
