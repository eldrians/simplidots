import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../../../app/shared/components/header/header.component';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('menuClick should set isOpen to true and log "isOpen"', () => {
    component.menuClick(true);
    expect(component.isOpen).toBeTruthy();
    // You can also test the console log output using a spy or a custom logging service.
  });

  it('menuClick should set isOpen to false and log "isNotOpen"', () => {
    component.menuClick(false);
    expect(component.isOpen).toBeFalsy();
    // You can also test the console log output using a spy or a custom logging service.
  });
});
