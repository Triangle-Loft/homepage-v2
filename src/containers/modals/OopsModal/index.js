import React from 'react'
import { useDispatch } from 'react-redux'
import { closeOopsModal } from '@actions/modals.actions'
import FullModal from '@components/fullmodal'
import styles from './styles.module.scss'

const OopsModal = () => {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(closeOopsModal())
  }
  return (
    <FullModal onClose={closeModal}>
      <div className={styles.modalWrapper}>
        <h1>
          Oops!
        </h1>
        <h2>
          It looks like the email you entered does not exist. <br />
          Please try again.
        </h2>
      </div>
    </FullModal>
  )
}

export default OopsModal