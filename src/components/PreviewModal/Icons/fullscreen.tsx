import { IconProps } from "../../../types";

export default function FullscreenIcon(props: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.6667 4V8C10.6667 8.70724 10.3857 9.38552 9.88562 9.88562C9.38552 10.3857 8.70724 10.6667 8 10.6667H4M28 10.6667H24C23.2928 10.6667 22.6145 10.3857 22.1144 9.88562C21.6143 9.38552 21.3333 8.70724 21.3333 8V4M21.3333 28V24C21.3333 23.2928 21.6143 22.6145 22.1144 22.1144C22.6145 21.6143 23.2928 21.3333 24 21.3333H28M4 21.3333H8C8.70724 21.3333 9.38552 21.6143 9.88562 22.1144C10.3857 22.6145 10.6667 23.2928 10.6667 24V28"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
