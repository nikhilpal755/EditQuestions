import React from 'react'
import questions from '../questions'

import {TextField} from '@mui/material'
import CustomizedDialogs from './modal'
import {useState} from 'react'


export default function Questions() {

  const [Questions, setQuestions] = useState(questions);
  return (
    <div style={{width : '100%'}}>
        {
            
            Questions?.map((question, index) => {
                return (
                    <div key={index} style={{width: '100%'}}> 
                        <div style={{display: 'flex', width: '100%'}}>

                            <p style={{paddingTop: '8px'}}>{index + 1}. </p>
                            
                            <TextField 
                               type='text'
                                value={question.ques}
                                style={{width: '80%', marginTop: '18px', marginLeft: '10px'}}
                                variant="standard"
                                InputProps={{
                
                                  disableUnderline: true, // <== added this
                                  readOnly: true,
                  
                                }}
                               
                            />
                            <CustomizedDialogs question={question}/>
                        </div>
                         <div className='options' style={{paddingLeft: '0.5%'}}>
                             <div style={{display: 'flex'}}>
                                <p style={{paddingTop: '8px'}}>a. </p>
                                <TextField 
                                 type='text'
                                value={question.options[0]}
                                style={{width: '80%', marginTop: '18px', marginLeft: '10px'}}
                                variant="standard"
                                InputProps={{
                
                                  disableUnderline: true, // <== added this
                                  readOnly: true,
                  
                                }}
                               
                               />
                             </div>
                             <div style={{display : 'flex'}}>
                                <p style={{paddingTop: '8px'}}>b. </p>
                                <TextField 
                                 type='text'
                                value={question.options[1]}
                                style={{width: '80%', marginTop: '18px', marginLeft: '10px'}}
                                variant="standard"
                                InputProps={{
                
                                  disableUnderline: true, // <== added this
                                  readOnly: true,
                  
                                }}
                               
                               />
                                
                             </div>
                             <div style={{display : 'flex'}}>
                                <p style={{paddingTop: '8px'}}>c. </p>
                                <TextField 
                                 type='text'
                                value={question.options[2]}
                                style={{width: '80%', marginTop: '18px', marginLeft: '10px'}}
                                variant="standard"
                                InputProps={{
                
                                  disableUnderline: true, // <== added this
                                  readOnly: true,
                  
                                }}
                               
                               />
                             </div>
                             <div style={{display : 'flex'}}>
                                <p style={{paddingTop: '8px'}}>d. </p>
                                <TextField 
                                 type='text'
                                value={question.options[3]}
                                style={{width: '80%', marginTop: '18px', marginLeft: '10px'}}
                                variant="standard"
                                InputProps={{
                
                                  disableUnderline: true, // <== added this
                                  readOnly: true,
                  
                                }}
                               
                               />
                             </div>
                             <div style={{display : 'flex'}}>
                                <p style={{paddingTop: '8px'}}>e. </p>
                                <TextField 
                                 type='text'
                                value={question.options[4]}
                                style={{width: '80%', marginTop: '18px', marginLeft: '10px'}}
                                variant="standard"
                                InputProps={{
                
                                  disableUnderline: true, // <== added this
                                  readOnly: true,
                  
                                }}
                               
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
