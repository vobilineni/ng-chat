import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {

  @Input() name: String='';
  chatRooms= ['toshiba','hp','acer','lenovo','dell','apple'];

  constructor() { }

  ngOnInit() {
  }

}
