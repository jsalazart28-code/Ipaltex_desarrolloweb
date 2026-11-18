import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Data } from '../../core/data';
import { ProductCard } from '../../product-card/product-card';

@Component({selector:'app-detalle',imports:[RouterLink],templateUrl:'./detalle.html',styleUrl:'./detalle.css'})
export class Detalle {
data=inject(Data); route=inject(ActivatedRoute); id=0; constructor(){this.route.paramMap.subscribe(p=>this.id=Number(p.get('id')));}
 get product(){return this.data.products.find(p=>p.id===this.id);}
}
