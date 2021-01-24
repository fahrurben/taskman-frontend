import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import _ from 'lodash';
import UIkit from 'uikit';
import { getInitialData, getData } from '../../redux-modules/project-index/actions';

function Index() {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.projectIndex.isLoading);
  const data = useSelector((state) => state.projectIndex.data);
  const page = useSelector((state) => state.projectIndex.page);
  const totalPage = useSelector((state) => state.projectIndex.totalPage);

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  function gotoPage(page) {
    dispatch(getData(page, data));
  }

  const onFormSearchSubmit = (data) => {
    dispatch(getData(1, data));
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
          <Link className="uk-icon-button" uk-icon="plus" to="/project/create" />
        </p>
      </div>
      <div className="main-wrapper">
        <form className="uk-grid-small" data-uk-grid>
          <div className="uk-width-1-3">
            <input className="uk-input uk-form-small" type="text" placeholder="Name" name="name" ref={register()} />
          </div>
          <div className="uk-width-1-3">
            <button
              className="uk-button uk-button-primary uk-button-small"
              onClick={handleSubmit(onFormSearchSubmit)}
            >
              Search
            </button>
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
                        && data.map((project, key) => (
                          <tr key={key}>
                            <td>{project.name}</td>
                            <td>{project.desc}</td>
                            <td>
                              <a
                                href="#"
                                className="uk-icon-link uk-margin-small-right"
                                data-uk-icon="pencil"
                              />
                              <a
                                href="#"
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
          <span className="uk-margin-small-right" uk-spinner="ratio: 1.5" />
        </div>
        <ul className="uk-pagination uk-flex-center">
          {
                        page > 1 && <li><a href="#" onClick={() => gotoPage(page - 1)}><span data-uk-pagination-previous /></a></li>
                    }
          {
                        arrPages.length > 1
                        && arrPages.map((val) => {
                          const page = val + 1;
                          return <li key={page}><a href="#" onClick={() => gotoPage(page)}>{page}</a></li>;
                        })
                    }
          {
                        page < totalPage && <li><a href="#" onClick={() => gotoPage(page + 1)}><span data-uk-pagination-next /></a></li>
                    }
        </ul>
      </div>
    </div>
  );
}

export default Index;