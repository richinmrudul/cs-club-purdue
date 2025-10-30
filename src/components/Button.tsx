interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ text, onClick, variant = "primary" }: ButtonProps) {
  const base = "px-4 py-2 rounded font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-yellow-500 text-black hover:bg-yellow-600"
      : "bg-gray-200 text-black hover:bg-gray-300";

  return (
    <button className={`${base} ${styles}`} onClick={onClick}>
      {text}
    </button>
  );
}
