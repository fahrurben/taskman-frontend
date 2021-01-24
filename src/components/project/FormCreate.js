import React, {useEffect,} from "react"
import {useSelector, useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import {useForm} from "react-hook-form"
import _ from 'lodash'

function FormCreate() {
    const {register, handleSubmit, errors, getValues} = useForm()

    return (
        <div>
            <form class="uk-form-horizontal">
                <fieldset class="uk-fieldset">

                    <legend class="uk-legend">Create</legend>

                    <div>

                        <div class="uk-margin">
                            <label class="uk-form-label" for="name">Name <span class="uk-text-danger">*</span></label>
                            <div class="uk-form-controls">
                                <input className="uk-input uk-form-small" type="text" placeholder="Name" name="name" />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="desc">Description</label>
                            <div className="uk-form-controls">
                                <input className="uk-input uk-form-small" type="text" placeholder="Description" name="desc"/>
                            </div>
                        </div>

                    </div>

                </fieldset>
            </form>
            <div class="uk-text-right">
                <div>
                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    &nbsp;
                    <a href="#" onClick={(e) => console.log("hi")} className="uk-button"
                            type="button">Save
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FormCreate