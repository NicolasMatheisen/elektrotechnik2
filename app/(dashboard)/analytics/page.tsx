import Link from "next/link";

export default function Analytics() {
    return (
      <>
        <h1>Home Analytics</h1>
        <Link href="/">Home</Link>
        <Link href="/task">task</Link>
        <Link href="/analytics">analytics</Link>
      </>
    );
}