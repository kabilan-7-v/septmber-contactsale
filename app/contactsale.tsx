'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ContactSalesForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    helpTopic: 'Contact Sales',
    firstName: '',
    lastName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    companyWebsite: '',
    jobTitle: '',
    industry: '',
    companyLocation: '',
    primaryInterest: '',
    currentAISolution: '',
    evaluationJourney: '',
    additionalInfo: '',
    hearAboutUs: '',
  });

  const helpOptions = [
    'Contact Sales',
    'Increase Rate Limits',
    'Business Associate Agreement',
    'Zero Day Retention',
    'Monthly Invoicing',
    'Product Support',
  ];

  const industries = [
    'Advertising & Marketing',
    'Agriculture',
    'Automotive',
    'Banking & Financial Services',
    'Biotechnology',
    'Chemicals',
    'Construction',
    'Consulting',
    'Consumer Goods',
    'Education',
    'Energy & Utilities',
    'Entertainment & Media',
    'Government',
    'Healthcare',
    'Hospitality',
    'Insurance',
    'Legal',
    'Manufacturing',
    'Non-profit',
    'Pharmaceuticals',
    'Real Estate',
    'Retail',
    'Technology',
    'Telecommunications',
    'Transportation & Logistics',
    'Other'
  ];

  const locations = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Japan',
    'Australia',
    'India',
    'China',
    'Brazil',
    'Other'
  ];

  const hearAboutOptions = [
    'Search Engine',
    'Social Media',
    'Word of Mouth',
    'News/Media',
    'Conference/Event',
    'Partner/Referral',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTopicSelect = (topic: string) => {
    setFormData(prev => ({
      ...prev,
      helpTopic: topic,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Product Support redirect view
  if (formData.helpTopic === 'Product Support') {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl md:text-6xl font-extralight text-center mb-6 tracking-tight">Contact sales</h1>
          <p className="text-zinc-400 text-lg text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Our sales team can provide additional resources and support for the Claude API and Claude for Work.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
            <aside className="lg:w-80">
              <div className="bg-zinc-900/50 backdrop-blur rounded-xl p-6 border border-zinc-800">
                <h3 className="text-white font-medium text-lg mb-3">More help, right this way</h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Browse articles, see product details, and get answers to technical questions.
                </p>
                <button className="px-5 py-2.5 border border-zinc-700 rounded-lg text-white hover:bg-zinc-800/50 transition-all duration-200 text-sm font-medium">
                  Visit support center
                </button>
              </div>
            </aside>

            <main className="flex-1">
              <div className="bg-zinc-900/30 backdrop-blur rounded-xl p-8 border border-zinc-800">
                <label className="block text-zinc-300 mb-3 text-sm font-medium">
                  What can we help you with?
                </label>
                <div className="relative mb-8">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-zinc-600 transition-all duration-200 group"
                  >
                    <span className="text-white">{formData.helpTopic}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                      {helpOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleTopicSelect(option)}
                          className={`w-full px-4 py-3 text-left transition-all duration-150 ${
                            formData.helpTopic === option 
                              ? 'bg-blue-600 text-white' 
                              : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6 backdrop-blur">
                  <p className="text-blue-100 text-base">
                    For product support, please visit our{' '}
                    <a href="#" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">
                      Support Center
                    </a>
                    .
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  // Main contact form
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-extralight text-center mb-6 tracking-tight">Contact sales</h1>
        <p className="text-zinc-400 text-lg text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          Our sales team can provide additional resources and support for the Claude API and Claude for Work.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          <aside className="lg:w-80">
            <div className="bg-zinc-900/50 backdrop-blur rounded-xl p-6 border border-zinc-800 lg:sticky lg:top-8">
              <h3 className="text-white font-medium text-lg mb-3">More help, right this way</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Browse articles, see product details, and get answers to technical questions.
              </p>
              <button className="px-5 py-2.5 border border-zinc-700 rounded-lg text-white hover:bg-zinc-800/50 transition-all duration-200 text-sm font-medium">
                Visit support center
              </button>
            </div>
          </aside>

          <main className="flex-1  border p-8 border-gray-500 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Topic Selection */}
              <div>
                <label className="block text-zinc-300 mb-2 text-sm font-medium">
                  What can we help you with?
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-zinc-600 transition-all duration-200 group"
                  >
                    <span className="text-white">{formData.helpTopic}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                      {helpOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleTopicSelect(option)}
                          className={`w-full px-4 py-3 text-left transition-all duration-150 ${
                            formData.helpTopic === option 
                              ? 'bg-blue-600 text-white' 
                              : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <label className="block text-zinc-300 mb-2 text-sm font-medium">
                    First name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 mb-2 text-sm font-medium">
                    Last name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-zinc-300 mb-2 text-sm font-medium">
                  Business email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  required
                  placeholder="If you're an existing user, please enter your account email."
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-zinc-300 mb-2 text-sm font-medium">
                  Phone number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200"
                />
              </div>

              {/* Company Fields */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <label className="block text-zinc-300 mb-2 text-sm font-medium">
                    Company or organization name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 mb-2 text-sm font-medium">
                    Company or organization website
                  </label>
                  <input
                    type="url"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-zinc-300 mb-2 text-sm font-medium">
                  Job title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200"
                />
              </div>

              {/* Industry and Location */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <label className="block text-zinc-300 mb-2 text-sm font-medium">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-zinc-900 text-zinc-500">Please Select</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry.toLowerCase().replace(/\s+/g, '-')} className="bg-zinc-900">
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-300 mb-2 text-sm font-medium">
                    Company headquarters location
                  </label>
                  <select
                    name="companyLocation"
                    value={formData.companyLocation}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-zinc-900 text-zinc-500">Please Select</option>
                    {locations.map(location => (
                      <option key={location} value={location.toLowerCase().replace(/\s+/g, '-')} className="bg-zinc-900">
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Primary Product Interest */}
              <div>
                <label className="block text-zinc-300 mb-2 text-sm font-medium">
                  Primary product interest
                </label>
                <select
                  name="primaryInterest"
                  value={formData.primaryInterest}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-zinc-900 text-zinc-500">Please Select</option>
                  <option value="claude-api" className="bg-zinc-900">Claude API</option>
                  <option value="claude-work" className="bg-zinc-900">Claude for Work</option>
                  <option value="both" className="bg-zinc-900">Both</option>
                  <option value="not-sure" className="bg-zinc-900">Not sure yet</option>
                </select>
              </div>

              {/* Current AI Solution */}
              <div>
                <label className="block text-zinc-300 mb-2 text-sm font-medium">
                  Please describe the Gen AI SaaS solution you're currently using, if any
                </label>
                <textarea
                  name="currentAISolution"
                  value={formData.currentAISolution}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your current setup..."
                />
              </div>

              {/* Evaluation Journey */}
              <div>
                <label className="block text-zinc-300 mb-2 text-sm font-medium">
                  Where are you in your evaluation journey?
                </label>
                <select
                  name="evaluationJourney"
                  value={formData.evaluationJourney}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-zinc-900 text-zinc-500">Please Select</option>
                  <option value="just-exploring" className="bg-zinc-900">Just exploring</option>
                  <option value="actively-evaluating" className="bg-zinc-900">Actively evaluating</option>
                  <option value="ready-to-implement" className="bg-zinc-900">Ready to implement</option>
                  <option value="expanding-usage" className="bg-zinc-900">Expanding current usage</option>
                </select>
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-zinc-300 mb-2 text-sm font-medium">
                  Please share a bit more about why you're contacting us and how the Anthropic team can support you.
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your use case, requirements, or questions..."
                />
              </div>

              {/* How did you hear about us */}
              <div>
                <label className="block text-zinc-300 mb-2 text-sm font-medium">
                  How did you hear about us? <span className="text-red-400">*</span>
                </label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-zinc-900 text-zinc-500">Please Select</option>
                  {hearAboutOptions.map(option => (
                    <option key={option} value={option.toLowerCase().replace(/\s+/g, '-')} className="bg-zinc-900">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Privacy Notice */}
              <div className="text-xs text-zinc-500 bg-zinc-900/30 border border-zinc-800 rounded-lg p-4">
                <p>
                  By submitting this form, you agree to Anthropic's processing of your information in accordance with our{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Privacy Policy</a>.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Submit
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ContactSalesForm;