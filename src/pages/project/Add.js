import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UIkit from 'uikit';
import TextInput from '../../components/form/TextInput';
import FormProject from '../../components/project/Form';
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
      <FormProject
        title="Create Project"
        register={register}
        onFormSubmit={onFormSubmit}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Add;
