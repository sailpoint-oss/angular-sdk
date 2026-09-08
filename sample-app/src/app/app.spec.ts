import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideSailPoint, SailPointConfigService } from '@sailpoint/angular-sdk';
import { App } from './app';

// The shell injects SailPointConfigService and renders a connection indicator
// from it, so the SDK has to be provided for the component to build at all.
function render(params: Parameters<typeof provideSailPoint>[0] = {}) {
  TestBed.configureTestingModule({
    imports: [App],
    providers: [
      provideRouter([]),
      provideSailPoint(params),
      provideHttpClientTesting(),
    ],
  });
  const fixture = TestBed.createComponent(App);
  fixture.detectChanges();
  return fixture;
}

afterEach(() => {
  TestBed.resetTestingModule();
});

describe('App', () => {
  it('creates the shell', () => {
    const fixture = render();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the branding', () => {
    const element = render().nativeElement as HTMLElement;

    expect(element.querySelector('.brand-name')?.textContent).toContain('SailPoint');
    expect(element.querySelector('.brand-sub')?.textContent).toContain('Angular SDK Demo');
  });

  it('links to every page', () => {
    const element = render().nativeElement as HTMLElement;

    const routes = Array.from(element.querySelectorAll('.nav-item'))
      .map((a) => a.getAttribute('href'));

    expect(routes).toStrictEqual(['/config', '/identities', '/accounts', '/sources']);
  });

  it('reports that it is not configured when no base URL is set', () => {
    const element = render().nativeElement as HTMLElement;

    expect(element.querySelector('.conn-indicator')?.textContent).toContain('Not configured');
  });

  it('reports that it is connected once a base URL is set', () => {
    const fixture = render({
      baseUrl: 'https://acme.api.identitynow.com',
      accessToken: 'token',
    });

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.conn-indicator')?.textContent).toContain('Connected');
  });

  it('picks up a configuration change made at runtime', () => {
    const fixture = render();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.conn-indicator')?.textContent).toContain('Not configured');

    TestBed.inject(SailPointConfigService).configure({
      baseUrl: 'https://acme.api.identitynow.com',
      accessToken: 'token',
    });
    fixture.detectChanges();

    expect(element.querySelector('.conn-indicator')?.textContent).toContain('Connected');
  });
});
