export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] flex items-center justify-center py-12">
      <form className="w-full max-w-2xl bg-white p-8 rounded-xl shadow space-y-6">
        
        <h1 className="text-2xl font-semibold text-center">
          Unified Health Registration
        </h1>

        {/* PERSONAL INFO */}
        <section className="space-y-4">
          <h2 className="font-medium text-lg">Personal Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input placeholder="First Name" className="input" />
            <input placeholder="Middle Name (optional)" className="input" />
            <input placeholder="Last Name" className="input" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="date" className="input" />
            <select className="input">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
            <select className="input">
              <option>Civil Status</option>
              <option>Single</option>
              <option>Married</option>
              <option>Widowed</option>
              <option>Separated</option>
            </select>
          </div>
        </section>

        {/* ADDRESS */}
        <section className="space-y-4">
          <h2 className="font-medium text-lg">Residential Address</h2>

          <input placeholder="Street Address" className="input" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input placeholder="City / Municipality" className="input" />
            <input placeholder="Province / State" className="input" />
            <input placeholder="ZIP / Postal Code" className="input" />
          </div>

          <input placeholder="Country" className="input" />
        </section>

        {/* CONTACT */}
        <section className="space-y-4">
          <h2 className="font-medium text-lg">Contact Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" placeholder="Email Address" className="input" />
            <input placeholder="Mobile Number" className="input" />
          </div>
        </section>

        {/* IDENTITY */}
        <section className="space-y-4">
          <h2 className="font-medium text-lg">Identification</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="input">
              <option>Government ID Type</option>
              <option>Passport</option>
              <option>Driver’s License</option>
              <option>National ID</option>
              <option>SSS / GSIS</option>
            </select>
            <input placeholder="ID Number" className="input" />
          </div>
        </section>

        {/* ACCOUNT */}
        <section className="space-y-4">
          <h2 className="font-medium text-lg">Account Security</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="password" placeholder="Password" className="input" />
            <input type="password" placeholder="Confirm Password" className="input" />
          </div>
        </section>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-black text-white font-medium hover:opacity-90"
        >
          Create Account
        </button>

      </form>

      {/* Tailwind helper */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          outline: none;
        }
        .input:focus {
          border-color: black;
        }
      `}</style>
    </main>
  );
}
