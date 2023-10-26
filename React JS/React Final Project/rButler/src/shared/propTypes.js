import { bool, func, string, array, object } from 'prop-types';

export const AlertDialogPropTypes = {
    open: bool.isRequired,
    handleClose: func.isRequired,
    handleDelete: func.isRequired,
    message: string.isRequired,
};

export const CreateListFormTypes = {
    householdId: string.isRequired,
    setLists: func.isRequired,
    lists: array.isRequired,
};

export const EditHouseholdTypes = {
    household: object.isRequired,
    handleUpdateHousehold: func.isRequired,
};

export const HouseholdUserFormTypes = {
    setHousehold: func.isRequired,
    householdId: string.isRequired,
    users: array.isRequired,
    setUsers: func.isRequired,
};

export const ListingsTypes = {
    lists: array.isRequired,
};

export const NotificationTypes = {
    open: bool.isRequired,
    message: array.isRequired,
    severity: string.isRequired,
};

export const ShareTypes = {
    url: string.isRequired,
};

export const SpeedDialTypes = {
    household: object.isRequired,
};
