import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import metersToMiles from '../shared/utils/metersToMiles';

const PlaceList = ({ onClickItem, places, selectedPlace }) => (
  <div style={styles.container}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell numeric padding="none">
            #
          </TableCell>
          <TableCell>Location</TableCell>
          <TableCell padding="dense">Phone</TableCell>
          <TableCell numeric padding="dense">
            Distance (miles)
          </TableCell>
          <TableCell numeric padding="dense">
            Cost
          </TableCell>
          <TableCell numeric padding="dense">
            NM Rating
          </TableCell>
          <TableCell numeric padding="dense">
            Yelp Rating
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {places.map((place, index) => {
          const selected = selectedPlace && place.yelpId === selectedPlace.yelpId;

          return (
            <TableRow
              key={place.yelpId}
              hover
              onClick={() => onClickItem(place)}
              selected={selected}
              style={styles.tableRow}
            >
              <TableCell component="th" numeric padding="none" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>
                {place.name} <br />
                {place.display_address}
              </TableCell>
              <TableCell padding="dense">{place.phone}</TableCell>
              <TableCell numeric padding="dense">
                {metersToMiles(place.distance)}
              </TableCell>
              <TableCell numeric padding="dense">
                {place.display_cost}
              </TableCell>
              <TableCell numeric padding="dense">
                {place.nmReview}
              </TableCell>
              <TableCell numeric padding="dense">
                {place.rating}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </div>
);

const styles = {
  container: {
    maxHeight: 'calc(100vh - 56px)',
    overflow: 'auto'
  },
  tableRow: {
    cursor: 'pointer'
  }
};

export default PlaceList;
