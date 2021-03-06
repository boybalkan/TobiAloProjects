import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesFor2PageRoutingModule } from './games-for2-routing.module';

import { GamesFor2Page } from './games-for2.page';


import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesFor2PageRoutingModule
  ],
  declarations: [GamesFor2Page, HeaderComponent, FooterComponent]
})
export class GamesFor2PageModule {}
