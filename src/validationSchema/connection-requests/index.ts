import * as yup from 'yup';

export const connectionRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  startup_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
