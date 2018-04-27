import { Action, State, StateContext } from '@ngxs/store';

import { DecrementCount, IncrementCount } from './home.actions';

export interface HomeStateModel {
  count: number;
}

@State<HomeStateModel>({
  name: 'count',
  defaults: {
    count: 0
  }
})
export class HomeState {
  @Action(IncrementCount)
  incrementCount({ getState, setState }: StateContext<HomeStateModel>) {
    const state = getState();
    setState({
      ...state,
      count: state.count + 1
    });
  }

  @Action(DecrementCount)
  decrementCount({ getState, setState }: StateContext<HomeStateModel>) {
    const state = getState();

    setState({
      ...state,
      count: state.count - 1
    });
  }
}
