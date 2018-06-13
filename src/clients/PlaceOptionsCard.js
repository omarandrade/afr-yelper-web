import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectField, TextField } from '../shared/form-fields';
import validators from '../shared/form-fields/validators';

const PlaceOptionsCard = (props) => {
  const { client, handleSubmit, invalid, onSubmit, submitting } = props;

  return (
    <Card style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.formContainer}>
        <CardContent style={styles.cardContent}>
          <div style={styles.fieldContainerLeft}>
            <Field
              component={TextField}
              fullWidth
              label="Max Miles from Client Home"
              name="milesFromHome"
              type="number"
              validate={validators.required}
            />
            <Field
              component={SelectField}
              label="Cost of Event"
              name="cost"
              style={styles.formField}
              validate={validators.required}
            >
              <MenuItem value="$">$</MenuItem>
              <MenuItem value="$$">$$</MenuItem>
              <MenuItem value="$$$">$$$</MenuItem>
              <MenuItem value="$$$$">$$$$</MenuItem>
            </Field>
          </div>
          <div style={styles.fieldContainerRight}>
            <Field
              component={TextField}
              fullWidth
              label="Max Miles from Client Work"
              name="milesFromWork"
              type="number"
              validate={validators.required}
            />
            <Field
              component={SelectField}
              label="Type of Event"
              name="type"
              style={styles.formField}
              validate={validators.required}
            >
              <MenuItem value="any">Any</MenuItem>
              <MenuItem value="coffee">Coffee</MenuItem>
              <MenuItem value="drinks">Drinks</MenuItem>
              <MenuItem value="entertainment">Entertainment</MenuItem>
            </Field>
          </div>
        </CardContent>
        <CardActions style={styles.cardActions}>
          <Button
            color="primary"
            disabled={!client || invalid || submitting}
            type="submit"
          >
            Submit
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
  cardContent: {
    display: 'flex',
    flexDirection: 'row'
  },
  container: {
    height: 'calc(40vh - 32px)'
  },
  fieldContainerLeft: {
    flex: 1,
    paddingRight: 8
  },
  fieldContainerRight: {
    flex: 1,
    paddingLeft: 8
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  },
  formField: {
    width: '100%'
  },
  title: {
    fontSize: 14,
    marginBottom: 16
  }
};

export default reduxForm({
  form: 'PlaceOptionsCard'
})(PlaceOptionsCard);
