import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
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
  },
  '': {
    backgroundColor: grey[500],
    color: 'inherit'
  }
};

export {
  COLORS_BY_GRADE
};
