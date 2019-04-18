import React from "react";

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.text && nextProps.text) {
            this.props.setFade(false)
        }
        if (this.props.text && !nextProps.text) {
            this.props.setFade(true)
        }
    }

    render() {
        return (
            <div className={`modal ${this.props.classFade}`}
                 style={this.props.style && this.props.style}
                 onClick={() => this.props.setMessage('', '')}
                 tabIndex="-1" role="dialog">
                <div className="modal-dialog"
                     onClick={e => e.stopPropagation()}
                     role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.header ? this.props.header : 'Сообщение'}</h5>
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
