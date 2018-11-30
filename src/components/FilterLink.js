import { connect } from 'react-redux'
import { changeVisibilityFilter } from '../actions'
import Link from './Link'

const mapStateToLinkProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
})
const mapDispatchToLinkProps = (dispatch, ownProps) => {
return {
  onClick() {
    dispatch(changeVisibilityFilter(ownProps.filter))
  }
}
}
const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link)

export default FilterLink