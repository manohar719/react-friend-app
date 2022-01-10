import React from 'react';
import AddFriend from '../AddFriend';
import Welcome from '../Welcome';
import FriendList from '../FriendList';
import SearchFriend from '../SearchFriend';
import "../../App.css"
import useToast from "../../components/Toast";

const Layout = () => {

    const { openToast, ToastComponent } = useToast(
        "Changes has been done successfully ",
        "success"
    );

    const handleAddItem = () => {
        openToast()
    }

    return (
        <>  
            <div className="main-div">
                <div className="child-div">
                    <Welcome />
                    <AddFriend add={handleAddItem}/>
                    <SearchFriend />
                    <FriendList showToast={handleAddItem}/>
                    <ToastComponent  />
                </div>
            </div>
        </>
    );
}

export default Layout;
