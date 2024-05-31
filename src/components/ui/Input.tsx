import React, { InputHTMLAttributes, ReactNode, forwardRef, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string | ReactNode;
  placeholder?: string;
  icon?: string | ReactNode;
  placement?: 'start' | 'end';
  type?: string;
  variant?: 'primary' | 'naked' | 'feint' | 'grey' | 'black';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = forwardRef((props, ref) => {
  const {
    className,
    label,
    placeholder,
    icon = null,
    placement = 'start',
    onChange,
    type,
    variant = 'primary',
    required,
    ...rest
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    return null;
  };

  return (
    <label className={classnames(className, 'flex flex-col items-start')}>
      {label && (
        <span className='text-black text-sm font-medium mb-2 flex items-center'>
          {label}
          {required ? <span>*</span> : null}
        </span>
      )}
      <div
        className={classnames('w-full h-fit relative rounded-md', {
          'bg-gray-500 border border-gray-300 focus-within:ring-ch-primary focus-within:ring-1':
            variant === 'grey',
        })}
      >
        {icon && (
          <span
            className={classnames('absolute -translate-y-1/2 top-1/2 mt-[0.5px]', {
              'font-medium': typeof icon === 'string',
              'ml-4 left-0': placement === 'start',
              'mr-4 right-0': placement === 'end',
            })}
          >
            {icon}
          </span>
        )}
        <input
          className={classnames(
            'w-full h-10 p-2 text-black text-sm focus:outline-none outline-none placeholder:text-xs rounded-md',
            {
              '!pl-12': icon && placement === 'start',
              '!pr-12': icon && placement === 'end',
              '!pl-10': icon && placement === 'start' && variant === 'naked',
              'placeholder:text-[rgba(28,86,145,0.2)]': variant === 'primary',
              'placeholder:text-[rgba(0,0,0,0.3)] bg-gray-300': variant === 'grey',
            },
          )}
          placeholder={placeholder}
          onChange={handleOnChange}
          type={type}
          autoComplete='on'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
          ref={mergeRefs([ref, inputRef])}
          {...rest}
        />
      </div>
    </label>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  placement: PropTypes.oneOf(['start', 'end']),
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'naked', 'feint', 'grey']),
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default Input;
