

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  isShaking?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

export function InputField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  isShaking,
  placeholder,
  autoComplete
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          transition-all duration-200 ${error ? 'border-red-500' : 'border-slate-600'}
          ${isShaking ? 'animate-shake' : ''}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
