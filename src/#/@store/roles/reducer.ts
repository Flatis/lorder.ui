import { handleActions } from 'redux-actions';
import get from 'lodash/get';

import { IDownloadList, IMeta, IUserRole } from '@types';
import { createRole, deleteRole, fetchRoles } from './actions';
import { DownloadList } from '../@common/entities';
import { UserRole } from './UserRole';

type S = IDownloadList<IUserRole>;
type M = IMeta<any>;

const fetchRolesHandler = s => {
  return s.startLoading();
};

const fetchRolesSuccessHandler = (s, { payload }) => {
  return s.finishLoading(payload);
};

const fetchRolesFailHandler = s => {
  return s.stopLoading();
};

const createRoleHandler = (s, { payload }) => {
  return s.addItem(get(payload, ['request', 'data']));
};

const createRoleSuccessHandler = (s, { payload }) => {
  return s.stopLoading();
};

const createRoleFailHandler = s => {
  return s.stopLoading();
};

const deleteRoleHandler = (s, { payload }) => {
  console.log('deleteRoleHandler', payload);
  const index = s.list.findIndex(el => el.id === payload.roleId);
  if (index !== -1) {
    return s.removeItem(index);
  }
  return s;
};

const deleteRoleSuccessHandler = (s, { payload }) => {
  return s.stopLoading();
};

const deleteRoleFailHandler = s => {
  return s.stopLoading();
};

export const roles = handleActions<S, any, M>(
  {
    [fetchRoles.toString()]: fetchRolesHandler,
    [fetchRoles.success]: fetchRolesSuccessHandler,
    [fetchRoles.fail]: fetchRolesFailHandler,

    [createRole.toString()]: createRoleHandler,
    [createRole.success]: createRoleSuccessHandler,
    [createRole.fail]: createRoleFailHandler,

    [deleteRole.toString()]: deleteRoleHandler,
    [deleteRole.success]: deleteRoleSuccessHandler,
    [deleteRole.fail]: deleteRoleFailHandler,
  },
  new DownloadList(UserRole)
);
