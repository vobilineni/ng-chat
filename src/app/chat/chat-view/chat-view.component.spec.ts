import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatViewComponent } from './chat-view.component';
import { RegisterService } from '../../services/register.service';
import { of } from 'rxjs';

fdescribe('ChatViewComponent', () => {
  let component: ChatViewComponent;
  let fixture: ComponentFixture<ChatViewComponent>;
  let registerService: jasmine.SpyObj<RegisterService>;

  beforeEach(async(() => {
    const registerSpy = jasmine.createSpyObj
    ('RegisterService', ['getChatRooms']);
    TestBed.configureTestingModule({
      declarations: [ ChatViewComponent ],
      providers: [{provide: RegisterService , useValue: registerSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    registerService = TestBed.get(RegisterService);
    registerService.getChatRooms.and.returnValue(of(['sri']));
    fixture = TestBed.createComponent(ChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
