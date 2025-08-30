import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="flex gap-4">
        <Link href="/simulator">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Paper Trading Simulator</button>
        </Link>
        <Link href="/">
          <button className="bg-gray-500 text-white py-2 px-4 rounded">Home</button>
        </Link>
      </div>
    </div>
  );
}