import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {

  @Input() name: String = '';
  chatRooms = [];
  constructor(private registerService: RegisterService, ) {  }

  ngOnInit() {
    this.chatRooms = this.registerService.getChatRooms();
  }
  onRemoveChatRoom() {
    console.log('remove');
    this.registerService.removeChatRoom('');
   }

}
