import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { DecrementCount, IncrementCount } from './home.actions';
import { HomeState, HomeStateModel } from './home.store';

// tslint:disable-next-line:import-blacklist
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @Select(HomeState) count$: Observable<HomeStateModel>;
  state: HomeStateModel;
  storeSub: Subscription;

  constructor(private store: Store, private chr: ChangeDetectorRef) {}

  ngOnInit() {
    this.storeSub = this.count$.subscribe((state: HomeStateModel) => {
      this.state = { ...state };
      this.chr.detectChanges();
    });
  }

  ngOnDestroy() {
    // ensure that we unsubscribe
    this.storeSub.unsubscribe();
  }

  // https://ngxs.gitbook.io/ngxs/concepts/store
  addOneToCount() {
    this.store.dispatch(new IncrementCount());
  }

  subtractOneFromCount() {
    this.store.dispatch(new DecrementCount());
  }
}
