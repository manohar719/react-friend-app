import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../actions';

const AddFriend = () => {

    const [inputData, setInputData] = useState('');
    const [toggleSubmit, setToggleSubmit] = useState(false);
    const dispatch = useDispatch()

    const handleAddItem = () => {
        if (!inputData) {
            alert('plzz fill data');
        } else if(inputData) {
            
                 setToggleSubmit(false);
                 dispatch(addItem(inputData))
                 setInputData('');

                 //setIsEditItem(null);
        } else {
            // const allInputData = { id: new Date().getTime().toString(), name:inputData }
            // setItems([...items, allInputData]);
            // setInputData('')
        }
    }

    const handleKeypress = (e) => {
        if (e.keyCode === 13 || e.key === 'Enter') {
            handleAddItem()
          }
    }

    return (
        <div className="addItems">
            <input type="text" placeholder="✍ Add Friends..."
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                onKeyPress={(e) => handleKeypress(e)}
            />
            {/* <i className="fa fa-plus add-btn" title="Add Item" onClick={handleAddItem} ></i> */}
            {
                !toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={handleAddItem} ></i> :
                    <i className="fa fa-save add-btn" title="Save Item"></i>
            }

        </div>
    );
}

export default AddFriend;
