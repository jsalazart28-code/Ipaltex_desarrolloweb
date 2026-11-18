import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Data } from '../../core/data';
import { ProductCard } from '../../product-card/product-card';

@Component({selector:'app-catalogo',imports:[FormsModule,ProductCard],templateUrl:'./catalogo.html',styleUrl:'./catalogo.css'})
export class Catalogo {
data=inject(Data); route=inject(ActivatedRoute); search=''; category=''; color=''; maxPrice=1000; constructor(){this.route.queryParamMap.subscribe(p=>{this.search=p.get('q')||'';this.category=p.get('category')||'';});}
 get colors(){return [...new Set(this.data.products.flatMap(p=>p.colors))];}
 get filtered(){const q=this.search.trim().toLowerCase();return this.data.products.filter(p=>(p.name.toLowerCase().includes(q)||p.code.toLowerCase().includes(q))&&(!this.category||p.category===this.category)&&(!this.color||p.colors.includes(this.color))&&p.price<=this.maxPrice);}
 reset(){this.search='';this.category='';this.color='';this.maxPrice=1000;}
}
