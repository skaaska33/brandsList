import React from 'react';

export default (props) => {
    return (
        <div className="card">
            <div className="card-header">
                {props.header}
            </div>
            <div className="card-body">
                <input className="form-control"
                       type="text"
                       onChange={props.changeInput}
                       placeholder={props.placeholder}/>
            </div>
        </div>
    );
}