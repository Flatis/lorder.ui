import React from 'react';

import { PatchTaskForm } from '@domains/@common/TaskForm';

export interface ITaskProps {
  classes: any;
}

export class TaskTsx extends React.Component<ITaskProps, {}> {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <PatchTaskForm {...rest} />
      </div>
    );
  }
}
