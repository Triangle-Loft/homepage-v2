import React from 'react'
import { useDispatch } from 'react-redux'
import { closeJoinMailingModal } from '@actions/modals.actions'
import FullModal from '@components/fullmodal'
import styles from './styles.module.scss'

const JoinMailingModal = () => {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(closeJoinMailingModal())
  }
  return (
    <FullModal onClose={closeModal}>
      <div className={styles.modalWrapper}>
        <h1>
          Thank you for joininng our mailing list
        </h1>
        <h2>
          You will hear from us soon!
        </h2>
      </div>
    </FullModal>
  )
}

export default JoinMailingModal