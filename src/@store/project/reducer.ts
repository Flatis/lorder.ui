import { LOCATION_CHANGE } from 'connected-react-router';
import { Action, handleActions } from 'redux-actions';

import { selectProject } from './actions';

interface IS {
  selected?: number;
}
interface IChangePayload {
  pathname: string;
}
type Selected = number;
type P = IChangePayload | Selected;

const locationChangeHandler = (state: IS, { payload }: Action<IChangePayload>) => {
  if (!payload) {
    throw new Error('Project Reducer, locationChangeHandler Error: payload required');
  }
  const matches = payload && payload.pathname && payload.pathname.match(/^\/projects\/(\d+)/);
  if (matches && matches[1]) {
    return { selected: parseInt(matches[1], 0) };
  }
  return state;
};

const selectProjectHandler = (state: IS, { payload }: Action<Selected>) => {
  return { selected: payload };
};

export const project = handleActions<IS, any>(
  {
    [LOCATION_CHANGE]: locationChangeHandler,
    [selectProject.toString()]: selectProjectHandler,
  },
  {
    selected: undefined,
  }
);