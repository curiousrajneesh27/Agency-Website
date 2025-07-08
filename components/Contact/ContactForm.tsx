import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    phone: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    const formPayload = {
      access_key: '14ff41a5-b931-449e-9b1c-cd9e40aad3f9',
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      phone: formData.phone,
      subject: 'New Contact Form Submission',
      from_name: 'Website Contact Form',
      botcheck: false
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit form');
      }

      // Success handling
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        phone: ''
      });

      // Open WhatsApp if phone provided
      if (formData.phone) {
        const cleanPhone = formData.phone.replace(/\D/g, '');
        const whatsappUrl = `https://wa.me/${cleanPhone}?text=Thank%20you%20for%20contacting%20us!`;
        window.open(whatsappUrl, '_blank');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-slate-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-slate-700 mb-6">
          Your message has been sent successfully. We'll get back to you soon.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
      
      {submitError && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
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
            required
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
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
            required
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Phone (WhatsApp) */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            WhatsApp Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none transition-colors focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="+91XXXXXXXXXX"
          />
        </div>

        {/* Company */}
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

        {/* Message */}
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
            required
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        {/* Hidden Fields */}
        <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Submit Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;