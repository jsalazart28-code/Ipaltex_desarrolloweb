import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({selector:'app-layout',imports:[FormsModule,RouterLink,RouterLinkActive,RouterOutlet],templateUrl:'./layout.html',styleUrl:'./layout.css'})
export class Layout {
router=inject(Router); search=''; searchCatalog(){this.router.navigate(['/catalogo'],{queryParams:{q:this.search}});}
}
