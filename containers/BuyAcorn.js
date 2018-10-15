import { connect } from 'react-redux';
import buyAcorns from '../actions/buyAcorns';
import AcornButton from '../components/button';

const mapStateToProps = () => ({ type: 'BUY' });

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(buyAcorns(1));
    },
  };
};

const BuyAcornContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AcornButton);

export default BuyAcornContainer;
