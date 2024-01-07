import Image from "next/image";

export default function CrossButton({
  disabled = false,
  onClick,
}: {
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <div className="relative">
      <button
        disabled={disabled}
        onClick={onClick}
        type="button"
        className="absolute -right-1 -top-4"
        data-hs-remove-element="#dismiss-unstyled"
      >
        <Image src="/close-icon.svg" alt="Close" width={20} height={20} />
      </button>
    </div>
  );
}
