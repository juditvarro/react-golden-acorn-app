import { connect } from 'react-redux';
import AcornDisplay from '../components/display';


const mapStateToProps = state => ({ display: state.acornReducer.counter });

const DisplayContainer = connect(mapStateToProps(AcornDisplay));

export default DisplayContainer;
