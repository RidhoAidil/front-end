import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>APACOBA</h1>
      <br/>
      <Link href ="/posts">APACOBA KALI</Link>
      <br/>
      <Link href ="/albums">Albums</Link>
    </>
  );
}
