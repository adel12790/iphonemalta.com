import React, { useState } from 'react';
import Button from './Button';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  deviceType: string;
  issue: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  deviceType?: string;
  issue?: string;
}

const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    issue: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const deviceTypes = [
    'iPhone',
    'Samsung',
    'Google Pixel',
    'OnePlus',
    'Xiaomi',
    'Other',
  ];

  const issueTypes = [
    'Screen Damage',
    'Battery Issues',
    'Water Damage',
    'Software Problems',
    'Charging Issues',
    'Other',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!values.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!values.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!values.deviceType) {
      newErrors.deviceType = 'Please select a device type';
    }
    
    if (!values.issue) {
      newErrors.issue = 'Please select an issue type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setValues({
          name: '',
          email: '',
          phone: '',
          deviceType: '',
          issue: '',
          message: '',
        });
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 mb-4">
          Your request has been submitted. We'll get back to you within 1-2 business hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="primary">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-1">
            Device Type*
          </label>
          <select
            id="deviceType"
            name="deviceType"
            value={values.deviceType}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
              errors.deviceType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Device Type</option>
            {deviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.deviceType && <p className="mt-1 text-sm text-red-600">{errors.deviceType}</p>}
        </div>
        
        <div>
          <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
            Issue Type*
          </label>
          <select
            id="issue"
            name="issue"
            value={values.issue}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500 ${
              errors.issue ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Issue Type</option>
            {issueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.issue && <p className="mt-1 text-sm text-red-600">{errors.issue}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          placeholder="Please provide any additional details about your issue..."
        ></textarea>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>
      
      <p className="text-sm text-gray-500 mt-3">
        *Required fields. We'll get back to you within 1-2 business hours.
      </p>
    </form>
  );
};

export default ContactForm;