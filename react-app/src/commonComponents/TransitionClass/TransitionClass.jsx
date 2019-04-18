import React from "react";
import {Transition} from 'react-transition-group';
import {fadeClass} from '../../utils/fadeClass.js'

export default class TransitionClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fade: true
        };
    }

    setFade = (fadeState) => {
        this.setState({fade: fadeState})
    };

    render() {
        return (
            <Transition
                in={!this.state.fade}
                timeout={this.props.timeout}>
                {state => React.cloneElement(this.props.children, {
                    classFade: fadeClass(state),
                    setFade: this.setFade,
                    style: {display: this.state.fade ? 'none' : 'block'}
                })}
            </Transition>
        )
    }

}