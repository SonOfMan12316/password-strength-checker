import React, { useState } from 'react';
import Input from '../components/ui/Input';
import { EyeOpen, EyeClose } from '../components/icons';
import { useStore } from '../store';

const PasswordCard = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [password, setPassword] = useState('');
  const editPassword = useStore((state) => state.editPassword);

  const updatePassword = (newPassword: string) => {
    setPassword(newPassword);
    editPassword(newPassword);
  };
  const style = {
    border: '1px solid rgba(0, 0, 0, .12)',
  };

  return (
    <div className='px-6 lg:px-8 my-4 lg:mt-8 mb-4 flex justify-center'>
      <form
        onSubmit={(event) => event.preventDefault()}
        style={style}
        className='p-4 rounded w-full lg:w-10/12'
      >
        <Input
          type={passwordType}
          onChange={(event) => updatePassword(event?.target?.value)}
          value={password}
          placement='end'
          variant='grey'
          placeholder='Password'
          icon={
            passwordType === 'text' ? (
              <EyeOpen
                className='cursor-pointer'
                onClick={() => {
                  setPasswordType('password');
                }}
              />
            ) : (
              <EyeClose
                className='cursor-pointer'
                onClick={() => {
                  setPasswordType('text');
                }}
              />
            )
          }
        />
      </form>
    </div>
  );
};

export default PasswordCard;
