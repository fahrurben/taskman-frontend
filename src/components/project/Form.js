import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextInput from '../form/TextInput';

function Form({
  title, register, errors, handleSubmit, onFormSubmit,
}) {
  return (
    <>
      <form className="uk-form-horizontal">
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">{title}</legend>
          <div>
            <TextInput
              id="name"
              name="name"
              label="Name"
              required="true"
              inputRef={register({ required: { value: true, message: 'Name is required' } })}
              error={errors.name}
            />
            <TextInput id="desc" name="desc" label="Description" inputRef={register({})} />
          </div>
        </fieldset>
      </form>
      <div className="uk-text-right">
        <div>
          <Link class="uk-button uk-button-default uk-modal-close" type="button" to="/project">Cancel</Link>
          &nbsp;
          <button
            onClick={handleSubmit(onFormSubmit)}
            className="uk-button uk-button-primary"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
