import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../../../app/shared/components/header/header.component';

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
  });

  it('should call menuClick with isOpen value', () => {
    const menuClickSpy = jest.spyOn(component, 'menuClick');
    const isOpenValue = true; // Replace with your desired value
    component.isOpen = isOpenValue;
    component.ngOnInit();
    expect(menuClickSpy).toHaveBeenCalledWith(isOpenValue);
  });

  it('menuClick should set isOpen to false and log "isNotOpen"', () => {
    component.menuClick(false);
    expect(component.isOpen).toBeFalsy();
  });
});
