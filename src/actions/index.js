export const addItem = (data) => {
    return {
        type : "ADD_ITEM",
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const deleteItem = (id) => {
    return {
        type : "DELETE_ITEM",
        id
    }
}

export const updateItem = () => {
    return {
        type : "UPDATE_ITEM"
    }
}

export const addRemoveFavourate = (id) => {
    return {
        type : "ADD_REMOVE_FAVOURATE",
        id
    }
}

export const searchItem = (data) => {
    return {
        type : "SEARCH_ITEM",
        data
    }
}

