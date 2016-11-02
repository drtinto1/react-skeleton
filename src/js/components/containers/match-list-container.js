import React from 'react'
import { connect } from 'react-redux'

import store from '../../store'
import { loadAsyncJSONData } from '../../utils'
import { loadMatchList } from '../../actions/match-actions'

import MatchList from '../views/match-list'
import Loading from '../views/loading'

class MatchListContainer extends React.Component {

    componentDidMount() {
        loadAsyncJSONData(
            '/data/match-list',
            (data) =>  store.dispatch(loadMatchList(data))
        )
    }

    render() {
        if(this.props.data == null) {
            return (
                <Loading />
            )
        }
        return (
            <MatchList {...this.props} />
        )
    }
}

const mapStateToProps = function(store) {
    return {
        data: store.matchState.matches
    };
};

export default connect(mapStateToProps)(MatchListContainer);