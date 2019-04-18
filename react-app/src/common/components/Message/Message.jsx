import React from "react";

export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fade: true
        };
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.text && nextProps.text) {
            this.setState({fade: false})
        }
        if (this.props.text && !nextProps.text) {
            this.setState({fade: true})
        }
    }

    render() {
        return (
            <div className={`modal fade ${!this.state.fade && 'show'}`}
                 onClick={() => this.props.setMessage('', '')}
                 style={{display: this.state.fade ? 'none' : 'block'}}
                 tabIndex="-1" role="dialog">
                <div className="modal-dialog"
                     onClick={e => e.stopPropagation()}
                     role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.header || 'Сообщение'}</h5>
                            <button type="button"
                                    onClick={() => this.props.setMessage('', '')}
                                    className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" dangerouslySetInnerHTML={{__html: this.props.text}}/>
                    </div>
                </div>
            </div>
        )
    }
}
