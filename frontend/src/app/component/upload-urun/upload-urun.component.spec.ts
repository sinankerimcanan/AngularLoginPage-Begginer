import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUrunComponent } from './upload-urun.component';

describe('UploadUrunComponent', () => {
  let component: UploadUrunComponent;
  let fixture: ComponentFixture<UploadUrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadUrunComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadUrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
