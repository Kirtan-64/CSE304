import { useState, useCallback } from 'react';

function useForm(initialValues, validationRules = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateField = useCallback((name, value) => {
    const fieldRules = validationRules[name];
    if (!fieldRules) return null;

    for (const rule of fieldRules) {
      const error = rule(value);
      if (error) return error;
    }

    return null;
  }, [validationRules]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error || undefined,
    }));
  }, [validateField]);

  const setFieldValue = useCallback((name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error || undefined,
    }));
  }, [validateField]);

  const handleSubmit = useCallback((onSubmit) => (event) => {
    event.preventDefault();

    const newErrors = {};
    let hasErrors = false;

    Object.keys(values).forEach((key) => {
      const error = validateField(key, values[key]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      onSubmit(values);
    }
  }, [values, validateField]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
    setFieldValue,
  };
}

export default useForm;