"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/tracking";

type TrackedLinkProps = {
  href: string;
  event: string;
  label: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export function TrackedLink({ href, event, label, className, ariaLabel, children }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel ?? label}
      onClick={() => trackEvent(event, { label, href })}
    >
      {children}
    </Link>
  );
}
