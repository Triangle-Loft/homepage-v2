import React from 'react'
import { useDispatch } from 'react-redux'
import { closeInquiryModal } from '@actions/modals.actions'
import styles from './styles.module.scss'

const InquiryModal = () => {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(closeInquiryModal())
  }
  return (
    <FullModal onClose={closeModal}>
      <div className={styles.modalWrapper}>
        <h1>
          Thank you for your Inquiry
        </h1>
        <h2>
          You will hear from us soon!
        </h2>
      </div>
    </FullModal>
  )
}

export default InquiryModal