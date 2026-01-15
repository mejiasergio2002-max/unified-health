import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <div className="flex flex-col items-center gap-8">
        
        <Image
          src="/images/unified-health-logo.png"
          alt="Unified Health"
          width={320}
          height={120}
          priority
        />

        <div className="flex gap-4">
          <Link href="/register">
            <button className="px-8 py-3 rounded-full bg-black text-white text-sm font-medium">
              Register
            </button>
          </Link>

          <Link href="/login">
            <button className="px-8 py-3 rounded-full border border-black text-black text-sm font-medium">
              Sign In
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}

