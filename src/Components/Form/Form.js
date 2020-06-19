import React from 'react'

const Form = props => {
    <form>
        <p>
            <label htmlFor="title">Title</label>
            <input 
            type="text"
            name="title"
            id="title"
            onChange={props.handleInputChange} 
            value={props.handleSearchMovie} />
        </p>
        
    </form>
}