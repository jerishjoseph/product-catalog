import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: 'products', component: ProductsComponent},
    {path: 'about', component: AboutComponent},
    {path: '', component: ProductsComponent},
    {path: '**', component: ProductsComponent}
];
