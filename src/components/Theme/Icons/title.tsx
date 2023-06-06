import { IconProps } from "../../../types/icon";

export default function TitleIcon(props: IconProps) {
  return (
    <svg
      width="172"
      height="70"
      viewBox="0 0 172 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="33" height="10" rx="5" fill="#11A5FF" />
      <path d="M0 24H45" stroke="#88D2FF" stroke-width="8" />
      <path d="M0 36H172" stroke="#88D2FF" stroke-width="3" />
      <path d="M0 52H172" stroke="#88D2FF" stroke-width="3" />
      <path d="M0 68H172" stroke="#88D2FF" stroke-width="3" />
      <path d="M0 44H172" stroke="#88D2FF" stroke-width="3" />
      <path d="M0 60H172" stroke="#88D2FF" stroke-width="3" />
    </svg>
  );
}
