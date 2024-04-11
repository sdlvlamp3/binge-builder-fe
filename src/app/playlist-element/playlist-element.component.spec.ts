import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistElementComponent } from './playlist-element.component';

describe('PlaylistElementComponent', () => {
  let component: PlaylistElementComponent;
  let fixture: ComponentFixture<PlaylistElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
