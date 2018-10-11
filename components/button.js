import React from 'react';
import PropTypes from 'prop-types';

const AcornButton = ({ event, text }) => <button type="button" onClick={event}>{text}</button>;


AcornButton.propTypes = {
  event: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default AcornButton;
