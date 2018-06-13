import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class PlaceList extends Component {
  static defaultProps = {
    places: null
  };

  selectItem = (item) => {
    this.props.select(item);
  };

  metersToMiles = (meters) => (meters * 0.00062137).toFixed(2);

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Distance (miles)</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell numeric>Cost Rating</TableCell>
            <TableCell numeric>Thumbs Up</TableCell>
            <TableCell numeric>Thumbs Down</TableCell>
            <TableCell numeric>Yelp Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.places.map((place) => {
            const displayAddress = place.location.display_address.join(', ');
            const selected = place.id === this.props.selectedPlace.id;

            return (
              <TableRow
                key={place.id}
                hover
                onClick={() => this.selectItem(place)}
                selected={selected}
              >
                <TableCell component="th" scope="row">
                  {place.name}
                </TableCell>
                <TableCell>{displayAddress}</TableCell>
                <TableCell>{this.metersToMiles(place.distance)}</TableCell>
                <TableCell>{place.phone}</TableCell>
                <TableCell>{place.cost}</TableCell>
                <TableCell>{place.nm_rating}</TableCell>
                <TableCell>{place.nm_rating}</TableCell>
                <TableCell>{place.rating}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default PlaceList;
