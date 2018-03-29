import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat/chat.component';

const ROUTES = [
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
  { path: 'chats', component: ChatComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
