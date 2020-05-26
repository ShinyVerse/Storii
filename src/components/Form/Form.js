import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const Form = (props) => {
  
  const [state, setState] = useState(props.initState)

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit(state)
  }

  return (
    <form onSubmit={onSubmit}>
     {props.children({
       state,
       onChange
     })}
     <input type="submit" value="SUBMIT ME"/>
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initState: PropTypes.object.isRequired,
}
