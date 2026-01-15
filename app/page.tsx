import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <div className="flex flex-col items-center gap-8">

        {/* LOGO */}
        <img
          src="/images/unified-health-logo.svg"
          alt="Unified Health"
          className="w-[320px] h-auto"
        />

        {/* BUTTONS */}
        <div className="flex gap-4">
          <Link href="/register">
            <button className="px-8 py-3 rounded-full
