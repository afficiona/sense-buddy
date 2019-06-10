import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './../components/Header';
import MessageBox from './../components/MessageBox';
import Footer from './../components/Footer';
import Toastr from './Toastr';
import Timeline from './Timeline/Loadable';
import Profile from './Profile/Loadable';

import * as ExchangeActions from './../actions/user';
import * as UIActions from './../actions/ui';

class App extends Component {
  constructor(props) {
    super(props);

    this.getUserData = queryData => {
      this.props.actions.getUserData(queryData);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.CurrencyRateError && nextProps.CurrencyRateError) {
      this.props.actions.setUIData(['toastr'], {
        isActive: true,
        text: nextProps.CurrencyRateError
      });
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  render() {
    const shellClasses = classnames('shell', {
      'loader': this.props.IsFetchingUserData,
    });
    return (
      <div className="app">
        <div className="app__container">
          <div className={shellClasses}>

            <Header getUserData={this.getUserData} />

            {(() => {
              if (this.props.IsFetchingUserData) {
                return 'loading...';
              }

              if (this.props.UserError) {
                return (
                  <div className="shell__content">
                    <MessageBox text={this.props.UserError} />
                  </div>
                );
              }

              return (
                <Switch>
                  <Route exact path="/" component={Timeline} />
                  <Route exact path="/profile" component={Profile} />
                </Switch>
              );
            })()}

            <Footer history={this.props.history} />
            
            <Toastr danger/>

          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ User, UI }) {
  return {
    IsFetchingUserData: User.getIn(['user', 'isFetching']),
    UserData: User.getIn(['user', 'data']),
    UserError: User.getIn(['user', 'error']),
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    ...ExchangeActions,
    ...UIActions
  };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
