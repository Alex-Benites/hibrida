import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignDetailsPage } from './sign-details.page';

describe('SignDetailsPage', () => {
  let component: SignDetailsPage;
  let fixture: ComponentFixture<SignDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
