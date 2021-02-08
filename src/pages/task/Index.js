import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import UIkit from 'uikit';
import _ from 'lodash';
import moment from 'moment';
import { PRIORITY_VALUES, TASK_STATUS_VALUES } from '../../constant';
import { fetchData, fetchInitialData, deleteTask } from '../../redux-modules/task-index/actions';
import Button from '../../components/ui/Button';
import TextInput from '../../components/form/TextInput';
import PagingNav from '../../components/ui/PagingNav';

function Index() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.taskIndex.isLoading);
  const data = useSelector((state) => state.taskIndex.data);
  const page = useSelector((state) => state.taskIndex.page);
  const totalPage = useSelector((state) => state.taskIndex.totalPage);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  function gotoPage(pageNumber) {
    dispatch(fetchData(pageNumber, data));
  }

  function showDeleteModal(id, name) {
    UIkit.modal.confirm(`Are you sure to delete task: ${name}`).then(
      () => dispatch(deleteTask(id)),
      () => {},
    );
  }

  const onFormSearchSubmit = (result) => {
    console.log(result);
    dispatch(fetchData(1, result));
  };

  const arrPages = _.range(totalPage);

  const tableClass = classNames(
    'uk-table uk-table-striped uk-table-small uk-table-divider',
    {
      'uk-hidden': isLoading,
    },
  );

  const spinnerClass = classNames(
    'uk-text-center',
    {
      'uk-hidden': !isLoading,
    },
  );

  return (
    <div>
      <div id="form-title" className="uk-card uk-card-primary uk-card-body">
        <p>
          Task
          <Link className="uk-icon-button" uk-icon="plus" to="/task/add" />
        </p>
      </div>
      <div className="main-wrapper">
        <form className="uk-grid-small" data-uk-grid>
          <div className="uk-width-1-5">
            <select
              id="priority"
              name="priority"
              className="uk-select uk-form-small"
              ref={register({})}
            >
              <option value="">- Priority -</option>
              {
                PRIORITY_VALUES
                && Object.keys(PRIORITY_VALUES).map(
                  (key) => (<option value={key}>{PRIORITY_VALUES[key]}</option>),
                )
              }
            </select>
          </div>
          <div className="uk-width-1-5">
            <select
              id="status"
              name="status"
              className="uk-select uk-form-small"
              ref={register({})}
            >
              <option value="">- Status -</option>
              {
                TASK_STATUS_VALUES
                && Object.keys(TASK_STATUS_VALUES).map(
                  (key) => (<option value={key}>{TASK_STATUS_VALUES[key]}</option>),
                )
              }
            </select>
          </div>
          <div className="uk-width-2-5">
            <TextInput id="title" name="title" placeholder="Title" inputRef={register({})} />
          </div>
          <div className="uk-width-1-5">
            <Button onClick={handleSubmit(onFormSearchSubmit)}>Search</Button>
          </div>
        </form>

        <table className={tableClass}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Project</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {
            data
            && data.map((task) => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.project?.name}</td>
                <td>{PRIORITY_VALUES?.[task.priority]}</td>
                <td>{task.dueDate && moment(task.dueDate).format('DD MMM YYYY')}</td>
                <td>{TASK_STATUS_VALUES?.[task.status]}</td>
                <td>
                  <Link
                    to={`/task/edit/${task._id}`}
                    className="uk-icon-link uk-margin-small-right"
                    data-uk-icon="pencil"
                  />
                  <button
                    onClick={() => showDeleteModal(task._id, task.name)}
                    type="button"
                    className="uk-icon-link uk-margin-small-right"
                    data-uk-icon="trash"
                  />
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
        <div className={spinnerClass}>
          <span className="uk-margin-small-right" data-uk-spinner="ratio: 1.5" />
        </div>
        <PagingNav gotoPage={gotoPage} arrPages={arrPages} page={page} totalPage={totalPage} />
      </div>
    </div>
  );
}

export default Index;
