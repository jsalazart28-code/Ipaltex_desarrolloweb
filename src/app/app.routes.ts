import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { AdminLayout } from './admin-layout/admin-layout';
import { Inicio } from './pages/inicio/inicio';
import { Catalogo } from './pages/catalogo/catalogo';
import { Detalle } from './pages/detalle/detalle';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';
import { Dashboard } from './pages/dashboard/dashboard';
import { Productos } from './pages/productos/productos';
import { Inventario } from './pages/inventario/inventario';
export const routes: Routes = [
 {path:'admin',component:AdminLayout,children:[
 {path:'',redirectTo:'dashboard',pathMatch:'full'}, {path:'dashboard',component:Dashboard}, {path:'productos',component:Productos}, {path:'inventario',component:Inventario}]},
 {path:'',component:Layout,children:[{path:'',redirectTo:'inicio',pathMatch:'full'}, {path:'inicio',component:Inicio}, {path:'catalogo',component:Catalogo}, {path:'producto/:id',component:Detalle}, {path:'nosotros',component:Nosotros}, {path:'contacto',component:Contacto}]},
 {path:'**',redirectTo:'inicio'}];
