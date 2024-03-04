'use client'
import Image from "next/image";
import Profile from "./../../public/vercel.svg"
//import Image from "next/image";
import style from "./style.module.css"
import { useState } from "react";
export default function Home() {
  const[color,setcolor]=useState("red");
  const{red}=style;
  console.log(Profile)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1 className={style.green}>conditional module with css style</h1>
      <h2 className={color==="red"?style.red:style.green}>conditional css</h2>
      <h3 style={{backgroundColor:color==='red'?'red':'green'}}>heading 2</h3>

      <h3 id={style.orange}> orange colour</h3>

      <h3 className={red}>dummy api</h3>
      <h3 className={red}>dummy api</h3>
      <h3 className={red}>dummy api</h3>
      <h3 className={red}>dummy api</h3>
      <h3 className={red}>dummy api</h3>
      <button onClick={()=>setcolor("green")}>update color</button>

      <h2>image optimization</h2>
      <Image src={Profile}
      height={100}
    width={200}

/>

      <img src={Profile.src} />
      <h2>external image</h2>
      <Image src="data:image/jpeg;base64,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"
      height={200} width={200}/>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/%E0%B9%80%E0%B8%A8%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B9%82%E0%B8%9E%E0%B8%98%E0%B8%B4%E0%B9%8C.jpg/500px-%E0%B9%80%E0%B8%A8%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B9%82%E0%B8%9E%E0%B8%98%E0%B8%B4%E0%B9%8C.jpg"
      height={200}
      width={200}/>

      <h2>flower image</h2>
      <Image src="data:image/jpeg;base64,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" height={200} width={200}/ >

    </div>
    </main>
  );
}
//  
/*
  <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
*/ 