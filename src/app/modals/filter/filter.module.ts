import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterPage } from './filter.page';

@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule ],
	declarations: [ FilterPage ]
})
export class FilterPageModule {}
