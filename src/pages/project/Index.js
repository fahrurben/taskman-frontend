import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import UIkit from 'uikit';
import _ from 'lodash';
import { fetchInitialData, fetchData, deleteProject } from '../../redux-modules/project-index/actions';
import Button from '../../components/ui/Button';
import TextInput from '../../components/form/TextInput';
import PagingNav from '../../components/ui/PagingNav';

function Index() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.projectIndex.isLoading);
  const data = useSelector((state) => state.projectIndex.data);
  const page = useSelector((state) => state.projectIndex.page);
  const totalPage = useSelector((state) => state.projectIndex.totalPage);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  function gotoPage(pageNumber) {
    dispatch(fetchData(pageNumber, data));
  }

  function showDeleteModal(id, name) {
    UIkit.modal.confirm(`Are you sure to delete project: ${name}`).then(
      () => dispatch(deleteProject(id)),
      () => {},
    );
  }

  const onFormSearchSubmit = (result) => {
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
          Project
          <Link className="uk-icon-button" uk-icon="plus" to="/project/add" />
        </p>
      </div>
      <div className="main-wrapper">
        <form className="uk-grid-small" data-uk-grid>
          <div className="uk-width-1-3">
            <TextInput id="name" name="name" placeholder="Name" inputRef={register} />
          </div>
          <div className="uk-width-1-3">
            <Button onClick={handleSubmit(onFormSearchSubmit)}>Search</Button>
          </div>
        </form>

        <table className={tableClass}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {
            data
            && data.map((project) => (
              <tr key={project._id}>
                <td>{project.name}</td>
                <td>{project.desc}</td>
                <td>
                  <Link
                    to={`/project/edit/${project._id}`}
                    className="uk-icon-link uk-margin-small-right"
                    data-uk-icon="pencil"
                  />
                  <button
                    onClick={() => showDeleteModal(project._id, project.name)}
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
