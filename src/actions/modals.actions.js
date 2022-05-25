import modalsReducer from '../reducers/modals.reducer'

const { actions } = modalsReducer

const hideScroll = (scroll) => {
  const widthScroll = window.innerWidth - document.documentElement.clientWidth
  if (scroll === 'hideScroll') {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${widthScroll}px`
  }
}

const showScroll = (scroll) => {
  if (scroll === 'addScroll') {
    document.body.style.overflow = 'initial'
    document.body.style.paddingRight = '0px'
  }
}

export const openModal = (modalNameInReducer, statusScroll, params) => (dispatch) => {
  dispatch(actions.setValue({ field: 'params', value: params }))
  dispatch(actions.setValue({ field: modalNameInReducer, value: true }))
  hideScroll(statusScroll)
}

export const closeModal = (modalNameInReducer, statusScroll) => (dispatch) => {
  dispatch(actions.setValue({ field: modalNameInReducer, value: false }))
  dispatch(actions.setValue({ field: 'params', value: null }))
  showScroll(statusScroll)
}


export const openJoinMailingModal = (params) => (dispatch) => dispatch(openModal('isShowJoinMailingModal', 'hideScroll', params))
export const closeJoinMailingModal = () => (dispatch) => dispatch(closeModal('isShowJoinMailingModal', 'addScroll'))

export const openInquiryModal = (params) => (dispatch) => dispatch(openModal('isShowInquiryModal', 'hideScroll', params))
export const closeInquiryModal = () => (dispatch) => dispatch(closeModal('isShowInquiryModal', 'addScroll'))

export const openOopsModal = (params) => (dispatch) => dispatch(openModal('isShowOopsModal', 'hideScroll', params))
export const closeOopsModal = () => (dispatch) => dispatch(closeModal('isShowOopsModal', 'addScroll'))


