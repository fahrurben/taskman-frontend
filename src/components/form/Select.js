import React from 'react';
import PropTypes from 'prop-types';

function Select({
  inputRef,
  id, name, label, options, optionsValueField, optionsLabelField, required, error, placeholder,
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
        <select
          id={id}
          name={name}
          className="uk-select uk-form-small"
          ref={inputRef}
        >
          <option value="">{placeholder}</option>
          {
            options
            && options.map(
              (option) => (
                <option
                  key={option[optionsValueField]}
                  value={option[optionsValueField]}
                >
                  {option[optionsLabelField]}
                </option>
              ),
            )
          }
        </select>
        {
          error && <div className="uk-form-label uk-text-danger">{error.message}</div>
        }
      </div>
    </div>
  );
}

Select.propTypes = {
  inputRef: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  optionsValueField: PropTypes.string,
  optionsLabelField: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

Select.defaultProps = {
  required: false,
  label: null,
  placeholder: '',
  error: '',
  optionsValueField: '_id',
  optionsLabelField: 'name',
};

export default Select;
