import React from 'react';
import AddFriend from '../AddFriend';
import Welcome from '../Welcome';
import FriendList from '../FriendList';
import SearchFriend from '../SearchFriend';

const Layout = () => {
    return (
        <>  
            <div className="main-div">
                <div className="child-div">
                    <Welcome />
                    <AddFriend />
                    <SearchFriend />
                    <FriendList />
                </div>
            </div>
        </>
    );
}

export default Layout;
