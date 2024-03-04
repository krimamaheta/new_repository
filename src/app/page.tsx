import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>fire base application</h2>
      <Link href="/signin">sign in</Link>
    </main>
  );
}
