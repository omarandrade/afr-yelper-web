import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import metersToMiles from '../shared/utils/metersToMiles';

class PlaceList extends Component {
  static defaultProps = {
    places: null
  };

  selectItem = (item) => {
    this.props.select(item);
  };

  render() {
    return (
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
          {this.props.places.map((place, index) => {
            const selected = place.yelpId === this.props.selectedPlace.yelpId;

            return (
              <TableRow
                key={place.yelpId}
                hover
                onClick={() => this.selectItem(place)}
                selected={selected}
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
    );
  }
}

export default PlaceList;
