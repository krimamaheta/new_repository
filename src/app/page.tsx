import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <h1>welcome to main page</h1>
   <img src="https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-blossom-tree-1225186_1280.jpg" height={200} width={200}/>
    </main>
  );
}
