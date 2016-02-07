import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../IndexPage';
import { push } from 'react-router-redux';

export default connect(
    state => ({

    }),
    dispatch => bindActionCreators({
        push
    }, dispatch)
)(Wrapped);
