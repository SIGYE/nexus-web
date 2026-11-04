import { createElement } from 'react'
import {
  BookOpen,
  Briefcase,
  Compass,
  Globe,
  GraduationCap,
  Hammer,
  Handshake,
  Heart,
  Lightbulb,
  Link as LinkIcon,
  MessageSquare,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
  Wrench,
} from 'lucide-react'

// Icon names that can be used in the data files. Add more from https://lucide.dev/icons
const icons = {
  BookOpen,
  Briefcase,
  Compass,
  Globe,
  GraduationCap,
  Hammer,
  Handshake,
  Heart,
  Lightbulb,
  Link: LinkIcon,
  MessageSquare,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
  Wrench,
}

export function renderIcon(name, props) {
  return createElement(icons[name] ?? Sparkles, { 'aria-hidden': true, ...props })
}
