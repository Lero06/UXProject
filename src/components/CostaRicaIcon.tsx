import costaRicaIcon from "../assets/costa-rica.png";

interface CostaRicaIconProps {
  className?: string;
}

export function CostaRicaIcon({ className = "w-7 h-7" }: CostaRicaIconProps) {
  return (
    <img 
      src={costaRicaIcon} 
      alt="Costa Rica" 
      className={className}
    />
  );
}
