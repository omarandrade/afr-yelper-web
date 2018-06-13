import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { TextField } from '../shared/form-fields';
import validators from '../shared/form-fields/validators';

const Login = (props) => {
  const { handleSubmit, invalid, onSubmit, submitting } = props;

  return (
    <Card style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.formContainer}>
        <CardContent>
          <Field
            component={TextField}
            fullWidth
            label="Username"
            name="username"
            validate={validators.required}
          />
          <Field
            component={TextField}
            fullWidth
            label="Password"
            name="password"
            type="password"
            validate={validators.required}
          />
        </CardContent>
        <CardActions style={styles.cardActions}>
          <Button
            color="primary"
            disabled={invalid || submitting}
            type="submit"
          >
            Login
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

const styles = {
  cardActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  }
};

export default reduxForm({
  form: 'Login'
})(Login);
