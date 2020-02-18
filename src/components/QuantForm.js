import React from 'react'

function QuantForm(props) {
    return (
        <form className="search-box" onSubmit={props.clickHandle}>
            {/* <span>Search by:</span> */}
            <input type="text"
                onChange={props.handleChange} 
                value={props.searchTermvalue}
                name="searchTerm"
                placeholder="e.g. Carina"
            />
            {/* <select
                onChange={props.handleChange}
                name="category"
            >
                <option value="" defaultValue>category</option>
                <option value="nebula">nebula</option>
                <option>earth</option>
                <option>solar system</option>              
            </select> */}
            <select 
                onChange={props.handleChange} 
                value={props.quant}
                name="quant"
            >
                <option defaultValue>1</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>                
            </select>
            <button type="submit">Search</button>
        </form>
     )
     
}

export default QuantForm