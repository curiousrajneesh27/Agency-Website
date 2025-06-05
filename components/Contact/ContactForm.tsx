import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm()) {
      e.preventDefault();
    }
  };

  return (
    <div className="bg-slate-50 rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="access_key" value="14ff41a5-b931-449e-9b1c-cd9e40aad3f9" />
        <input type="hidden" name="from_name" value={formData.name} />

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
              errors.name ? 'border-red-500' : 'border-slate-300'
            } focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            } focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
            placeholder="Your email address"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
            Company (Optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none transition-colors focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Your company name"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
              errors.message ? 'border-red-500' : 'border-slate-300'
            } focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
            placeholder="How can we help you?"
            rows={5}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Submit Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;