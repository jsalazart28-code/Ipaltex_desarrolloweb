import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Data } from '../../core/data';
import { ProductCard } from '../../product-card/product-card';

@Component({selector:'app-inicio',imports:[RouterLink,ProductCard],templateUrl:'./inicio.html',styleUrl:'./inicio.css'})
export class Inicio {
data=inject(Data);
}
