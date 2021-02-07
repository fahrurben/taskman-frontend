import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UIkit from 'uikit';
import TextInput from '../../components/form/TextInput';
import { fetchInitialData, resetEditProject, updateProject } from '../../redux-modules/project-edit/actions';
import { SUBMITTED } from '../../constant';
import FormProject from '../../components/project/Form';
import { resetProjectAdd } from '../../redux-modules/project-add/actions';

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

    // Component will unmount
    return () => {
      dispatch(resetEditProject());
    };
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
      <FormProject
        title="Update Project"
        register={register}
        onFormSubmit={onFormSubmit}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Edit;
