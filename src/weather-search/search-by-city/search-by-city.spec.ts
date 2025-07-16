import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCity } from './search-by-city';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SearchByCity', () => {
  let component: SearchByCity;
  let fixture: ComponentFixture<SearchByCity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByCity],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(withInterceptorsFromDi()),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByCity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
