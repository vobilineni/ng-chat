import { Injectable } from '@angular/core';
import { ChatMessage } from '../../models/chat.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ChatService {
  readonly uri = environment.getChatMessage;

  private chats: BehaviorSubject<ChatMessage[]>;
  private chats$: Observable<ChatMessage[]>;

  constructor(private http: HttpClient) {
    this.chats = new BehaviorSubject<ChatMessage[]>([]);
    this.chats$ = this.chats.asObservable();
    console.log(http);
  }
  getChatObservable(): Observable<ChatMessage[]> {
    return this.chats$;
  }

  getChat(room: string): void {
    this.http.get<ChatMessage[]>
      (`${this.uri}?room=${room}`).toPromise()
      .then(chats => {
        this.chats.next(chats);
      });
  }
}
