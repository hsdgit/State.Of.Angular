import { Component, Directive } from '@angular/core';
// tslint:disble
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';

import { ViewPostsComponent } from './view-posts.component';

describe('ViewPostsComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewPostsComponent
      ],
      providers: [
        Store,
        ActivatedRoute,
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ViewPostsComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should run #ngOnInit()', async(() => {
    const result = component.ngOnInit();
    expect(result !== null).toBeTruthy();
  }));

});
