import { motion } from "framer-motion";
import { MotionIconProps } from "../../../types/icon";

export default function OrangeBG(props: MotionIconProps) {
  return (
    <motion.svg
      width="558"
      height="576"
      viewBox="0 0 558 576"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M707.851 179.599C703.154 149.503 683.347 73.637 602.024 30.3569C544.554 -0.254299 480.278 -8.20145 386.751 8.7353C335.598 17.9947 295.47 76.3106 282.421 96.3992C275.344 83.6445 208.505 49.9305 154.15 61.1154C85.0419 75.3417 56.1476 118.045 41.541 163.692C-1.89846 299.419 -7.25788 423.729 10.4883 557.616C18.227 615.993 38.5977 673.132 129.671 691.172C206.457 706.367 203.759 675.388 236.725 679.202C272.29 683.323 229.636 706.367 321.604 715.897C478.573 732.159 597.572 668.913 665.208 580.378C715.209 514.9 712.339 395.889 715.81 319.606C717.748 276.878 714.51 222.156 707.863 179.599"
        fill="#F87C56"
      />
      <path
        d="M284.726 119.212C286.676 91.0041 264.662 65.0777 237.718 52.5315C210.761 39.9854 179.709 38.2071 149.625 37.8391C112.93 37.3976 75.4513 38.8325 41.0137 50.7655C55.0438 75.3551 71.0976 99.1965 92.0569 118.942C113.016 138.675 139.163 154.765 168.401 159.524C226.533 168.967 284.726 119.199 284.726 119.199"
        fill="#26D07C"
      />
    </motion.svg>
  );
}
