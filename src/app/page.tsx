import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-24">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">CodeSense.</h1>
        <ModeToggle />
      </header>

      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-2xl mb-8">Welcome to CodeSense!</h2>
        <div className="flex flex-row gap-x-4 mb-8">
{/*           <Link href="/repo" className={buttonVariants({ variant: "default" })}>
            Have a github repo?
          </Link> */}
          <Link
            href="/source"
            className={buttonVariants({ variant: "default" })}
          >
            Have a code snippet?
          </Link>
        </div>
      </main>

      <footer className="mt-12 text-center">
        <p>&copy; {new Date().getFullYear()} CodeSense. All rights reserved.</p>
        <Link href="https://github.com/kothavade/CodeSense/tree/rewrite">
          <a className="underline text-blue-500">View Source Code</a>
        </Link>
      </footer>
    </div>
  );
}
