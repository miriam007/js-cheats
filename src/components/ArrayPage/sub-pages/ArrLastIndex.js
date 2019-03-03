import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrLastIndex extends React.Component {
  render() {
    return (
      <div>
        <h1>lastIndexOf()</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Searches the array for the specified item and returns its position.</p>
        <p className="subtext">The search will start at the specified position or at the end if no start position is specified.</p>
        <p className="subtext">The search will end at the beginning of the array.</p>
        <p className="subtext">Returns -1 if the item is not found.</p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.lastIndexOf(item,start)</p>
        <div className="sublabel">Example:</div>
        <div className="example">
        </div>
      </div>
    );
  }
}

export default ArrLastIndex;