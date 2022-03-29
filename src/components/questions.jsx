import React from 'react'
import EdiText from 'react-editext'
import styled from 'styled-components'
import questions from '../questions'

const StyledEdiText = styled(EdiText)`
  button {
    border-radius: 5px;
  }
  button[editext="edit-button"] {
    color: #000;
    width: 50px;

  }
  button[editext="save-button"] {
    width: 50px;
    &:hover {
      background: greenyellow;
    }
  }
  button[editext="cancel-button"] {
    &:hover {
      background: crimson;
      color: #fff;
    }
  }
  input, textarea {
   
    font-weight: bold;
    border-radius: 5px;
    width: 100%;
  }
  div[editext="view-container"], div[editext="edit-container"] {
    padding: 15px;
    border-radius: 5px;
    width : 80vw;
}
`

const OptionsEdiText = styled(EdiText)`
button {
    border-radius: 5px;
  }
  button[editext="edit-button"] {
    color: #000;
    width: 50px;
  }
  button[editext="save-button"] {
    width: 50px;
    &:hover {
      background: greenyellow;
    }
  }
  button[editext="cancel-button"] {
    &:hover {
      background: crimson;
      color: #fff;
    }
  }
  input, textarea {
   
    font-weight: bold;
    border-radius: 5px;
    width: 100%;
  }
  div[editext="view-container"], div[editext="edit-container"] {
    padding: 15px;
    border-radius: 5px;
    width : 100%;
}

`

export default function Questions() {

  const onSave = (val) =>{
    console.log('Edited Value -> ', val)
  }  
  return (
    <div style={{width : '100%'}}>
        {
            questions?.map((question, index) => {
                return (
                    <div key={index} style={{width: '100%'}}> 
                        <div style={{display: 'flex', width: '100%'}}>

                            <p style={{paddingTop: '8px'}}>{index + 1}. </p>
                            <StyledEdiText 
                                type='text'
                                value={question.ques}
                                onSave={onSave}
                    
                            />
                        </div>
                         <div className='options' style={{paddingLeft: '0.5%'}}>
                             <div style={{display: 'flex'}}>
                                <p style={{paddingTop: '8px'}}>a. </p>
                                <OptionsEdiText
                                    type='text'
                                    value={question.options[0]}
                                    onSave={onSave}
                                />
                             </div>
                             <div style={{display : 'flex'}}>
                                <p style={{paddingTop: '8px'}}>b. </p>
                                <OptionsEdiText
                                    type='text'
                                    value={question.options[1]}
                                    onSave={onSave}
                                />
                             </div>
                             <div style={{display : 'flex'}}>
                                <p style={{paddingTop: '8px'}}>c. </p>
                                <OptionsEdiText
                                    type='text'
                                    value={question.options[2]}
                                    onSave={onSave}
                                />
                             </div>
                             <div style={{display : 'flex'}}>
                                <p style={{paddingTop: '8px'}}>d. </p>
                                <OptionsEdiText
                                    type='text'
                                    value={question.options[3]}
                                    onSave={onSave}
                                />
                             </div>
                             <div style={{display : 'flex'}}>
                                <p style={{paddingTop: '8px'}}>e. </p>
                                <OptionsEdiText
                                    type='text'
                                    value={question.options[4]}
                                    onSave={onSave}
                                />
                             </div>

                        </div>
                        
                    </div>
                )
            })
        }
      
    </div>
  )
}
