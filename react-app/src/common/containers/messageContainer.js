import {connect} from "react-redux";
import TransitionClass from "../../commonComponents/TransitionClass/TransitionClass.jsx";
import Message from "../../commonComponents/Message/Message.jsx";
import {setMessage} from "../reducer.js";


export default connect(
    state => ({
        header: state.common.message.header,
        text: state.common.message.text
    }),
    (dispatch) => ({
        setMessage: (text, header) => dispatch(setMessage(text, header)),
    })
)(Message);