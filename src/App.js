import { connect } from 'react-redux';

import AppView from './AppView.js';

const mapStateToProps = (state) => { return {} }
const mapDispatchToProps = (dispatch) => { return {} }

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppView)

export { App };
