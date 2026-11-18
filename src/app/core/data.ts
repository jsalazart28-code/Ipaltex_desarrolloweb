import { Injectable } from '@angular/core';
export interface Product { id:number; name:string; code:string; category:string; material:string; price:number; description:string; colors:string[]; image:string; }
export interface Stock { id:number; productId:number; location:string; color:string; lot:string; roll:string; quantity:number; }
@Injectable({providedIn:'root'})
export class Data {
 categories=['Algodón','Lino','Poliéster','Mezclas'];
 locations=['Tienda Lima','Tienda Gamarra','Almacén central'];
 products:Product[]=[
 {id:1,name:'Lino natural',code:'LIN-001',category:'Lino',material:'100% lino',price:38,description:'Textura fresca y ligera, ideal para prendas y decoración.',colors:['Arena','Blanco'],image:'images/lino.svg'},
 {id:2,name:'Algodón premium',code:'ALG-002',category:'Algodón',material:'100% algodón',price:26,description:'Suave al tacto, transpirable y versátil.',colors:['Blanco','Azul'],image:'images/algodon.svg'},
 {id:3,name:'Satén azul noche',code:'POL-003',category:'Poliéster',material:'Poliéster',price:32,description:'Acabado brillante y caída fluida para ocasiones especiales.',colors:['Azul','Marrón'],image:'images/saten.svg'},
 {id:4,name:'Gabardina tierra',code:'MEZ-004',category:'Mezclas',material:'Algodón y poliéster',price:29,description:'Tejido resistente para confección de uso diario.',colors:['Marrón','Arena'],image:'images/gabardina.svg'},
 {id:5,name:'Popelina blanca',code:'ALG-005',category:'Algodón',material:'Algodón',price:19,description:'Tejido ligero de superficie uniforme.',colors:['Blanco'],image:'images/popelina.svg'},
 {id:6,name:'Lino terracota',code:'LIN-006',category:'Lino',material:'Lino',price:42,description:'Tono cálido y textura artesanal.',colors:['Terracota','Arena'],image:'images/terracota.svg'}];
 stock:Stock[]=this.products.flatMap(p=>this.locations.flatMap((location,i)=>p.colors.map((color,j)=>({id:p.id*100+i*10+j,productId:p.id,location,color,lot:`L-${p.id}${i}`,roll:`R-${j+1}`,quantity:p.id===5?2:12+p.id*3+i*8+j*4}))));
 total(id:number){return this.stock.filter(s=>s.productId===id).reduce((a,s)=>a+s.quantity,0);}
 byLocation(location:string){return this.stock.filter(s=>s.location===location).reduce((a,s)=>a+s.quantity,0);}
 save(p:Product){if(p.id){this.products=this.products.map(x=>x.id===p.id?{...p}:x);}else{this.products=[...this.products,{...p,id:Math.max(0,...this.products.map(x=>x.id))+1}];}}
 remove(id:number){this.products=this.products.filter(p=>p.id!==id);this.stock=this.stock.filter(s=>s.productId!==id);}
 saveStock(s:Stock){if(s.id)this.stock=this.stock.map(x=>x.id===s.id?{...s}:x);else this.stock=[...this.stock,{...s,id:Math.max(0,...this.stock.map(x=>x.id))+1}];}
}
