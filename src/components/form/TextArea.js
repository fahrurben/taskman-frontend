import React from 'react';
import PropTypes from 'prop-types';

function TextArea({
  inputRef, id, name, label, required, error, placeholder,
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
        <textarea
          style={{ minHeight: '80px' }}
          className="uk-input uk-form-small"
          type="text"
          placeholder={placeholder}
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

TextArea.propTypes = {
  inputRef: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

TextArea.defaultProps = {
  required: false,
  label: null,
  placeholder: '',
  error: '',
};

export default TextArea;
