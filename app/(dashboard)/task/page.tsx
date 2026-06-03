import Link from "next/link";

export default function task() {
    return (
      <>
        <h1>task Page</h1>
        <Link href="/">Home</Link>
        <Link href="/task">task</Link>
        <Link href="/analytics">analytics</Link>
      </>
    );
}