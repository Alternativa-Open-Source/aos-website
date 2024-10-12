import Link from "next/link";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLinks } from "@/components/NavLinks";

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Link href="/">
                <Logo className="h-20 w-60 flex-none fill-cyan-500" />
              </Link>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Alternativa Open Source
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">Encontre alternativas open source para ferramentas Software as a Service.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">&copy; Copyright {new Date().getFullYear()}. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
