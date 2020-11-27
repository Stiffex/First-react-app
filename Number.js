import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Number( props ) {
    return (
        <div className="container">
            <div className="row">
                <div className="number">
                    {props.counter}
                </div>
            </div>
        </div>
    )
}

export default Number;
