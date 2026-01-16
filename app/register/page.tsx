"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleCreateAccount = () => {
    // later this will be after API success
    router.push("/feed");
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Create Account</h1>

        {/* your inputs go here */}

        <button
          onClick={handleCreateAccount}
          className="px-8 py-3 rounded-full bg-black text-white"
        >
          Create Account
        </button>
      </div>
    </main>
  );
}
