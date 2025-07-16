import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPostcode } from './search-by-postcode';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SearchByPostcode', () => {
  let component: SearchByPostcode;
  let fixture: ComponentFixture<SearchByPostcode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByPostcode],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByPostcode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
