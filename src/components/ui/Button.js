import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, onClick, children }) {
  return (
    <button
      onClick={() => onClick}
      className="uk-button uk-button-primary uk-button-small"
      type="button"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
