import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(){
    return(
        <div className='header'>
            <header>
                <br></br>
                <Link className='linked' to='/Characters'>Characters</Link>
                <Link className='linked' to='/Trailer'>Trailer</Link>
            </header>
        </div>
    )
}