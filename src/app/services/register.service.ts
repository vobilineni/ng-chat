import { Injectable } from '@angular/core';

@Injectable(
  // providedIn: 'root'
)
export class RegisterService {

  private ChatRooms = ['toshiba', 'hp', 'acer', 'lenovo', 'dell', 'apple'];

  constructor() { }

  getChatRooms(): string[] {
    return this.ChatRooms;

  }
  removeChatRoom( chatRoomsToRemove: string) {
    this.ChatRooms.pop();
  }
 }
