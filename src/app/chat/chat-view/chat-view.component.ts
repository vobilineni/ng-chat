import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit, OnDestroy {

  @Input() name: String = '';
  chatRooms = [];
  private chatRoomSubcription: Subscription;
  constructor(private registerService: RegisterService, ) { }

  ngOnInit() {
    // this.chatRooms = this.registerService.getChatRooms();
    this.chatRoomSubcription = this.registerService.getChatRooms().subscribe(room => { this.chatRooms = room; });
  }

  ngOnDestroy() {
    this.chatRoomSubcription.unsubscribe();
    console.log('Destroy chat');
  }
  onRemoveChatRoom(roomToDelete: string) {
    console.log(`Remove this ${roomToDelete}`);
    this.registerService.removeChatRoom(roomToDelete);
  }
  onAddChatRoom(roomToAdd: string) {
    console.log(`Add this ${roomToAdd}`);
    this.registerService.addChatRoom(roomToAdd);
  }

}
