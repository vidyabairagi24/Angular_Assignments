import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

const routes: Routes = [
  {path:'first',component:TechnologiesComponent},
  {path:'second',component:BooksComponent},
  {path:'',component:TechnologiesComponent},
  {path:'**',component:WrongChoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
