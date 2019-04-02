import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardsPage } from './cards.page';
import { CardListComponent } from '../components/card-list/card-list.component';
import { CardService } from '../card/card.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: CardsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardsPage, CardListComponent],
  providers:[CardService]
})
export class CardsPageModule {}
