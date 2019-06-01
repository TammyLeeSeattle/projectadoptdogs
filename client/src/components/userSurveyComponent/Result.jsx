import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

function Result(props) {
    return (
      <CSSTransition
        className="container result"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div>
          These are some breeds you might like!: <h4>{props.quizResult}</h4>!
        </div>
      </CSSTransition>
    );
  }
  
  Result.propTypes = {
    quizResult: PropTypes.string.isRequired
  };
  
export default Result;