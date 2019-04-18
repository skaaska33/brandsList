import React from "react";

export default (props) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                {props.item.description ?
                    <div dangerouslySetInnerHTML={{__html: props.item.description}}/>
                    :
                    <div className="alert alert-info mb-0" role="alert">
                        Информация по данному бренду отсутствует.
                    </div>
                }
            </div>
        </div>
    );
}