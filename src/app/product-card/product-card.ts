import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Data, Product } from '../core/data';
@Component({selector:'app-product-card',imports:[RouterLink],templateUrl:'./product-card.html'})
export class ProductCard { @Input({required:true}) product!:Product; data=inject(Data); }
