import React, { Fragment } from 'react';

const Input = () => {

    return (
      <Fragment>
        <div className="inputField">
        <div className="searchbarSubmit">
                  <input placeholder="Type here..." className="searchbarInput" />
                  <input className="searchbarButton" type="submit" value=""/>
        </div>
        </div>
      </Fragment>
    );
};

  export default Input;