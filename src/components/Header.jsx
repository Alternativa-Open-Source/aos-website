import Link from "next/link";
// import {
//   Popover,
//   PopoverButton,
//   PopoverBackdrop,
//   PopoverPanel,
// } from '@headlessui/react'
// import { AnimatePresence, motion } from 'framer-motion'

// import { Button } from '@/components/Button'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLinks } from "@/components/NavLinks";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-12 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <span
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                    type="button"
                    aria-expanded="false"
                  >
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
                      <path d="M5 6h14M5 18h14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <Logo className="w-22 mb-5" />
                    </SheetTitle>
                    <SheetDescription>
                      <div className="flex flex-col gap-4 w-full text-xl">
                        <NavLinks />
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>

            <Button asChild className="hidden lg:block">
              <a href={process.env.NEXT_PUBLIC_GITHUB_REPO} target="_blank" >
              <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
}
