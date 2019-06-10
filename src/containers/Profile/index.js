import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch } from 'react-router-dom';

import * as UserActions from './../../actions/user';
import * as UIActions from './../../actions/ui';

class Profile extends Component {
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
    const durationData = this.props.DurationDataMap && this.props.DurationDataMap.toJSON();
    const distanceData = this.props.DistanceDataMap && this.props.DistanceDataMap.toJSON();

    return (
      <div className="shell__content">

        {durationData && (
          <div className="shell__content__section">
            <h3 className="shell__content__section__title">
              Duration
            </h3>
            <div className="shell__content__section__content">
              {Object.keys(durationData).map(key => (
                <div key={key} className="shell__content__section__content__item">
                  <p>{key}</p>
                  <p>{durationData[key]}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {distanceData && (
          <div className="shell__content__section">
            <h3 className="shell__content__section__title">
              Distance
            </h3>
            <div className="shell__content__section__content">
              {Object.keys(distanceData).map(key => (
                <div key={key} className="shell__content__section__content__item">
                  <p>{key}</p>
                  <p>{distanceData[key]}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    );
  }
}

function mapStateToProps({ User, UI }) {
  return {
    DurationDataMap: User.getIn(['user', 'data', 'duration']),
    DistanceDataMap: User.getIn(['user', 'data', 'distance']),
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
