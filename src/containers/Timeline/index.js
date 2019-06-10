import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch } from 'react-router-dom';

import * as UserActions from './../../actions/user';
import * as UIActions from './../../actions/ui';

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.getUserData = queryData => {
      // this.props.actions.getUserData(queryData);
    }
  }

  componentWillReceiveProps(nextProps) {
    // if (!this.props.CurrencyRateError && nextProps.CurrencyRateError) {
    //   this.props.actions.setUIData(['toastr'], {
    //     isActive: true,
    //     text: nextProps.CurrencyRateError
    //   });
    // }
  }

  componentDidMount() {

  }

  render() {
    const momentData = this.props.UserData.get('moment_history');

    if (!momentData) {
      return null;
    }

    return (
      <div className="shell__content">
        <h3 className="shell__content__title">Timeline:</h3>
        <div className="shell__content__body">
          <div className="timeline">
            {momentData.map((item, index) => (
              <div key={index} className="timeline__item">
                <div className="timeline__item__time">
                  {item.get('start')}
                </div>
                <div className="timeline__item__content">
                  <div className="timeline__item__content__duration">
                    Duration: 2 hours 24 minutes
                  </div>
                  <div className="timeline__item__content__mode">
                    Transport mode: Tram
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ User, UI }) {
  return {
    UserData: User.getIn(['user', 'data']),
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    ...UserActions,
    ...UIActions
  };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
