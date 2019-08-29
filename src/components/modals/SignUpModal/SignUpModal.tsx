import Input from '@akashaproject/design-system/dist/components/Input'
import Modal from '@akashaproject/design-system/dist/components/Modal'
import React from 'react'
import WithLabel from '../../shared/WithLabel'

interface SignUpModalProps {
  isOpen: boolean
  username: string
  password: string
  usernameError: string
  passwordError: string
  onClose: () => void
  onOk: () => void
  onChangeUserName: (login: string) => void
  onChangePassword: (login: string) => void
}

const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  username,
  password,
  usernameError,
  passwordError,
  onClose,
  onOk,
  onChangeUserName,
  onChangePassword,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      headerContent="Sign up"
      onOk={onOk}
      onClose={onClose}
      closeTimeoutMS={0}
      cancelButtonContent="Cancel"
      ariaHideApp={false}
      okButtonContent="Sign up"
      hideCancelButton={false}
      hideOkButton={false}
    >
      <WithLabel label="Username" error={usernameError}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeUserName(e.target.value)}
        />
      </WithLabel>
      <WithLabel label="Password" error={passwordError}>
        <Input
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangePassword(e.target.value)}
          type="password"
        />
      </WithLabel>
    </Modal>
  )
}

export default SignUpModal
