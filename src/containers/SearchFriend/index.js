import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchItem } from '../../actions';

const SearchFriend = () => {

    const [searchData, setSearchData] = useState('');
    const dispatch = useDispatch()
    const list = useSelector( state => state.listReducer.list )

    const handleSearchItem = (value) => {
            setSearchData(value);
            dispatch(searchItem(value))
    }

    return (
        <>
        {
            list.length > 1 ?
                <div className="addItems">
                <input type="text" placeholder="Search Friends..."
                    value={searchData}
                    onChange={(e) => handleSearchItem(e.currentTarget.value)}
                />
                <i className="fa fa-search add-btn" title="Add Item"></i>
                {/* {
                    toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" ></i> :
                        <i className="fa fa-save add-btn" title="Save Item"></i>
                } */}

            </div>
            :
            <></>
        }
        </>
        
    );
}

export default SearchFriend;
