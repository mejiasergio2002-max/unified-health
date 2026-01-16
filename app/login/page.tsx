export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <div className="flex flex-col items-center gap-6 w-80">
        <h1 className="text-2xl font-semibold">Sign In</h1>

        {/* Username */}
        <input
          type="text"
          placeholder="Username or Email"
          className="w-full border px-4 py-2 rounded"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded"
        />

        {/* Sign In → Feed */}
        <a href="/feed" className="w-full">
          <button
            type="button"
            className="w-full px-4 py-3 rounded-full bg-black text-white"
          >
            Sign In
          </button>
        </a>
      </div>
    </main>
  );
}

