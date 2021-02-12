import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import UIkit from 'uikit';
import TextInput from '../../components/form/TextInput';
import { fetchInitialData, resetEditTask, updateTask } from '../../redux-modules/task-edit/actions';
import { SUBMITTED } from '../../constant';
import FormEdit from '../../components/task/FormEdit';

function Edit() {
  const {
    register, control, handleSubmit, errors, setValue,
  } = useForm();

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.taskEdit.status);
  const response = useSelector((state) => state.taskEdit.response);
  const task = useSelector((state) => state.taskEdit.task);
  const projects = useSelector((state) => state.taskEdit.projects);

  const onFormSubmit = (data) => {
    const taskData = { ...data };
    taskData.dueDate = moment(data.dueDate, 'DD-MM-YYYY');
    dispatch(updateTask(id, taskData));
  };

  useEffect(() => {
    dispatch(resetEditTask());
    dispatch(fetchInitialData(id));

    // Component will unmount
    return () => {
      dispatch(resetEditTask());
    };
  }, []);

  useEffect(() => {
    if (task !== null) {
      setValue('no', task.no);
      setValue('project', task.project);
      setValue('title', task.title);
      setValue('desc', task.desc);
      setValue('priority', task.priority);
      setValue('status', task.status);
      if (task.dueDate !== null) {
        const dueDate = moment(task.dueDate).toDate();
        setValue('dueDate', dueDate);
      }
    }
  }, [task]);

  useEffect(() => {
    if (status === SUBMITTED) {
      UIkit.notification({ message: 'Update Task Success', status: 'success' });
      dispatch(resetEditTask());
      history.push('/task');
    }
  }, [status]);

  return (
    <div className="main-wrapper">
      <FormEdit
        handleSubmit={handleSubmit}
        register={register}
        control={control}
        errors={errors}
        title="Update Task"
        projects={projects}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
}

export default Edit;
