import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import App from 'components/App';

class AppContainer extends Component {

  static mapStateToProps(state) {
    return {
    };
  }

  render() {
    const {} = this.props;
    return (
      <div>
        <App />
      </div>
    );
  }
}

AppContainer.propTypes = {
};

export default connect(AppContainer.mapStateToProps)(AppContainer);
