import {
  ArrowRight,
  BrainCircuit,
  Handshake,
  Instagram,
  Linkedin,
  Mail,
  Mic2,
  Music2,
  Newspaper,
  PenLine,
  Rocket,
  Send,
  Youtube
} from "lucide-react";

const icons = {
  ArrowRight,
  BrainCircuit,
  Handshake,
  Instagram,
  Linkedin,
  Mail,
  Mic2,
  Music2,
  Newspaper,
  PenLine,
  Rocket,
  Send,
  Youtube
};

export type IconName = keyof typeof icons;

export function AppIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name as IconName] ?? ArrowRight;
  return <Icon aria-hidden="true" className={className} strokeWidth={1.8} />;
}
