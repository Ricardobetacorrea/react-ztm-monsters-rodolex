import './search-box.styles.css'

import PropTypes from 'prop-types';

const SearchBox = ({ className, placeholder, onChange }) => {
  return (
    <input className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChange} />
  );
}

SearchBox.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

export default SearchBox;