import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio and navigation', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Joshua Jhoel');
    expect(compiled.querySelector('app-sidebar')).toBeTruthy();
    expect(compiled.querySelector('a[href="#portafolio"]')).toBeTruthy();
    expect(compiled.querySelector('#sobre-mi')?.textContent).toContain('UNIFRANZ');
    expect(compiled.querySelector('#contacto a[href="https://www.instagram.com/joshuaajhoel/"]')).toBeTruthy();
    expect(compiled.querySelector('#contacto a[href="https://github.com/JosJoel1"]')).toBeTruthy();
  });
});
