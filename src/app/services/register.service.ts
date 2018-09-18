import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(
  // providedIn: 'root'
)
export class RegisterService {
  private ChatRooms = ['toshiba', 'hp', 'acer', 'lenovo', 'dell', 'apple'];

  private chatRoomSubject: BehaviorSubject<string[]>;
  private readonly chatRoomSubject$: Observable<string[]>;

  constructor() {
    this.chatRoomSubject = new BehaviorSubject<string[]>(this.ChatRooms);
    this.chatRoomSubject$ = this.chatRoomSubject.asObservable();
  }

  getChatRooms(): Observable<string[]> {
    return this.chatRoomSubject$;

  }
  removeChatRoom(chatRoomsToRemove: string) {
    console.log(this.ChatRooms);
    let rooms = this.chatRoomSubject.getValue();
    rooms = rooms.filter(room => room !== chatRoomsToRemove);
    this.chatRoomSubject.next(rooms);
    // this.ChatRooms = this.ChatRooms.filter(room => room !== chatRoomsToRemove);
    console.log(this.chatRoomSubject.getValue());
  }
  addChatRoom(chatRoomsToAdd: string) {
    console.log(this.ChatRooms);
    const rooms = this.chatRoomSubject.getValue();
    rooms.push(chatRoomsToAdd);
    this.chatRoomSubject.next(rooms);
    console.log(this.chatRoomSubject.getValue());

  }
}
