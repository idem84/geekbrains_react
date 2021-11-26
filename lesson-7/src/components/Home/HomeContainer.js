import { profileSelector } from '../../selectors/profile'
import { bindActionCreators } from 'redux'
import { changeNameWithThunk } from '../../actions/profile'
import { connect } from 'react-redux'
import Home from './HomeComponent'

const mapStateToProps = (globalState) => {
    return profileSelector(globalState)
}
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            onChangeProfileName: changeNameWithThunk,
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
