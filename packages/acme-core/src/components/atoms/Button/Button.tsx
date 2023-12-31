import React from 'react'
import type { ReactNode } from 'react'
// import { useRouter } from "next/router";
import * as styles from './Button.css'

export type ButtonProps = {
  /** Button content */
  children: ReactNode
  /** Sets the style of the button */
  variant?: styles.Variant
  /** Sets the size  */
  size?: styles.Size
  /** Sets the link of the button */
  href?: string
}

export const Button = ({ children, variant = 'primary', size = 'medium', href }: ButtonProps) => {
  // const router = useRouter();
  return (
    <button
      className={styles.button({ variant, size })}
      // onClick={() => (href ? router.push(href) : null)}
    >
      {children}
    </button>
  )
}
