import React from 'react'
import { HeaderWithText } from "../../components/HeaderWithText/HeaderWithText"
import { Image } from "../../components/Image/Image"
import { Form } from "../../components/Form/Form"

import img from '../../assets/img/iconLong.png';

export const LandingPage = () => {
  {/* <Image 
        src={img}
        type='long'
        alt='storii join instructions'
      /> */}

    const handleSubmit = (state) => {
      console.log("EXAMPLE OF BIG BOY", state);
    }

   

  return (
    <div>
      <HeaderWithText header='Storii'/>
      <Form
        initState = {{
          // penName: "",
          // email:"",
          // password: "",
          // password2: "",
          // selection: "one",
          tags: []
        }}
        handleSubmit={handleSubmit}
      >
        {
          ({state, onCheckboxChange}) => { 
            const {penName, email, password, password2} = state;

            return(
              <div>

             <label>
                fantasy:
                <input
                  name="fantasy"
                  type="checkbox"
                  belongsto="tags"
                  onChange={onCheckboxChange} />
              </label>
              <label>
                sci-fi:
                <input
                  name="sci-fi"
                  type="checkbox"
                  belongsto="tags"
                  onChange={onCheckboxChange} />
              </label>
     
                  
            {/* <select 
              value={state.selection} 
              data-test="select"
              name="selection"
              onChange={onChange}>
              {selection.map(option => <option key={option} value={option}>{option}</option>)}
            </select> */}
                {/* <input 
                name="penName" 
                onChange={onChange} 
                value={penName || ""}
                type="text"
                />
                <input 
                name="email" 
                onChange={onChange} 
                value={email || ""}
                type="email"
                />
                <input 
                name="password" 
                onChange={onChange} 
                value={password || ""}
                type="text"
                />
                <input 
                name="password2" 
                onChange={onChange} 
                value={password2 || ""}
                type="text"
                /> */}
            </div>
            )
           }  
        }
      </Form>
    </div>
  )
}

