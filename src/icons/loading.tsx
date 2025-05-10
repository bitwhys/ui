import { IconProps } from '@/icons/index.tsx'
import { cx } from '@/utils/cx'

export const Loading = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-slot="icon"
    className={cx(className)}
    {...props}
  >
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M12 22V19.5"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M12 4.5V2"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M17 20.66L15.74 18.49"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M8.26 5.51L7 3.34"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M20.66 17L18.49 15.74"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M5.51 8.26L3.34 7"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M22 12H19.5"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M4.5 12H2"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M20.66 7L18.49 8.26"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M5.51 15.74L3.34 17"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M17 3.34L15.74 5.51"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke="#221b38"
      d="M8.26 18.49L7 20.66"
    ></path>
  </svg>
)
