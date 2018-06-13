import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PlaceOptionsCard = () => (
  <Card style={styles.container}>
    <CardContent>
      <Typography variant="headline">Options</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Submit</Button>
    </CardActions>
  </Card>
);

const styles = {
  container: {
    height: 'calc(40vh - 32px)'
  },
  title: {
    fontSize: 14,
    marginBottom: 16
  }
};

export default PlaceOptionsCard;
