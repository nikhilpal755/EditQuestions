import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';


import { useState } from 'react'
import { TextField } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};



export default function CustomizedDialogs({ question, setUpdate}) {
    const [open, setOpen] = React.useState(false);

    const [ques, setQues] = useState(question.ques);
    const [optionA, setOptionA] = useState(question.options[0]);
    const [optionB, setOptionB] = useState(question.options[1]);
    const [optionC, setOptionC] = useState(question.options[2]);
    const [optionD, setOptionD] = useState(question.options[3]);
    const [optionE, setOptionE] = useState(question.options[4]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


        // -------- YET TO IMPLEMENT --------
    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            id:question.id,
            ques:ques,
            options: [optionA, optionB, optionC, optionD, optionE]
        }

        setUpdate(obj);
        handleClose();


        
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} style={{ marginTop: '16px' }}>
                <EditIcon />
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Edit Question
                </BootstrapDialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent dividers>
                        <TextField
                            fullWidth
                            label="Question"
                            type="text"
                            variant="outlined"
                            value={ques}
                            onChange={(e) => {
                                //  console.log(e.target.value)
                                setQues(e.target.value)
                            }}
                        />

                        {/* options  */}
                        <div className='options' style={{ marginTop: '20px' }}>
                            <TextField
                                label="Option A"
                                type="text"
                                variant="outlined"
                                value={optionA}
                                style={{ width: '45%', marginRight: '5%', marginBottom: '2%' }}
                                onChange={(e) => {

                                    setOptionA(e.target.value)
                                }}
                            />
                            <TextField
                                label="Option B"
                                type="text"
                                variant="outlined"
                                value={optionB}
                                style={{ width: '45%', marginRight: '5%', marginBottom: '2%' }}
                                onChange={(e) => {

                                    setOptionB(e.target.value)
                                }}
                            />
                            <TextField
                                label="Option C"
                                type="text"
                                variant="outlined"
                                value={optionC}
                                style={{ width: '45%', marginRight: '5%', marginBottom: '2%' }}
                                onChange={(e) => {
                                    setOptionC(e.target.value)
                                }}
                            />
                            <TextField
                                label="Option D"
                                type="text"
                                variant="outlined"
                                value={optionD}
                                style={{ width: '45%', marginRight: '5%', marginBottom: '2%' }}
                                onChange={(e) => {

                                    setOptionD(e.target.value)
                                }}
                            />
                            <TextField
                                label="Option E"
                                type="text"
                                variant="outlined"
                                value={optionE}
                                style={{ width: '45%', marginRight: '5%', marginBottom: '2%' }}
                                onChange={(e) => {

                                    setOptionE(e.target.value)
                                }}
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus type='submit'>
                            Save changes
                        </Button>
                    </DialogActions>
                </form>
            </BootstrapDialog>
        </div>
    );
}
