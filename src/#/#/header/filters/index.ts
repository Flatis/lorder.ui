import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { fetchProjectParts, projectParts } from '#/@store/project';
import { projectMembersAsUsers } from '#/@store/projects';
import { changeFilter, filteredMembers, searchTerm, toggleMember, toggleProjectPart } from '#/@store/tasksFilter';
import { projectPart } from '#/@store/tasksFilter';
import { isBoardFilterOpened, toggleUiSetting } from '#/@store/ui';

import { FiltersTsx } from './filters';

const mapState = createStructuredSelector({
  filteredMembers,
  isBoardFilterOpened,
  members: projectMembersAsUsers,
  projectPart,
  projectParts,
  searchTerm,
} as any);

const mapDispatch = {
  changeFilter,
  fetchProjectParts,
  toggleMember,
  toggleProjectPart,
  toggleUiSetting,
};

export default connect(mapState, mapDispatch)(FiltersTsx);