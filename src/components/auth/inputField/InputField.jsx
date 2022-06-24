import { useField } from 'formik';
import { LabelStyled } from './InputField.styled';

const InputField = ({ label, required, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <LabelStyled>
        {label}
        {required && meta.touched && meta.error ? (
          <span className="required">{'\u00A0'}*</span>
        ) : null}
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </LabelStyled>
    </>
  );
};

export default InputField;
