import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className='flex items-center'>
        <Link className='text-black-400 font-semibold text-2xl' href=''>
          DADI's KITCHEN
        </Link>

        <nav className='flex'>
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link href={''}>Login</Link>
        </nav>
      </header>
    </>
  );
}
