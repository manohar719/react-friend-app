import React, {useState, useMemo} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { deleteItem, addRemoveFavourate, updateItem } from '../../actions'; 
import Pagination from '../../components/Pagination';
import Utils from "../../utils/Utility"

let PageSize = 4;

const FriendList = ({showToast}) => {

    const list = useSelector( state => state.listReducer.list, shallowEqual )
    const search_filter = useSelector( state => state.listReducer.search_data )
    const sort_by_alphabet = useSelector( state => state.listReducer.sorted_alpha )
    const sort_by_favourate = useSelector( state => state.listReducer.sorted_favourate )
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    // TODO : add pagination
    // const currentTableData = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * PageSize;
    //   const lastPageIndex = firstPageIndex + PageSize;
    //   return list.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id))
    }

    // TODO: add edit functionality
    // const handleEditItem = (id) => {
    //     dispatch(updateItem(id))
    // }



    const handleAddFavourate = (id) => {
        dispatch(addRemoveFavourate(id))
        showToast()
    }

    return (
        <div className="showItems">
            {
                list.sort(sort_by_alphabet && sort_by_alphabet === 'asc' ? Utils.compareNameAsc : Utils.compareNameDesc)
                // .sort(sort_by_favourate && sort_by_favourate === 'asc' ? Utils.compareFavourateAsc : Utils.compareFavourateDesc)
                .filter(item => item.name.toLowerCase().includes(search_filter.toLowerCase())).map((elem) => {
                    return (
                        <div className="eachItem" key={elem.id}>
                            <h3>{elem.name}</h3>
                            <div className="todo-btn">
                                {
                                    elem.is_favourate ? 
                                        <i className="far fa-heart filled add-btn" title="Favourate Item" onClick={() => handleAddFavourate(elem.id) }></i> 
                                        :
                                        <i className="far fa-heart add-btn" title="Favourate Item" onClick={() => handleAddFavourate(elem.id) }></i>
                                }
                                {/* <i className="far fa-edit add-btn" title="Edit Item" onClick={() => handleEditItem(elem.id)}></i> */}
                                <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => handleDeleteItem(elem.id)}></i>
                            </div>
                        </div>
                    )
                })

            }
            <Pagination
                className="pagination-bar"
                currentPage={0}
                totalCount={10}
                pageSize={4}
                onPageChange={page => setCurrentPage(page)}
            />

        </div>
    );
}

export default FriendList;
