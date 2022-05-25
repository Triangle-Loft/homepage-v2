import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import InquiryModal from './JoinMailingModal'
import JoinMailingModal from './JoinMailingModal'
import OopsModal from './OopsModal'

const Modals = () => {
  const modals = useSelector((state) => state.modals.toJS())
  const {
    isShowJoinMailingModal,
    isShowInquiryModal,
    isShowOopsModal
  } = modals

  return (
    <>
      {isShowJoinMailingModal && <JoinMailingModal />}
      {isShowInquiryModal && <InquiryModal />}
      {isShowOopsModal && <OopsModal />}
    </>
  )
}

export default memo(Modals)
