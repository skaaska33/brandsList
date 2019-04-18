import {connect} from "react-redux";
import Message from "../components/Message/Message.jsx";
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