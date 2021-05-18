import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionlistComponent } from './petitionlist.component';

describe('PetitionlistComponent', () => {
  let component: PetitionlistComponent;
  let fixture: ComponentFixture<PetitionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
