import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectField, TextField } from '../shared/form-fields';
import validators from '../shared/form-fields/validators';

const PlaceOptionsCard = (props) => {
  const { client, handleSubmit, invalid, onSubmit, submitting } = props;

  if (!client) {
    return null;
  }

  const clientHomeAddress = `${client.homeAddress} ${client.homeCity}, ${client.homeState}`;
  const clientWorkAddress = `${client.workAddress} ${client.workCity}, ${client.workState}`;

  return (
    <Card style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.formContainer}>
        <CardContent style={styles.cardContent}>
          <div style={styles.fieldContainerRow}>
            <Field
              component={SelectField}
              label="Client Location"
              name="location"
              style={styles.formField}
              validate={validators.required}
            >
              <ListItem ContainerComponent="div" value={clientHomeAddress}>
                <ListItemText
                  primary={clientHomeAddress}
                  secondary="Home"
                />
              </ListItem>
              <ListItem value={clientWorkAddress}>
                <ListItemText
                  primary={clientWorkAddress}
                  secondary="Work"
                />
              </ListItem>
            </Field>
          </div>
          <div style={styles.fieldContainerRow}>
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
          <div style={styles.fieldContainerRow}>
            <Field
              component={SelectField}
              label="Type of Event"
              name="type"
              style={{ ...styles.formField, ...styles.formFieldLeft }}
              validate={validators.required}
            >
              <MenuItem value="any">Any</MenuItem>
              <MenuItem value="coffee">Coffee</MenuItem>
              <MenuItem value="drinks">Drinks</MenuItem>
              <MenuItem value="entertainment">Entertainment</MenuItem>
            </Field>
            <Field
              component={TextField}
              fullWidth
              label="Client Radius (mi)"
              name="radius"
              type="number"
              validate={validators.required}
            />
          </div>
        </CardContent>
        <CardActions style={styles.cardActions}>
          <Button
            color="primary"
            disabled={invalid || submitting}
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
    flexDirection: 'column'
  },
  container: {
    height: 'calc(40vh - 32px)'
  },
  fieldContainerRow: {
    display: 'flex',
    flexDirection: 'row'
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
  formFieldLeft: {
    paddingRight: 8
  }
};

export default reduxForm({
  form: 'PlaceOptionsCard'
})(PlaceOptionsCard);
