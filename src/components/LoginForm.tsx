import React, { useState } from 'react';
import { InputField } from './InputField';
import { PasswordInput } from './PasswordInput';
import { SocialLogin } from './SocialLogin';
import { useFormValidation } from '../hooks/useFormValidation';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { errors, shakeFields, validate, clearError } = useFormValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate({ email, password, rememberMe });
    if (!isValid) return;

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('登录成功:', { email, rememberMe });
    } catch (error) {
      console.error('登录失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white text-center mb-6">登录</h2>

        <form onSubmit={handleSubmit}>
          <InputField
            id="email"
            label="邮箱"
            type="email"
            value={email}
            onChange={(value) => {
              setEmail(value);
              clearError('email');
            }}
            error={errors.email}
            isShaking={shakeFields.has('email')}
            placeholder="请输入邮箱地址"
            autoComplete="email"
          />

          <PasswordInput
            value={password}
            onChange={(value) => {
              setPassword(value);
              clearError('password');
            }}
            error={errors.password}
            isShaking={shakeFields.has('password')}
          />

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-slate-800"
              />
              <span className="text-sm text-slate-300">记住我</span>
            </label>
            <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
              忘记密码？
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50
              text-white font-semibold rounded-lg transition-all duration-200
              flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                登录中...
              </>
            ) : (
              '登录'
            )}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-800/50 text-slate-400">或使用以下方式登录</span>
            </div>
          </div>

          <SocialLogin />
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          还没有账号？{' '}
          <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            立即注册
          </a>
        </p>
      </div>
    </div>
  );
}
