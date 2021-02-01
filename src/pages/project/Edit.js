import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UIkit from 'uikit';
import TextInput from '../../components/form/TextInput';
import { fetchInitialData, resetEditProject, updateProject } from '../../redux-modules/project-edit/actions';
import { SUBMITTED } from '../../constant';

function Edit() {
  const { register, handleSubmit, setValue } = useForm();

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.projectEdit.status);
  const response = useSelector((state) => state.projectEdit.response);
  const project = useSelector((state) => state.projectEdit.project);

  const onFormSubmit = (data) => {
    dispatch(updateProject(id, data));
  };

  useEffect(() => {
    dispatch(resetEditProject());
    dispatch(fetchInitialData(id));
  }, []);

  useEffect(() => {
    if (project !== null) {
      setValue('name', project.name);
      setValue('desc', project.desc);
    }
  }, [project]);

  useEffect(() => {
    if (status === SUBMITTED) {
      UIkit.notification({ message: 'Update Project Success', status: 'success' });
      dispatch(resetEditProject());
      history.push('/project');
    }
  }, [status]);

  return (
    <div className="main-wrapper">
      <form className="uk-form-horizontal">
        <fieldset className="uk-fieldset">

          <legend className="uk-legend">Edit Task</legend>
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

export default Edit;
