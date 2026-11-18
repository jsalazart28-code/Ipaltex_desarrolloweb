import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Data, Product, Stock } from '../../core/data';
@Component({selector:'app-inventario',imports:[FormsModule],templateUrl:'./inventario.html',styleUrl:'./inventario.css'})
export class Inventario {
data=inject(Data); location=''; productFilter=0; stockEdit:Stock|null=null; message='';
 get stocks(){return this.data.stock.filter(s=>(!this.location||s.location===this.location)&&(!this.productFilter||s.productId===this.productFilter));}
 name(id:number){return this.data.products.find(p=>p.id===id)?.name||'—';}
 editStock(s?:Stock){this.stockEdit=s?{...s}:{id:0,productId:this.data.products[0]?.id||0,location:this.data.locations[0],color:'',lot:'',roll:'',quantity:0};if(!s)this.changeProduct();this.message='';}
 get stockColors(){return this.data.products.find(p=>p.id===this.stockEdit?.productId)?.colors||[];}
 changeProduct(){if(this.stockEdit)this.stockEdit.color=this.stockColors[0]||'';}
 saveStock(){const s=this.stockEdit;if(!s)return;if(!this.stockColors.includes(s.color)||!s.lot.trim()||!s.roll.trim()||!Number.isFinite(s.quantity)||s.quantity<0){this.message='Revisa los datos de inventario.';return;}this.data.saveStock(s);this.stockEdit=null;this.message='Inventario actualizado en memoria.';}
}
