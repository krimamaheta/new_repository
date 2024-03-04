import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="main">
      <h2>Home page</h2>
      <Link href="/product"> Product List</Link><br/>
      <Link href="/addproduct">Add Product</Link>
    </main>
  );
}
