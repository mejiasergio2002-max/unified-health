export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fafafa] py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Insurance Application
        </h1>

        <div className="flex flex-col gap-4">

          {/* Personal Information */}
          <input
            type="text"
            placeholder="Full Legal Name"
            className="border px-4 py-2 rounded"
          />

          <input
            type="date"
            placeholder="Date of Birth"
            className="border px-4 py-2 rounded"
          />

          <input
            type="text"
            placeholder="Home Address"
            className="border px-4 py-2 rounded"
          />

          <input
            type="text"
            placeholder="Social Security Number"
            className="border px-4 py-2 rounded"
          />

          {/* Reference Information */}
          <hr className="my-2" />

          <input
            type="text"
            placeholder="Reference Full Name"
            className="border px-4 py-2 rounded"
          />

          <input
            type="text"
            placeholder="Relationship to Reference"
            className="border px-4 py-2 rounded"
          />

          <input
            type="text"
            placeholder="Reference Contact Number"
            className="border px-4 py-2 rounded"
          />

          {/* Create Account */}
          <a href="/feed" className="mt-4">
            <button
              type="button"
              className="w-full py-3 rounded-full bg-black text-white font-medium"
            >
              Create Account
            </button>
          </a>

        </div>
      </div>
    </main>
  );
}

