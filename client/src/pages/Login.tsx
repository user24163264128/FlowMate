import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { loginWithGoogle } = useAuth();

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-6">FlowMate AI</h1>
      <button
        onClick={loginWithGoogle}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl"
      >
        Login with Google
      </button>
    </div>
  );
}