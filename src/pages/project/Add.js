import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UIkit from 'uikit';
import TextInput from '../../components/form/TextInput';
import { createProject, resetProjectAdd } from '../../redux-modules/project-add/actions';
import { FAILED, SUBMITTED } from '../../constant';

function Add() {
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.projectCreate.status);
  const response = useSelector((state) => state.projectCreate.response);

  const onFormSubmit = (data) => {
    dispatch(createProject(data));
  };

  useEffect(() => {
    if (response.status === FAILED) {
      UIkit.notification({ message: response.message, status: 'danger' });
    }
  }, [response]);

  useEffect(() => {
    if (status === SUBMITTED) {
      UIkit.notification({ message: 'Add Project Success', status: 'success' });
      dispatch(resetProjectAdd());
      history.push('/project');
    }
  }, [status]);

  useEffect(() => {
    dispatch(resetProjectAdd());
  }, []);

  return (
    <div className="main-wrapper">
      <form className="uk-form-horizontal">
        <fieldset className="uk-fieldset">

          <legend className="uk-legend">Create Project</legend>
          <div>
            <TextInput id="name" name="name" label="Name" inputRef={register} />
            <TextInput id="desc" name="desc" label="Description" inputRef={register} />
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
    </div>
  );
}

export default Add;
