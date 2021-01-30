import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UIkit from 'uikit';
import { createProject, resetCreateProject } from '../../redux-modules/project-create/actions';
import { FAILED, SUBMITTED } from '../../constant';

function Create() {
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
      UIkit.notification({ message: 'Create Project Success', status: 'success' });
      dispatch(resetCreateProject());
      history.push('/project');
    }
  }, [status]);

  useEffect(() => {
    dispatch(resetCreateProject());
  }, []);

  return (
    <div className="main-wrapper">
      <form className="uk-form-horizontal">
        <fieldset className="uk-fieldset">

          <legend className="uk-legend">Create Task</legend>

          <div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="name">
                Name
                <span className="uk-text-danger">*</span>
              </label>
              <div className="uk-form-controls">
                <input
                  ref={register()}
                  className="uk-input uk-form-small"
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="desc">Description</label>
              <div className="uk-form-controls">
                <input
                  ref={register()}
                  className="uk-input uk-form-small"
                  type="text"
                  placeholder="Description"
                  id="desc"
                  name="desc"
                />
              </div>
            </div>
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

export default Create;
