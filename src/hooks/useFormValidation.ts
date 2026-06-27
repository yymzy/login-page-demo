import { useState, useCallback } from 'react';
import { LoginFormData, FormErrors } from '../types/auth';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export function useFormValidation() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [shakeFields, setShakeFields] = useState<Set<string>>(new Set());

  const validateEmail = useCallback((email: string): string | undefined => {
    if (!email) return '请输入邮箱地址';
    if (!EMAIL_REGEX.test(email)) return '请输入有效的邮箱地址';
    return undefined;
  }, []);

  const validatePassword = useCallback((password: string): string | undefined => {
    if (!password) return '请输入密码';
    if (password.length < MIN_PASSWORD_LENGTH) return `密码长度至少 ${MIN_PASSWORD_LENGTH} 个字符`;
    return undefined;
  }, []);

  const validate = useCallback((data: LoginFormData): boolean => {
    const newErrors: FormErrors = {};
    const shakeSet = new Set<string>();

    const emailError = validateEmail(data.email);
    if (emailError) {
      newErrors.email = emailError;
      shakeSet.add('email');
    }

    const passwordError = validatePassword(data.password);
    if (passwordError) {
      newErrors.password = passwordError;
      shakeSet.add('password');
    }

    setErrors(newErrors);
    setShakeFields(shakeSet);

    if (shakeSet.size > 0) {
      setTimeout(() => setShakeFields(new Set()), 400);
    }

    return Object.keys(newErrors).length === 0;
  }, [validateEmail, validatePassword]);

  const clearError = useCallback((field: keyof FormErrors) => {
    setErrors(prev => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  return {
    errors,
    shakeFields,
    validate,
    clearError,
    validateEmail,
    validatePassword
  };
}
