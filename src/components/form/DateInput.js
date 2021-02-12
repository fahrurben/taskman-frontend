import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import UIkit from 'uikit';
import ReactDatePicker from 'react-datepicker';

function DateInput({
  control, id, name, label, required, error, placeholder,
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
        <Controller
          control={control}
          name={name}
          render={({ onChange, onBlur, value }) => (
            <ReactDatePicker
              className="uk-input"
              dateFormat="dd-MM-yyyy"
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
            />
          )}
        />
        {
          error && <div className="uk-form-label uk-text-danger">{error.message}</div>
        }
      </div>
    </div>
  );
}

DateInput.propTypes = {
  control: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

DateInput.defaultProps = {
  required: false,
  label: null,
  placeholder: '',
  error: '',
};

export default DateInput;
