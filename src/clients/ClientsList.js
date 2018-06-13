import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ClientsList = ({ clients = [] }) => (
  <div className={styles.root}>
    <List component="nav">
      {clients.map((currentClient) => (
        <ListItem key={currentClient.id} button>
          <ListItemText inset primary={currentClient.name} />
        </ListItem>
      ))}
    </List>
  </div>
);

const styles = {
  root: {
    width: '100%'
  }
};

export default ClientsList;
