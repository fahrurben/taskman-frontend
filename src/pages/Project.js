import React, {useEffect,} from "react"
import {useSelector, useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import {useForm} from "react-hook-form"
import _ from 'lodash'
import {getInitialData, getData} from '../actions/ProjectActions'
import {loginSubmit} from "../actions/LoginActions";

function Project() {

    const {register, handleSubmit, errors, getValues} = useForm()

    const dispatch = useDispatch()
    const history = useHistory()
    let status = useSelector(state => state.project.status)
    let data = useSelector(state => state.project.data)
    let page = useSelector(state => state.project.page)
    let totalPage = useSelector(state => state.project.totalPage)

    useEffect(() => {
        dispatch(getInitialData())
    }, []);

    function gotoPage(page) {
        dispatch(getData(page, data))
    }

    const onFormSearchSubmit = (data) => {
        dispatch(getData(1, data))
    }

    const arrPages = _.range(totalPage)

    return (
        <div>
            <div id="form-title" className="uk-card uk-card-primary uk-card-body">
                <p>Project <a href="#"  className="uk-icon-button" uk-icon="plus"></a></p>
            </div>
            <div className="main-wrapper">
                <form className="uk-grid-small" data-uk-grid>
                    <div className="uk-width-1-3">
                        <input className="uk-input uk-form-small" type="text" placeholder="Name" name="name" ref={register()} />
                    </div>
                    <div className="uk-width-1-3">
                        <button className="uk-button uk-button-primary uk-button-small"
                                onClick={handleSubmit(onFormSearchSubmit)}>Search</button>
                    </div>
                </form>

                <table className="uk-table uk-table-striped uk-table-small uk-table-divider">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data &&
                        data.map((project, key) => {
                            return (
                                <tr>
                                    <td>{project.name}</td>
                                    <td>{project.desc}</td>
                                    <td>
                                        <a href="#" className="uk-icon-link uk-margin-small-right"
                                           data-uk-icon="pencil" />
                                        <a href="#" className="uk-icon-link uk-margin-small-right"
                                           data-uk-icon="trash" />
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <ul className="uk-pagination uk-flex-center">
                    {
                        page > 1 && <li><a href="#" onClick={() => gotoPage(page - 1)}><span data-uk-pagination-previous></span></a></li>
                    }
                    {
                        arrPages.length > 1 &&
                        arrPages.map((val) => {
                            let page = val + 1;
                            return <li><a href="#" onClick={() => gotoPage(page)}>{page}</a></li>
                        })
                    }
                    {
                        page < totalPage && <li><a href="#" onClick={() => gotoPage(page + 1)}><span data-uk-pagination-next></span></a></li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Project