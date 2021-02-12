import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import TextInput from '../form/TextInput';
import { PRIORITY_VALUES } from '../../constant';
import Select from '../form/Select';
import DateInput from '../form/DateInput';
import TextArea from '../form/TextArea';

function Form({
  title, projects, register, control, errors, handleSubmit, onFormSubmit,
}) {
  const priorities = Object.entries(PRIORITY_VALUES)
    .map(([key]) => ({ _id: key, name: PRIORITY_VALUES[key] }));

  return (
    <>
      <form className="uk-form-horizontal">
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">{title}</legend>
          <div>
            <TextInput
              id="no"
              name="no"
              label="No"
              required="true"
              inputRef={register({ required: { value: true, message: 'Number Order is required' } })}
              error={errors?.no}
            />
            <Select
              id="project"
              name="project"
              label="Project"
              placeholder="- Project -"
              required="true"
              options={projects}
              inputRef={register({ required: { value: true, message: 'Project is required' } })}
              error={errors?.project}
            />
            <TextInput
              id="title"
              name="title"
              label="Title"
              required="true"
              inputRef={register({ required: { value: true, message: 'Title is required' } })}
              error={errors?.title}
            />
            <TextArea
              id="desc"
              name="desc"
              label="Description"
              required="true"
              inputRef={register({ required: { value: true, message: 'Description is required' } })}
              error={errors?.desc}
            />
            <Select
              id="priority"
              name="priority"
              label="Priority"
              placeholder="- Priority -"
              required="true"
              options={priorities}
              inputRef={register({ required: { value: true, message: 'Priority is required' } })}
              error={errors?.priority}
            />
            <DateInput name="dueDate" label="Due Date" control={control} id="dueDate" />
          </div>
        </fieldset>
      </form>
      <div className="uk-text-right">
        <div>
          <Link class="uk-button uk-button-default uk-modal-close" type="button" to="/task">Cancel</Link>
          &nbsp;
          <button
            onClick={handleSubmit(onFormSubmit)}
            className="uk-button uk-button-primary"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired,
  control: PropTypes.func.isRequired,
  errors: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
