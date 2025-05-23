import React from 'react'
import { IconProps } from '@/icons/index.tsx'
import { cx } from '@/utils/cx'

export const RocketShip = ({ className, ...props }: IconProps) => (
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
      strokeMiterlimit="10"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      d="M14.5101 17.3601C8.96005 19.3901 8.96005 19.3901 6.78005 17.2101C4.61005 15.0401 4.61005 15.0401 6.63005 9.48012C8.82005 7.29012 12.4501 4.73012 15.6301 3.25012C18.2101 2.04012 20.5001 1.54012 21.4801 2.51012C23.6601 4.69012 18.4901 13.3801 14.5101 17.3601Z"
    ></path>
    <path
      fill="none"
      d="M2 17.12C3.3 15.82 5.44 15.86 6.79 17.21C8.14 18.56 8.18 20.7 6.88 22"
      strokeWidth="1.5"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      stroke="currentColor"
      d="M2 17.12C3.3 15.82 5.44 15.86 6.79 17.21C8.14 18.56 8.18 20.7 6.88 22"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      stroke="currentColor"
      d="M2 21.9999L3.87 20.1299"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      d="M14.1402 12.4701C13.4202 13.1901 12.2502 13.1901 11.5302 12.4701C10.8102 11.7501 10.8102 10.5801 11.5302 9.86007C12.2502 9.14007 13.4202 9.14007 14.1402 9.86007C14.8602 10.5801 14.8602 11.7501 14.1402 12.4701Z"
    ></path>
  </svg>
)
