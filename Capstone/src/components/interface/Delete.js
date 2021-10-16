import React from 'react';
import axios from 'axios';
export default function Delete({deleteChars}){

    const deleteChars = (charId) => {
        axios.delete(`https://rickandmortyapi.com/api/character/?name=${charId}`)
            .then(res => {
                setItems(prevItem => prevItem.filter(item => item.id !== charId))
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <button onClick={() => deleteChars(id)} className='dltBtn'>Delete</button>
        </div>
    )
}
