import React, { useEffect, useState } from 'react';
import { Divider, IconButton, Tooltip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertDialog from '../ConfirmModal/AlertDialog.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addListItem, getListById } from '../../services/listsService.js';

const TodoList = () => {
    const { listId } = useParams();
    const navigate = useNavigate();
    const [open, setOpenDialog] = useState(false);
    const [items, setItems] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const handleClickDelete = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const onAddItem = async ({ text }) => {
        const list = await addListItem(listId, { text });
        reset();
        setItems(list.items);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        getListById(listId).then((list) => setItems(list?.items));
    }, []);

    return (
        <>
            {open && <AlertDialog handleClose={handleClose} open={open} message={'You are about to delete the list.'} />}
            <div className="todo-list-container">
                <img src="/todo-list.jpg" alt="list image" className="list-image" />
                <div className="list-container">
                    <h2 className="welcome-list">TODO List</h2>
                    <div className="form-container">
                        <form className="todo-form-list" onSubmit={handleSubmit(onAddItem)}>
                            <label className="list-form-label">
                                <span>Todo</span>
                            </label>
                            <input type="text" className="input todo-item-input" {...register('text')} />
                            <input type="submit" className="submit button list-submit" value={'Add todo'} />
                        </form>
                        <h4>Items</h4>
                        <ul className="lists">
                            {items.length ? (
                                items.map((item) => (
                                    <li className="list" key={item._id}>
                                        <span className="list-span-name">{item.text}</span>
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                            sx={{ backgroundColor: 'var(--dark-pink)', margin: '6px 0 0 8px' }}
                                        />
                                        <IconButton aria-label="delete" size="medium">
                                            <CheckIcon sx={{ color: 'var(--dark-blue)' }} fontSize="inherit" />
                                        </IconButton>
                                    </li>
                                ))
                            ) : (
                                <p>No items</p>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="icons">
                    <Tooltip
                        title="Back to Lists"
                        placement="top"
                        sx={{ color: 'var(--dark-blue)', backgroundColor: 'var(--light-grey)' }}>
                        <IconButton aria-label="back" size="large" sx={{ color: 'var(--dark-blue)' }} onClick={handleGoBack}>
                            <ArrowBackIcon fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        title="Delete List"
                        placement="top"
                        sx={{ color: 'var(--dark-blue)', backgroundColor: 'var(--light-grey)' }}>
                        <IconButton
                            aria-label="delete"
                            size="large"
                            sx={{ color: 'var(--dark-pink)' }}
                            onClick={handleClickDelete}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export default TodoList;