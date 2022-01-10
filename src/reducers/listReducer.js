const initialState =  {
    list : [],
    search_data : ''
}

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM' : 

            const { id, data } = action.payload;
            return {
                ...state,
                list : [
                    ...state.list,
                    {
                        id : id,
                        name: data,
                        is_favourate: false
                    }
                ]
            }

        case 'UPDATE_ITEM' : 

            return {
                ...state,
                list : [
                    ...state.list,
                    {
                        ...action.payload
                    }
                ]
            }

        case 'DELETE_ITEM' : 
            const new_list = state.list.filter( elem => elem.id !== action.id)   
            return {
                ...state,
                list : new_list
            }

        case 'ADD_REMOVE_FAVOURATE' : 
            const favourate_item = state.list.map((item) => {
                return item.id === action.id ? Object.assign({}, item, { is_favourate: ! item.is_favourate}) : item
              })
            return {
                ...state,
                list : favourate_item,
                
            }

        case 'SEARCH_ITEM' : 
            return {
                ...state,
                search_data : action.data
            }

        default : 
            return state
    }
}

export default listReducer;
