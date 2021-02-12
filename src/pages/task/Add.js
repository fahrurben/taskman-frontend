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
    register, control, handleSubmit, errors,
  } = useForm();

  const history = useHistory();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.taskAdd.projects);
  const status = useSelector((state) => state.taskAdd.status);
  const response = useSelector((state) => state.taskAdd.response);

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
    if (response.status === FAILED) {
      UIkit.notification({ message: response.message, status: 'danger' });
    }
  }, [response]);

  useEffect(() => {
    if (status === SUBMITTED) {
      UIkit.notification({ message: 'Add Task Success', status: 'success' });
      dispatch(taskAddReset());
      history.push('/task');
    }
  }, [status]);

  return (
    <div className="main-wrapper">
      <Form
        handleSubmit={handleSubmit}
        register={register}
        control={control}
        errors={errors}
        title="Create Task"
        projects={projects}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
}

export default Add;
