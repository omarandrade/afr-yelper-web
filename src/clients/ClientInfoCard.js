import React from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { SelectField, TextField } from '../shared/form-fields';
import validators from '../shared/form-fields/validators';
import { COLORS_BY_GRADE } from '../styles/colors';

const ClientInfoCard = (props) => {
  const {
    client,
    handleSubmit,
    invalid,
    onSubmit,
    selectedCategory,
    submitting
  } = props;

  if (!client) {
    return null;
  }

  const clientHomeAddress = `${client.homeAddress} ${client.homeCity}, ${client.homeState}`;
  const clientWorkAddress = `${client.workAddress} ${client.workCity}, ${client.workState}`;

  return (
    <div style={styles.container}>
      <CardHeader
        avatar={
          <Avatar style={(COLORS_BY_GRADE[client.grade] || {})}>
            {client.grade}
          </Avatar>
        }
        title={client.name}
      />
      <CardContent>
        <div style={styles.contentContainer}>
          <div style={styles.contentLeft}>
            <Typography variant="body2">Home Phone</Typography>
            <Typography variant="body1">{client.homePhone}</Typography>
          </div>

          <div style={styles.contentRight}>
            <Typography variant="body2">Work Phone</Typography>
            <Typography variant="body1">{client.workPhone}</Typography>
          </div>
        </div>

        <div style={styles.contentContainer}>
          <div style={styles.contentLeft}>
            <Typography variant="body2">Home Address</Typography>
            <Typography variant="body1">{client.homeAddress}</Typography>
            <Typography variant="body1">{`${client.homeCity}, ${client.homeState}`}</Typography>
          </div>

          <div style={styles.contentRight}>
            <Typography variant="body2">Work Address</Typography>
            <Typography variant="body1">{client.workAddress}</Typography>
            <Typography variant="body1">{`${client.workCity}, ${client.workState}`}</Typography>
          </div>
        </div>

        <div style={styles.contentContainer}>
          <div style={styles.contentFull}>
            <Typography variant="body2">Notes</Typography>
            <Typography variant="body1">{client.notes}</Typography>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} style={styles.formContainer}>
          <div style={styles.cardContent}>
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
                label="Category of Event"
                name="category"
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

            <div style={styles.fieldContainerRow}>
              <div style={{ ...styles.contentFull, ...styles.topGutter }}>
                <Typography variant="body2">Client Interests</Typography>
                {client.clientLoyalty.map((currentLoyalty) => {
                  const selectedAnyCategory = selectedCategory === 'any';
                  if (!selectedAnyCategory && selectedCategory && selectedCategory !== currentLoyalty.category) {
                    return null;
                  }

                  return (
                    <Chip
                      key={`${currentLoyalty.category}-${currentLoyalty.label}`}
                      label={currentLoyalty.label}
                      style={styles.chip}
                    />
                  );
                })}
              </div>
            </div>
          </div>
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
      </CardContent>
    </div>
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
  chip: {
    margin: 2
  },
  container: {
    maxHeight: 'calc(100vh - 56px)',
    overflow: 'auto',
    width: '100%'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },
  contentFull: {
    flex: 1
  },
  contentLeft: {
    flex: 1,
    paddingRight: 4
  },
  contentRight: {
    flex: 1,
    paddingLeft: 4
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
  },
  topGutter: {
    marginTop: 8
  }
};

const ClientInfoCardFrom = reduxForm({
  form: 'ClientInfoCard'
})(ClientInfoCard);

const selector = formValueSelector('ClientInfoCard');
export default connect((state) => ({
  initialValues: {
    radius: 10
  },
  selectedCategory: selector(state, 'category')
}))(ClientInfoCardFrom);
