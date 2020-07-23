import * as React from 'react';
import TodoList from '../todo/index';

export interface Props {
    name: string;
  }

function Welcome({ name }: Props) {

  return (
        <React.Fragment>
            <div className="welcome">
                <div className="welcomeContainer">
                  <div>
                    <h1 className="welcomeTitle">City Weather Forecast</h1>
                    <p className="welcomeText">
                      Want to know what the weather is in different cities? Then you are on the right page! Search for 
                      your favorite city and see what the Forecast is for this week. Hope you enjoy the weather!
                    </p>
                    <p className="welcomeText">
                      You can also create a to-do list for yourself. Try to add something below.
                    </p>
                    <TodoList />
                    </div>
                </div>
            </div>
        </React.Fragment>
  );
}

export default Welcome;
