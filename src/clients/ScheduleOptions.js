import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Divider,
  Chip,
  IconButton
} from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import NearMe from '@material-ui/icons/NearMe';
import { TextField } from '../shared/form-fields';
import validators from '../shared/form-fields/validators';

function setType(e) {
  console.log(e.target.innerText);
}

function setPrice(e) {
  console.log(e.target.innerText);
}

const ScheduleOptions = (props) => {
  const { client, handleSubmit, onSubmit } = props;

  const homeText = `Schedule at ${client.name}'s home`;
  const officeText = 'Schedule at office';
  return (
    <div>
      <Divider />
      <div style={styles.scheduleShortCutContainer}>
        <p>{homeText}</p>
        <IconButton><Send /></IconButton>
      </div>
      <div style={styles.scheduleShortCutContainer}>
        <p>{officeText}</p>
        <IconButton><Send /></IconButton>
      </div><Divider />
      <h4>Meet somewhere else</h4>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.formContainer}>
        <Field
          component={TextField}
          fullWidth
          label="Max Miles from Client Work"
          name="milesFromWork"
          style={styles.field}
          type="number"
          validate={validators.required}
        />
        <Field
          component={TextField}
          fullWidth
          label="Max Miles from Client Home"
          name="milesFromHome"
          style={styles.field}
          type="number"
          validate={validators.required}
        />
      </form>
      <div style={styles.chipOptionContainer}>
        <div style={styles.chipOption}>
          <p>Type</p>
          <div style={styles.chipContainer}>
            <Chip label="Any" onClick={setType} style={styles.chips} />
            <Chip label="Coffee" onClick={setType} style={styles.chips} />
            <Chip label="Drinks" onClick={setType} style={styles.chips} />
            <Chip label="Entertainment" onClick={setType} style={styles.chips} />
          </div>
        </div>
        <div style={styles.chipOption}>
          <p>Cost</p>
          <div style={styles.chipContainer}>
            <Chip label="$" onClick={setPrice} style={styles.chips} value="$" />
            <Chip label="$$" onClick={setPrice} style={styles.chips} value="$$" />
            <Chip label="$$$" onClick={setPrice} style={styles.chips} value="$$$" />
            <Chip label="$$$$" onClick={setPrice} style={styles.chips} value="$$$$" />
          </div>
        </div>
      </div>
      <div style={styles.submitSearchControl}>
        <h4>Find a place</h4>
        <IconButton><NearMe /></IconButton>
      </div>
    </div>
  );
};

const styles = {
  chipContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  chipOption: {
    margin: '0px 5px'
  },
  chipOptionContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  chips: {
    margin: '0px 2px'
  },
  field: {
    margin: '0px 5px',
    padding: '0px 2px'
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '10px 0px'
  },
  scheduleShortCutContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  submitSearchControl: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px 0px 0px 0px'
  }
};

export default reduxForm({
  form: 'PlaceOptionsCard'
})(ScheduleOptions);
