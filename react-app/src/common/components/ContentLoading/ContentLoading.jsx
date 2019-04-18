import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            this.props.loading ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Загрузка ...</span>
                    </div>
                </div>
                :
                <React.Fragment>{this.props.children}</React.Fragment>
        )
    }
}