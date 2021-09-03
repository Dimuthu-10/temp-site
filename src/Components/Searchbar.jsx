import React from 'react';
import "./Searchbar.css"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

function Searchbar() {
    return (
        <div className="search">
            <div className="search_box">
                <SearchIcon />
                <input></input>
                <MicIcon />
            </div>
        </div>
    )
}

export default Searchbar;
