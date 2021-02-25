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
  const { register, handleSubmit, errors: formErrors } = useForm();

  const history = useHistory();
  const dispatch = useDispatch();
  const formStatus = useSelector((state) => state.projectCreate.status);
  const errors = useSelector((state) => state.status.errors);
  const loading = useSelector((state) => state.status.loading);
  const response = useSelector((state) => state.projectCreate.response);

  const onFormSubmit = (data) => {
    dispatch(createProject(data));
  };

  useEffect(() => {
    if (errors !== null) {
      UIkit.notification({ message: errors?.message, status: 'danger' });
    }
  }, [errors]);

  useEffect(() => {
    if (formStatus === SUBMITTED) {
      UIkit.notification({ message: 'Add Project Success', status: 'success' });
      dispatch(resetProjectAdd());
      history.push('/project');
    }
  }, [formStatus]);

  useEffect(() => {
    dispatch(resetProjectAdd());

    // Component will unmount
    return () => {
      dispatch(resetProjectAdd());
    };
  }, []);

  return (
    <div className="main-wrapper">
      <FormProject
        title="Create Project"
        register={register}
        errors={formErrors}
        onFormSubmit={onFormSubmit}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Add;
