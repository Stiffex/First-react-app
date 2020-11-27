import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Buttons( props ) {
    return (
        <div className="buttons">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="first" onClick={props.plus}>Увеличить</div>
                    </div>
                    <div className="col-4">
                        <div className="second" onClick={props.minus}>Уменьшить</div>
                    </div>
                    <div className="col-4">
                        <div className="third" onClick={props.reset}>Сбросить</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons;
