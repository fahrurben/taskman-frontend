import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {Link, useHistory} from "react-router-dom"
import {useForm} from "react-hook-form"
import {createProject, resetCreateProject} from "../../redux-modules/project-create/actions";
import {FAILED, SUBMITTED} from "../../constant";
import UIkit from "uikit";

function Create() {
    const {register, handleSubmit} = useForm()

    const dispatch = useDispatch()
    const history = useHistory()
    let status = useSelector(state => state.projectCreate.status)
    let isLoading = useSelector(state => state.projectCreate.isLoading)
    let response = useSelector(state => state.projectCreate.response)

    const onFormSubmit = (data) => {
        dispatch(createProject(data))
    }

    useEffect(() => {
        if (response.status === FAILED) {
            UIkit.notification({message: response.message, status: "danger"})
        }
    }, [response])

    useEffect(() => {
        if (status === SUBMITTED) {
            UIkit.notification({message: "Create Project Success", status: "success"})
            dispatch(resetCreateProject())
            history.push("/project")
        }
    }, [status])

    useEffect(() => {
        dispatch(resetCreateProject())
    }, [])

    return (
        <div className="main-wrapper">
            <form class="uk-form-horizontal">
                <fieldset class="uk-fieldset">

                    <legend class="uk-legend">Create Task</legend>

                    <div>

                        <div class="uk-margin">
                            <label class="uk-form-label" for="name">Name <span class="uk-text-danger">*</span></label>
                            <div class="uk-form-controls">
                                <input ref={register()} className="uk-input uk-form-small" type="text"
                                       placeholder="Name" name="name" />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="desc">Description</label>
                            <div className="uk-form-controls">
                                <input ref={register()}  className="uk-input uk-form-small" type="text"
                                       placeholder="Description" name="desc"/>
                            </div>
                        </div>

                    </div>

                </fieldset>
            </form>
            <div class="uk-text-right">
                <div>
                    <Link class="uk-button uk-button-default uk-modal-close" type="button" to="/project">Cancel</Link>
                    &nbsp;
                    <button onClick={handleSubmit(onFormSubmit)} className="uk-button uk-button-primary"
                            type="button">Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Create