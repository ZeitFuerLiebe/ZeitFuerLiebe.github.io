import { Heart } from 'lucide-react';

export function Logo() {
 return (
 <a 
 href={import.meta.env.BASE_URL}
 className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity"
 >
 <Heart className="w-5 h-5 fill-primary text-primary" />
 <span className="font-display text-xl">
 Neues <em className="italic">Kapitel</em>
 </span>
 </a>
 );
}
