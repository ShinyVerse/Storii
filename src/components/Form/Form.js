import React, { useState } from "react";
import PropTypes from "prop-types";

export const Form = (props) => {
  const [state, setState] = useState(props.initState);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const arrayName = e.target.attributes.belongsto.value;
    const array = state[arrayName];

    if (checked) {
      array.push(name);

      onChange({ target: { name: arrayName, value: array } });
      return;
    }
    array = array.filter((item) => item !== name);

    onChange({ target: { name: arrayName, value: array } });
    return;
  };

  const onSubmit = () => {
    props.handleSubmit(state);
  };

  return (
    <form>
      {props.children({
        state,
        onChange,
        onCheckboxChange,
      })}
      <input
        onClick={onSubmit}
        data-test="submit"
        type="submit"
        value="SUBMIT ME"
      />
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initState: PropTypes.object.isRequired,
};
