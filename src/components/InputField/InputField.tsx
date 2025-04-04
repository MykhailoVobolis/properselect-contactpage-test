'use client';

import { Field } from 'formik';

import css from './InputField.module.css';

type InputFieldProps = {
  label: string;
  name: string;
  as?: 'input' | 'textarea';
};

export default function InputField({
  label,
  name,
  as = 'input',
  ...props
}: InputFieldProps) {
  return (
    <div className={css.inputContainer}>
      <label className={css.labelText} htmlFor={name}>
        {label}
      </label>
      {as === 'textarea' ? (
        <Field
          className={css.textareaItem}
          name={name}
          as="textarea"
          rows="5"
          {...props}
        />
      ) : (
        <Field className={css.inputItem} name={name} {...props} />
      )}
    </div>
  );
}
