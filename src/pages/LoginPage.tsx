
import { LoginForm } from '../components/LoginForm';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="animate-fadeUp">
        <LoginForm />
      </div>
    </div>
  );
}
