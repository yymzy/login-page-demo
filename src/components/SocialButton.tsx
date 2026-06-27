import React from 'react';

interface SocialButtonProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

export function SocialButton({ name, icon, color, onClick }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-600
        hover:border-slate-500 transition-all duration-200 ${color}`}
    >
      {icon}
      <span className="text-sm font-medium text-slate-200">{name}</span>
    </button>
  );
}
