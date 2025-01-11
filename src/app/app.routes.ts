import { Routes } from '@angular/router';
import HomeComponent from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BlogComponent } from '../components/blog/blog.component';
import { AboutComponent } from '../components/about/about.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'contact', component:ContactComponent, title:'Contact'},
  {path:'footer',component:FooterComponent, title:'footer'},
  {path:'blog',component:BlogComponent, title:'Blog'},
  {path:'about',component:AboutComponent, title:'About'},
  {path:'**',component:NotFoundComponent },
];
