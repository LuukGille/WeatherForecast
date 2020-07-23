import * as React from 'react';
import Weather from '../weather/index';
import Welcome from '../welcome/index';

function Navigation() {
  return (
        <React.Fragment>
          <div className="navigationContainer">
            <Welcome name="TypeScript"/>
            <Weather />
          </div>
        </React.Fragment>
  );
}

export default Navigation;
