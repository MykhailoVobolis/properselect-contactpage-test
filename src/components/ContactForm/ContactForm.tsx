'use client';

import { Form, Formik, FormikHelpers } from 'formik';
import { toast } from 'react-hot-toast';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import CustomСheckbox from '../CustomСheckbox/CustomСheckbox';

import css from './ContactForm.module.css';
import { validationSchema } from '@/utils/validationSchemas';

type FormFieldValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  agree: boolean;
};

const initialValues: FormFieldValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
  agree: false,
};

export default function ContactForm() {
  const handleSubmit = (
    values: FormFieldValues,
    { resetForm }: FormikHelpers<FormFieldValues>,
  ) => {
    console.log('Form data:', values);
    resetForm();
    toast.success('Form successfully submitted!');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <Form className={css.contactForm}>
          <div className={css.inputGroup}>
            <div className={css.inputItem}>
              <InputField label="*Name" name="name" />
              {touched.name && errors.name && (
                <div className={css.error}>{errors.name}</div>
              )}
            </div>
            <div className={css.inputItem}>
              <InputField label="*Email" name="email" />
              {touched.email && errors.email && (
                <div className={css.error}>{errors.email}</div>
              )}
            </div>
            <div className={css.inputItem}>
              <InputField label="Phone number" name="phone" />
              {touched.phone && errors.phone && (
                <div className={css.error}>{errors.phone}</div>
              )}
            </div>
            <div className={css.inputItem}>
              <InputField label="*Message" name="message" as="textarea" />
              {touched.message && errors.message && (
                <div className={css.error}>{errors.message}</div>
              )}
            </div>
          </div>
          <CustomСheckbox />
          <Button />
        </Form>
      )}
    </Formik>
  );
}
