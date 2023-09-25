import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KegpembelajaranPage } from './kegpembelajaran.page';

describe('KegpembelajaranPage', () => {
  let component: KegpembelajaranPage;
  let fixture: ComponentFixture<KegpembelajaranPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KegpembelajaranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KegpembelajaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
