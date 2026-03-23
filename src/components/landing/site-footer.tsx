import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-4xl">
        {/* Links de Política */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <Link href="/termos" className="hover:text-slate-900 hover:underline transition-colors">
            Política de Privacidade
          </Link>
          <span className="text-slate-300">-</span>
          <Link href="/termos" className="hover:text-slate-900 hover:underline transition-colors">
            Privacy Policy
          </Link>
          <span className="text-slate-300">-</span>
          <Link href="/termos" className="hover:text-slate-900 hover:underline transition-colors">
            Termos de uso
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Foquinha. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
