import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router' ;

import { MainhomeComponent } from '../mainhome/mainhome.component';
import { QuizComponent } from '../quiz/quiz.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';

//import { CommonModule } from '@angular/common';

const appRoutes : Routes = [
  { path: 'mainhome' , component: MainhomeComponent },
  { path: 'quiz', component : QuizComponent },
  {path:'about', component: AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'', component: HomeComponent}
];

@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
