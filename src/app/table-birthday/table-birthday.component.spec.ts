import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBirthdayComponent } from './table-birthday.component';

describe('TableBirthdayComponent', () => {
  let component: TableBirthdayComponent;
  let fixture: ComponentFixture<TableBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBirthdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
