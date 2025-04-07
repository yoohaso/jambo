import { PlusIcon } from './icons';

interface WriteButtonProps {
  size: number;
}

export function WriteButton({ size }: WriteButtonProps) {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`flex items-center justify-center rounded-[100px] border-2 border-base-grayscale-grayscale-0 bg-form-button-primary`}
    >
      <PlusIcon />
    </div>
  );
}
