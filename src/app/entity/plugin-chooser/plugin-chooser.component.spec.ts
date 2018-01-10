import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginChooserComponent } from './plugin-chooser.component';

describe('PluginChooserComponent', () => {
  let component: PluginChooserComponent;
  let fixture: ComponentFixture<PluginChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
