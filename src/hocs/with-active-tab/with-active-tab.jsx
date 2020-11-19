import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      const {defaultTab} = this.props;

      this.state = {
        activeTab: defaultTab,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(tabName) {
      this.setState({
        activeTab: tabName,
      });
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          activeTab={activeTab}
          onTabClick={this._handleTabClick}
        />
      );
    }
  }


  WithActiveTab.propTypes = {
    defaultTab: PropTypes.string.isRequired,
  };


  return WithActiveTab;
};


export default withActiveTab;
