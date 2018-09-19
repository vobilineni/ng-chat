import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './register.service';
import { ChatService } from './chat.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [RegisterService, ChatService],
  declarations: []
})
export class ServicesModule { }
