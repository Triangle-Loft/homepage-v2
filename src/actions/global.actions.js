import BaseActions from '@actions/base-actions'
import globalReducer from '@reducers/global.reducer'

class GlobalActions extends BaseActions {
  initApp() {
    return async (dispatch) => {
      dispatch(this.setValue('isInitialized', true))
    }
  }

  setIsLoading(value) {
    return (dispatch) => {
      dispatch(this.setValue('isLoading', value))
    }
  }
}

export default new GlobalActions(globalReducer)
