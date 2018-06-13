import React from 'react';
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

const COLORS_BY_GRADE = {
  A: {
    backgroundColor: green[500],
    color: 'inherit'
  },
  B: {
    backgroundColor: blue[500],
    color: '#FFFFFF'
  },
  C: {
    backgroundColor: yellow[500],
    color: 'inherit'
  },
  D: {
    backgroundColor: orange[500],
    color: 'inherit'
  },
  F: {
    backgroundColor: red[500],
    color: '#FFFFFF'
  }
};

const sortClientsByLastContact = (first, second) => (
  moment(first.lastContacted).isSameOrBefore(moment(second.lastContacted))
);

const ClientsList = ({ clients = [] }) => {
  const clientsByGrade = clients.reduce((currentClientsByGrade, currentClient) => {
    const copiedClientsByGrade = { ...currentClientsByGrade };

    if (copiedClientsByGrade[currentClient.grade]) {
      copiedClientsByGrade[currentClient.grade].push(currentClient);
    } else {
      copiedClientsByGrade[currentClient.grade] = [currentClient];
    }

    return copiedClientsByGrade;
  }, {});

  return (
    <List style={styles.list} subheader={<li />}>
      {Object.keys(clientsByGrade).sort().map((currentGrade) => (
        <li key={`grade-${currentGrade}`}>
          <ul style={styles.subheaderContainer}>
            <ListSubheader style={(COLORS_BY_GRADE[currentGrade] || {})}>
              {`Grade ${currentGrade}`}
            </ListSubheader>
            {clientsByGrade[currentGrade].sort(sortClientsByLastContact).map((currentClient) => {
              const clientLocation = `${currentClient.city}, ${currentClient.state}`;
              const lastContactedFormatted = moment(currentClient.lastContacted).format('MMM D, YYYY');

              return (
                <ListItem key={currentClient.id} button>
                  <Avatar style={(COLORS_BY_GRADE[currentGrade] || {})}>
                    {currentClient.grade}
                  </Avatar>
                  <ListItemText
                    inset
                    primary={currentClient.name}
                    secondary={`${clientLocation} · ${lastContactedFormatted}`}
                  />
                </ListItem>
              );
            })}
          </ul>
        </li>
      ))}
    </List>
  );
};

const styles = {
  list: {
    height: '100vh',
    overflow: 'auto',
    position: 'relative',
    width: '100%'
  },
  subheaderContainer: {
    padding: 0
  }
};

export default ClientsList;
