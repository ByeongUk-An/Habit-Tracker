import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <i className="fab fa-envira navbar-logo"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
        <span>테스트</span>
      </div>
    );
  }
}

export default Navbar;
