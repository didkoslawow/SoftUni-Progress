import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { deleteHousehold } from '../../services/householdsService.js';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../ConfirmModal/AlertDialog.jsx';

const EditHousehold = ({ household, token }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [open, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        await deleteHousehold(household._id, token);
        navigate('/profile/' + household.master);
    };

    return (
        <>
            {open && <AlertDialog open={open} handleClose={handleClose} handleDelete={handleDelete} />}
            <div className="edit-household-container">
                <form className="form-household edit-form">
                    <h5 className="edit-form-header border-bottom">Edit Household</h5>
                    <label>
                        <span>Household name</span>
                    </label>
                    <input type="text" className="input" defaultValue={household.name} />
                    <label>
                        <span>Presentation</span>
                    </label>
                    <input type="text" className="input" defaultValue={household.presentation} />
                    <div className="buttons-form">
                        <input type="submit" className="button-action edit-button" value={'Edit Household'} />
                        <button type="button" className="button-action delete-button" onClick={handleClickOpen}>
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditHousehold;