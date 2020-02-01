import Button from '@material-ui/core/Button';
import { TextField } from '@components/TextField';
import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { makeStyles, Theme } from '@material-ui/core/styles';
// import { email, required } from 'redux-form-validators';

export interface ICreateFormProps {
  buttonText?: string;
  rows: Array<{ name?: string; title: string; path: any; isNumber?: boolean }>;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const doNothing = i => i;
const parseNumber = i => parseFloat(i);
const formatNumber = i => (i ? i.toString() : '');

export const CreateFormJsx: React.FC<ICreateFormProps & InjectedFormProps<{}, ICreateFormProps>> = ({
  handleSubmit,
  pristine,
  submitting,
  invalid,
  rows,
}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      {rows.map(({ name, path, isNumber }) => (
        <Field
          key={name || path}
          name={name || path}
          component={TextField}
          parse={isNumber ? parseNumber : doNothing}
          format={isNumber ? formatNumber : doNothing}
        />
      ))}
      <Button type="submit" disabled={pristine || submitting || invalid} color="primary" variant="contained" fullWidth>
        <span>Создать</span>
      </Button>
    </form>
  );
};
