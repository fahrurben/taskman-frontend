import React from 'react';
import PropTypes from 'prop-types';

function TextInput({
  inputRef, id, name, label, required, error,
}) {
  return (
    <div className="uk-margin uk-clearfix">
      {
        label
        && (
          <label className="uk-form-label" htmlFor={id}>
            {label}
            {
              required && <span className="uk-text-danger"> *</span>
            }
          </label>
        )
      }
      <div className="uk-form-controls">
        <input
          className="uk-input uk-form-small"
          type="text"
          placeholder={label}
          name={name}
          id={id}
          ref={inputRef}
        />
        {
          error && <div className="uk-form-label uk-text-danger">{error.message}</div>
        }
      </div>
    </div>
  );
}

TextInput.propTypes = {
  inputRef: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  required: false,
  label: null,
  error: '',
};

export default TextInput;
