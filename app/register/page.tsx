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
            <input className="input" placeholder="First Name" />
            <input className="input" placeholder="Middle Name (optional)" />
            <input className="input" placeholder="Last Name" />
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

          <input className="input" placeholder="Street Address" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input className="input" placeholder="City / Municipality" />
            <input className="input" placeholder="Province / State" />
            <input className="input" placeholder="ZIP / Postal Code" />
          </div>

          <input className="input" placeholder="Country" />
        </section>

        {/* CONTACT */}
        <section className="space-y-4">
          <h2 className="font-medium text-lg">Contact Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" className="input" placeholder="Email Address" />
            <input className="input" placeholder="Mobile Number" />
          </div>
        </section>

        {/* IDENTIFICATION */}
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
            <input className="input" placeholder="ID Number" />
          </div>
        </section>

        {/* ACCOUNT */}
        <section className="space-y-4">
          <h2 className="font-medium text-lg">Account Security</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="password" className="input" placeholder="Password" />
            <input type="password" className="input" placeholder="Confirm Password" />
          </div>
        </section>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-black text-white font-medium hover:opacity-90"
        >
          Create Account
        </button>

      </form>
    </main>
  );
}
