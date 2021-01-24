import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

function FormCreate() {
  const {
    register, handleSubmit, errors, getValues,
  } = useForm();

  return (
    <div>
      <form className="uk-form-horizontal">
        <fieldset className="uk-fieldset">

          <legend className="uk-legend">Create</legend>

          <div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="name">
                Name
                <span className="uk-text-danger">*</span>
              </label>
              <div className="uk-form-controls">
                <input className="uk-input uk-form-small" type="text" placeholder="Name" name="name" />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="desc">Description</label>
              <div className="uk-form-controls">
                <input className="uk-input uk-form-small" type="text" placeholder="Description" name="desc" />
              </div>
            </div>

          </div>

        </fieldset>
      </form>
      <div className="uk-text-right">
        <div>
          <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    &nbsp;
          <a
            href="#"
            onClick={(e) => console.log('hi')}
            className="uk-button"
            type="button"
          >
            Save
          </a>
        </div>
      </div>
    </div>
  );
}

export default FormCreate;
