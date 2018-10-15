import React from 'react';
import BuyAcornContainer from '../containers/BuyAcorn';
import EatAcornContainer from '../containers/EatAcorn';
import DisplayContainer from '../containers/DisplayAcorn';

const App = () => (
  <div>
    <BuyAcornContainer />
    <DisplayContainer />
    <EatAcornContainer />
  </div>
);

export default App;
