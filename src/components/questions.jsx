import React from 'react'
import questions from '../questions'

import { TextField } from '@mui/material'
import CustomizedDialogs from './modal'
import { useState , useEffect} from 'react'
import { cloneDeep } from 'lodash'


export default function Questions() {

  const [Questions, setQuestions] = useState(questions);
  const [update, setUpdate] = useState({});

  useEffect(() => {
    handleChange();

  }, [update])

  const handleChange = () => {
    const copy = cloneDeep(questions)
    copy.forEach((obj) => {
      if (obj.id === update.id) {
        obj.ques = update.ques
        obj.options = update.options
      }
    })

    questions.forEach(obj =>{
      if(obj.id === update.id){
        obj.ques = update.ques
        obj.options = update.options
      }
    })
    setQuestions([...copy])
  }


  return (
    <div style={{ width: '100%' }}>
      {

        Questions?.map((question, index) => {

          return (
            <div key={index} style={{ width: '100%' }}>
              <div style={{ display: 'flex', width: '100%' }}>

                <p style={{ paddingTop: '10px', fontSize: '17px' }}>{index + 1}. </p>


                <p style={{ width: '80%', marginTop: '24px', marginLeft: '10px', fontSize: '20px' }}>{question.ques}</p>
                <CustomizedDialogs question={question} setUpdate={setUpdate} />
              </div>
              <div className='options' style={{ paddingLeft: '0.5%' }}>
                <div style={{ display: 'flex' }}>
                  <p style={{ paddingTop: '8px' }}>a. </p>
                  <TextField
                    type='text'
                    value={question.options[0]}
                    style={{ width: '80%', marginTop: '18px', marginLeft: '10px' }}
                    variant="standard"
                    InputProps={{

                      disableUnderline: true, // <== added this
                      readOnly: true,

                    }}

                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <p style={{ paddingTop: '8px' }}>b. </p>
                  <TextField
                    type='text'
                    value={question.options[1]}
                    style={{ width: '80%', marginTop: '18px', marginLeft: '10px' }}
                    variant="standard"
                    InputProps={{

                      disableUnderline: true, // <== added this
                      readOnly: true,

                    }}

                  />

                </div>
                <div style={{ display: 'flex' }}>
                  <p style={{ paddingTop: '8px' }}>c. </p>
                  <TextField
                    type='text'
                    value={question.options[2]}
                    style={{ width: '80%', marginTop: '18px', marginLeft: '10px' }}
                    variant="standard"
                    InputProps={{

                      disableUnderline: true, // <== added this
                      readOnly: true,

                    }}

                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <p style={{ paddingTop: '8px' }}>d. </p>
                  <TextField
                    type='text'
                    value={question.options[3]}
                    style={{ width: '80%', marginTop: '18px', marginLeft: '10px' }}
                    variant="standard"
                    InputProps={{

                      disableUnderline: true, // <== added this
                      readOnly: true,

                    }}

                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <p style={{ paddingTop: '8px' }}>e. </p>
                  <TextField
                    type='text'
                    value={question.options[4]}
                    style={{ width: '80%', marginTop: '18px', marginLeft: '10px' }}
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
