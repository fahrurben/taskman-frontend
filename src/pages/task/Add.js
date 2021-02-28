import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UIkit from 'uikit';
import TextInput from '../../components/form/TextInput';
import { FAILED, SUBMITTED } from '../../constant';
import Form from '../../components/task/Form';
import { createTask, fetchInitialData, taskAddReset } from '../../redux-modules/task-add/actions';

function Add() {
  const {
    register, control, handleSubmit, errors: formErrors,
  } = useForm();

  const history = useHistory();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectLookups);
  const formStatus = useSelector((state) => state.taskAdd.status);
  const errors = useSelector((state) => state.status.errors);

  useEffect(() => {
    dispatch(fetchInitialData());

    // Component will unmount
    return () => {
      dispatch(taskAddReset());
    };
  }, []);

  const onFormSubmit = (data) => {
    console.log(data);
    const task = { ...data };
    task.dueDate = moment(data.dueDate, 'DD-MM-YYYY');

    dispatch(createTask(task));
  };

  useEffect(() => {
    if (errors !== null) {
      UIkit.notification({ message: errors?.message, status: 'danger' });
    }
  }, [errors]);

  useEffect(() => {
    if (formStatus === SUBMITTED) {
      UIkit.notification({ message: 'Add Task Success', status: 'success' });
      dispatch(taskAddReset());
      history.push('/task');
    }
  }, [formStatus]);

  return (
    <div className="main-wrapper">
      <Form
        handleSubmit={handleSubmit}
        register={register}
        control={control}
        errors={formErrors}
        title="Create Task"
        projects={projects}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
}

export default Add;
