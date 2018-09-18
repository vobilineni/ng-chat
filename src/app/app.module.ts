import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { ServicesModule } from './services/services.module';


const routes: Routes = [
  { path: 'chat', component: ChatViewComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    ServicesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
