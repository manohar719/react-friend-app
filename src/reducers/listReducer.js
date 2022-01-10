import Utils from "../utils/Utility"

const initialState =  {
    list : [],
    search_data : '',
    sorted_alpha : null,
    sorted_favourate : null
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
        
        case 'SORT_ALPHA_ITEM' : 
            const sorted_alpha = action?.data  === 'asc' ? state.list.sort(Utils.compareNameAsc) : state.list.sort(Utils.compareNameDesc)
            return {
                ...state,
                list : sorted_alpha,
                sorted_alpha : action.data,
                sorted_favourate : null
            }

        case 'SORT_FAVOURATE_ITEM' : 
            const sorted_favourate = action?.data  === 'asc' ? state.list.sort(Utils.compareFavourateAsc) : state.list.sort(Utils.compareNameDesc)
            const sorted_favourate_state = {
                ...state,
                list : sorted_favourate,
                sorted_favourate : action.data,
                sorted_alpha : null
            }
            return sorted_favourate_state

        default : 
            return state
    }
}

export default listReducer;
