import React from 'react';
import { useState } from 'react';
import "./Searchbar.css"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Searchbar({hideButtons=false}) {
    const[input, setInput] = useState('');
    const history = useHistory();

    const search = (e) =>{
        e.preventDefault();

        console.log("you hit the enter >>",input);
        history.push('/search');
    }

    return (
        <form className="search">
            <div className="search_box">
                <SearchIcon className="search_icon" />
                <input value={input} onChange={e => setInput(e.target.value)}></input>
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className="search_cards">
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ):(
                <div className="search_cards">
                    <Button className="hidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button className="hidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
            
        </form>
    )
}

export default Searchbar;
