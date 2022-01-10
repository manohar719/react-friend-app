import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchItem, sortAlphaItem, sortFavourateItem } from '../../actions';
import Button from '../../components/Button'

const SearchFriend = () => {

    const [searchData, setSearchData] = useState('');
    const dispatch = useDispatch()
    const list = useSelector( state => state.listReducer.list )
    const sort_alpha_list = useSelector( state => state.listReducer.sorted_alpha )
    const sort_favourate_list = useSelector( state => state.listReducer.sorted_favourate )

    const handleSearchItem = (value) => {
            setSearchData(value);
            dispatch(searchItem(value))
    }

    const handleSortItem = (e, type) => {
        e.preventDefault()
        if(type === 'alphabet'){
            dispatch(sortAlphaItem(sort_alpha_list ? sort_alpha_list === 'asc' ? 'desc' : 'asc' : 'asc'))
        }else{
            dispatch(sortFavourateItem(sort_favourate_list ? sort_favourate_list === 'asc' ? 'desc' : 'asc' : 'asc'))
        }
        
    }

    

    return (
        <>
        {
            list.length > 1 ?
                <div className="addItems search-sort-wrap">
                    <div className="search-wrapper">
                        <input type="text" placeholder="Search Friends..."
                            value={searchData}
                            onChange={(e) => handleSearchItem(e.currentTarget.value)}
                        />
                        <i className="fa fa-search add-btn" title="Search Item"></i>
                    </div>
                    <button className="btn-custom" onClick={(e) => handleSortItem(e, 'alphabet')} label="sort a/b">
                       {
                        sort_alpha_list && sort_alpha_list === 'desc' ?
                        <i class="fas fa-sort-alpha-up" style={{fontSize : '24px'}}></i>
                        :
                        <i class="fas fa-sort-alpha-up-alt" style={{fontSize : '24px'}}></i>
                       }
                    </button>
                    {/* <button className="btn-custom" onClick={(e) => handleSortItem(e, 'favourate')} label="sort favourate"/> */}

                </div>
            :
            <></>
        }
        </>
        
    );
}

export default SearchFriend;
