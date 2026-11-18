import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Data, Product, Stock } from '../../core/data';
@Component({selector:'app-productos',imports:[FormsModule],templateUrl:'./productos.html',styleUrl:'./productos.css'})
export class Productos {
data=inject(Data); query=''; editing:Product|null=null; colorsText=''; message=''; pendingDelete:Product|null=null; loadingImage=false; imageError='';
 get products(){const q=this.query.toLowerCase();return this.data.products.filter(p=>p.name.toLowerCase().includes(q)||p.code.toLowerCase().includes(q));}
 edit(p?:Product){this.editing=p?{...p,colors:[...p.colors]}:{id:0,name:'',code:'',category:this.data.categories[0],material:'',price:0,description:'',colors:[],image:'images/lino.svg'};this.colorsText=p?p.colors.join(', '):'';this.message='';this.imageError='';this.loadingImage=false;}
 save(){if(!this.editing||this.loadingImage||this.imageError)return;const p=this.editing;const colors=[...new Set(this.colorsText.split(',').map(c=>c.trim()).filter(Boolean))];if(!p.name.trim()||!p.code.trim()||!colors.length||!Number.isFinite(p.price)||p.price<0){this.message='Completa los datos correctamente.';return;}if(this.data.products.some(x=>x.id!==p.id&&x.code.toLowerCase()===p.code.trim().toLowerCase())){this.message='El código ya existe.';return;}if(this.data.stock.some(s=>s.productId===p.id&&!colors.includes(s.color))){this.message='No puedes retirar colores con registros de inventario.';return;}p.colors=colors;p.code=p.code.trim();this.data.save(p);this.editing=null;this.message='Producto guardado en memoria.';}
 remove(){if(this.pendingDelete){this.data.remove(this.pendingDelete.id);this.pendingDelete=null;this.message='Producto e inventario asociados eliminados.';}}
 selectImage(event:Event){
 const input=event.target as HTMLInputElement; const file=input.files?.[0]; const product=this.editing;
 if(!file||!product)return; this.imageError='';
 if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>5*1024*1024){this.imageError='Selecciona JPG, PNG o WebP de hasta 5 MB.';return;}
 this.loadingImage=true; const reader=new FileReader();
 reader.onload=()=>{if(this.editing===product){product.image=String(reader.result);this.loadingImage=false;}};
 reader.onerror=()=>{if(this.editing===product){this.imageError='No se pudo leer la imagen.';this.loadingImage=false;}}; reader.readAsDataURL(file);
 }

}
