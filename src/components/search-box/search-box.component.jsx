import './search-box.styles.css'

import { Component } from "react";
import PropTypes from 'prop-types';

export default class SearchBox extends Component {
  render() {
    return (
      <input className={`search-box ${this.props.className}`}
          type='search'
          placeholder={this.props.placeholder}
          onChange={this.props.onChange} />
    );
  }
}

SearchBox.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string
}
