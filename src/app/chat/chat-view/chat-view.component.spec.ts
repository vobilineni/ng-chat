import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatViewComponent } from './chat-view.component';
import { RegisterService } from '../../services/register.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ChatViewComponent', () => {
  let component: ChatViewComponent;
  let fixture: ComponentFixture<ChatViewComponent>;
  let registerService: jasmine.SpyObj<RegisterService>;

  beforeEach(async(() => {
    const registerSpy = jasmine.createSpyObj
      ('RegisterService', ['getChatRooms', 'removeChatRoom', 'addChatRoom']);
    TestBed.configureTestingModule({
      declarations: [ChatViewComponent],
      providers: [{ provide: RegisterService, useValue: registerSpy }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    registerService = TestBed.get(RegisterService);
    registerService.getChatRooms.and.returnValue(of(['sri']));
    // registerService.removeChatRoom.and.callThrough();
    fixture = TestBed.createComponent(ChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render chatView', () => {
    const compiled = fixture.debugElement.query(By.css('li')).nativeElement;
    expect(compiled.textContent).toContain('SRI');
  });

  it('should remove chat rooms', () => {
    const roomToDelete = 'fake';
    component.onRemoveChatRoom(roomToDelete);
    expect(registerService.removeChatRoom).toHaveBeenCalledWith(roomToDelete);
  });
  it('should add chat room', () => {
    const roomToAdd = 'fake';
    component.onAddChatRoom(roomToAdd);
    expect(registerService.addChatRoom).toHaveBeenCalledWith(roomToAdd);
  });

});
