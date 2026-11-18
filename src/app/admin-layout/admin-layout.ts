import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({selector:'app-admin-layout',imports:[RouterLink,RouterLinkActive,RouterOutlet],templateUrl:'./admin-layout.html',styleUrl:'./admin-layout.css'})
export class AdminLayout {

}
