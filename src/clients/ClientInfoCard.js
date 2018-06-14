import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { COLORS_BY_GRADE } from '../styles/colors';

const ClientInfoCard = ({ client }) => {
  if (!client) {
    return null;
  }

  return (
    <Card style={styles.container}>
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
      </CardContent>
    </Card>
  );
};

const styles = {
  container: {
    maxHeight: 'calc(60vh - 32px)',
    overflow: 'auto'
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
  title: {
    fontSize: 14,
    marginBottom: 16
  }
};

export default ClientInfoCard;
