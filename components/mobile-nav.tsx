"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

interface LangLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  navItems: NavItem[];
  langLinks: LangLink[];
  openLabel: string;
  closeLabel: string;
  languageToggleLabel: string;
}

const FOCUSABLE = 'a[href], button:not([disabled])';

export function MobileNav({
  navItems,
  langLinks,
  openLabel,
  closeLabel,
  languageToggleLabel,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Move focus into the menu when it opens
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const first = menuRef.current.querySelector<HTMLElement>(FOCUSABLE);
      first?.focus();
    }
  }, [isOpen]);

  // Handle ESC and focus trap while menu is open
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;
      const menu = menuRef.current;
      if (!menu) return;

      const focusable = Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  function close() {
    setIsOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        aria-label={isOpen ? closeLabel : openLabel}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-deepearth/10 text-deepearth transition hover:bg-deepearth hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
            <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-nav-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label={openLabel}
          className="absolute inset-x-0 top-full z-50 border-t border-deepearth/10 bg-cloudwhite/97 px-6 py-5 shadow-xl backdrop-blur"
        >
          <nav aria-label={openLabel}>
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-deepearth transition hover:bg-deepearth hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            role="group"
            aria-label={languageToggleLabel}
            className="mt-4 flex gap-2 border-t border-deepearth/10 pt-4"
          >
            {langLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-full border border-deepearth/10 px-4 py-2 text-sm text-deepearth transition hover:bg-deepearth hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
