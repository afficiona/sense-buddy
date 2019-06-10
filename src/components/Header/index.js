import React, { Component } from 'react';
import classnames from 'classnames';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

import Button from './../Button';

/**
 * Header component: The top fold component which shows source
 * and target currencies. Has a provision to set source and
 * target to different currencies. User can also check and
 * update the balances of the currencioes in the active pocket.
 */
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null
    }

    this.handleDateChange = (field, date) => {
      this.setState({
        [field]: date
      }, () => {
        this.props.getUserData({
          start_date: this.state.startDate,
          end_date: this.state.endDate,
        });
      });
    }
  }

  /**
   * 
   */
  componentWillMount() {
    
  }

  render () {
    return (
      <div className="shell__header">

        {/* Title */}
        <div className="shell__header__actions__wrapper">
          <DatePicker
            selected={this.state.startDate}
            onChange={date => this.handleDateChange('startDate', date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="Start date"
          />
          <DatePicker
            selected={this.state.endDate}
            onChange={date => this.handleDateChange('endDate', date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="End date"
          />
        </div>

      </div>
    );
  }
}

export default Header;
