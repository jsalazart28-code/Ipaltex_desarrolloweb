import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Data, Product, Stock } from '../../core/data';
@Component({selector:'app-dashboard',imports:[RouterLink],templateUrl:'./dashboard.html',styleUrl:'./dashboard.css'})
export class Dashboard {
data=inject(Data);
 get total(){return this.data.stock.reduce((a,s)=>a+s.quantity,0);}
 get low(){return this.data.products.filter(p=>this.data.total(p.id)<20);}
}
