import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Data } from '../../core/data';
import { ProductCard } from '../../product-card/product-card';

@Component({selector:'app-contacto',imports:[FormsModule],templateUrl:'./contacto.html',styleUrl:'./contacto.css'})
export class Contacto {
sent=false; contact={name:'',email:'',message:''};
 send(){this.sent=true;this.contact={name:'',email:'',message:''};}
}
