import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between px-4 lg:px-6">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <span className="font-bold">Acme Inc</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/en">EN</Link>
        <Link href="/ko">KO</Link>
      </div>
    </header>
  )
}
