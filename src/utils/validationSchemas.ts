import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  message: yup.string().required('Message is required'),
  phone: yup
    .string()
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .notRequired(),
});
