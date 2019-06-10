import React, { Component } from 'react';
import classnames from 'classnames';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

import Button from './../Button';

/**
 *
 */
class Footer extends Component {
  render () {
    return (
      <div className="shell__footer">
        <div className="shell__footer__actions__wrapper">
          <Button transparent text="Timeline" onClick={() => this.props.history.push('/')} />
          <Button primary text="Profile" onClick={() => this.props.history.push('/profile')} />
        </div>

      </div>
    );
  }
}

export default Footer;
