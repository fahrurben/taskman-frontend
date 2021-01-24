import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { loginSubmit } from '../../actions/LoginActions';

function FormUpdate({ project }) {
  const {
    register, handleSubmit, errors, setValue,
  } = useForm();

  useEffect(() => {
    setValue('name', project.name);
    setValue('desc', project.desc);
  }, [project]);

  function onFormSubmit(e) {
    console.log('hi');
  }

  return (
    <div>
      <form className="uk-form-horizontal">
        <fieldset className="uk-fieldset">

          <legend className="uk-legend">Update</legend>

          <div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="name">
                Name
                <span className="uk-text-danger">*</span>
              </label>
              <div className="uk-form-controls">
                <input className="uk-input uk-form-small" type="text" placeholder="Name" name="name" ref={register()} />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="desc">Description</label>
              <div className="uk-form-controls">
                <input className="uk-input uk-form-small" type="text" placeholder="Description" name="desc" ref={register()} />
              </div>
            </div>

          </div>

        </fieldset>
      </form>
      <button
        onClick={(e) => console.log('hi')}
        type="button"
      >
        Save
      </button>
      <div className="uk-text-right">
        <div>
          <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    &nbsp;
          <button
            onClick={(e) => console.log('hi')}
            className="uk-button"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormUpdate;
