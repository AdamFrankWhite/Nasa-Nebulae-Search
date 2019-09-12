import React from 'react'

function QuantForm(props) {
    return (
        <div>
            <select 
                onChange={props.handleChange} 
                value={props.value}
            >
                <option selected>1</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>                
            </select>
            <p>{props.value}</p>
        </div>
     )
     
}

export default QuantForm