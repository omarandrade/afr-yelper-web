import React from 'react';
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { COLORS_BY_GRADE } from '../styles/colors';

const sortGrades = (first, second) => {
  if (!first) {
    return 1;
  } else if (!second) {
    return -1;
  }

  if (first < second) {
    return -1;
  } else if (first > second) {
    return 1;
  }

  return 0;
};

const sortClientsByLastContact = (first, second) => {
  if (first.lastContacted < second.lastContacted) {
    return -1;
  } else if (first.lastContacted > second.lastContacted) {
    return 1;
  }

  return 0;
};

const ClientsList = ({ clients = [], onClickItem }) => {
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
      {Object.keys(clientsByGrade).sort(sortGrades).map((currentGrade) => (
        <li key={`grade-${currentGrade}`}>
          <ul style={styles.subheaderContainer}>
            <ListSubheader style={(COLORS_BY_GRADE[currentGrade] || {})}>
              {currentGrade ? `Grade ${currentGrade}` : 'No Grade'}
            </ListSubheader>
            {clientsByGrade[currentGrade].sort(sortClientsByLastContact).map((currentClient) => {
              const clientLocation = `${currentClient.homeCity}, ${currentClient.homeState}`;
              const lastContactedFormatted = moment(currentClient.lastContacted).format('MMM D, YYYY');

              return (
                <ListItem key={currentClient.id} button onClick={() => onClickItem(currentClient)}>
                  <Avatar style={(COLORS_BY_GRADE[currentGrade] || {})}>
                    {currentClient.grade}
                  </Avatar>
                  <ListItemText
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
    maxHeight: 'calc(100vh - 56px)',
    overflow: 'auto',
    padding: 0,
    position: 'relative',
    width: '100%'
  },
  subheaderContainer: {
    padding: 0
  }
};

export default ClientsList;
