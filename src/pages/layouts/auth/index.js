import React from 'react';
import PropTypes from 'prop-types';

export default function AuthLayout({ children }) {
  console.log(children);
  return (
    <>{children}</>
  );
}
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
