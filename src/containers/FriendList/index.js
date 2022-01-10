import React, {useState, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, addRemoveFavourate, updateItem } from '../../actions'; 
import Pagination from '../../components/Pagination';

let PageSize = 4;

const FriendList = () => {

    const list = useSelector( state => state.listReducer.list )
    const search_filter = useSelector( state => state.listReducer.search_data )
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return list.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id))
    }

    const handleEditItem = (id) => {
        dispatch(updateItem(id))
    }

    const handleAddFavourate = (id) => {
        dispatch(addRemoveFavourate(id))
    }

    return (
        <div className="showItems">
            {
                list.filter(item => item.name.toLowerCase().includes(search_filter.toLowerCase())).map((elem) => {
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
