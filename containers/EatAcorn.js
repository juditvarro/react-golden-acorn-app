import { connect } from 'react-redux';
import eatAcorns from '../actions/eatAcorns';
import AcornButton from '../components/button';

const mapStateToProps = () => ({ type: 'EAT' });

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(eatAcorns(1));
    },
  };
};

const EatAcornContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AcornButton);

export default EatAcornContainer;
