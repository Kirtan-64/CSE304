import React from 'react';
import useForm from './useForm';
import { useEffect } from 'react';

const resetData = () => {
    localStorage.removeItem('formValues');
    alert('Data reset successful!');
}

const validationRules = {
  username: [
    (value) => (value.length < 8 ? 'Username must be at least 8 characters' : null),
    (value) => (value.length > 20 ? 'Username must be at most 20 characters' : null),
  ],
  email: [
    (value) => (!value.includes('@') ? 'Invalid email address' : null),
  ],
  password: [
    (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
  ],
};

function RegistrationForm() {

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
  } = useForm(initialValues, validationRules);

  const onSubmit = (formValues) => {
    console.log('Form submitted with values:', formValues);
    localStorage.setItem('formValues', JSON.stringify(formValues));
    alert('Registration successful!');
    resetForm();
  };

  useEffect(() => {
    const formValues = JSON.parse(localStorage.getItem('formValues'));
    console.log('Form values:', formValues);
    setValues(formValues || initialValues);
    },[]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Kirtan's Form
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={values.username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && <p className="mt-2 text-sm text-red-600">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-6">
            <button
              type="button"
              onClick={resetForm}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Form
            </button>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={resetData}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;