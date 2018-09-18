import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './register.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ RegisterService ],
  declarations: []
})
export class ServicesModule { }
