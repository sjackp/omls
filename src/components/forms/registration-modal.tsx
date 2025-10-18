'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { XIcon } from '@/components/ui/icons';
import { validateEmail, validatePhone } from '@/lib/utils';
import { useLanguage } from '@/lib/language-context';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ 
  isOpen, 
  onClose
}) => {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    grade: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle modal visibility with proper timing
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  // Don't render if not open
  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = 'Child name is required';
    }

    if (!formData.grade.trim()) {
      newErrors.grade = 'Grade/Year is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Egyptian phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      alert(content.modal.successMessage);
      
      // Reset form and close modal
      setFormData({ parentName: '', childName: '', grade: '', email: '', phone: '' });
      setErrors({});
      onClose();
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isVisible ? 'bg-black bg-opacity-60 backdrop-blur-sm' : 'bg-transparent'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white rounded-xl shadow-2xl w-full max-w-md m-4 transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-800">
              {content.modal.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {content.modal.subtitle}
            </p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="h-8 w-8"
          >
            <XIcon className="h-4 w-4" />
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="parentName">{content.modal.parentName}</Label>
            <Input
              type="text"
              id="parentName"
              name="parentName"
              placeholder={content.modal.parentPlaceholder}
              value={formData.parentName}
              onChange={handleInputChange}
              className={errors.parentName ? 'border-red-500' : ''}
            />
            {errors.parentName && (
              <p className="text-sm text-red-500">{errors.parentName}</p>
            )}
          </div>
          
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="childName">{content.modal.childName}</Label>
            <Input
              type="text"
              id="childName"
              name="childName"
              placeholder={content.modal.childPlaceholder}
              value={formData.childName}
              onChange={handleInputChange}
              className={errors.childName ? 'border-red-500' : ''}
            />
            {errors.childName && (
              <p className="text-sm text-red-500">{errors.childName}</p>
            )}
          </div>
          
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="grade">{content.modal.grade}</Label>
            <Input
              type="text"
              id="grade"
              name="grade"
              placeholder={content.modal.gradePlaceholder}
              value={formData.grade}
              onChange={handleInputChange}
              className={errors.grade ? 'border-red-500' : ''}
            />
            {errors.grade && (
              <p className="text-sm text-red-500">{errors.grade}</p>
            )}
          </div>
          
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">{content.modal.email}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder={content.modal.emailPlaceholder}
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phone">{content.modal.phone}</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder={content.modal.phonePlaceholder}
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
          
          <div className="flex items-center pt-4">
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : content.modal.submit}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
