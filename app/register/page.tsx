export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <div className="flex flex-col items-center gap-6 w-80">
        <h1 className="text-2xl font-semibold">Create Account</h1>

        {/* Basic info fields */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border px-4 py-2 rounded"
        />

        {/* Create Account */}
        <a href="/feed" className="w-full">
          <button className="w-full px-4 py-3 rounded-full bg-black text-white">
            Create Account
          </button>
        </a>
      </div>
    </main>
  );
}

