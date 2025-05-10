import React from 'react'
import { cx } from '@/utils/cx'
import { tv } from 'tailwind-variants'

import { buttonStyles } from '@/components/Button/button.styles.ts'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const baseButton = tv({
  base: [
    // Base
    'relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold',
    // TODO: move Sizing to variant (small, medium, large)
    'px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6',
    // Focus
    'focus:not-data-focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500',
    // Disabled
    'data-disabled:opacity-50',
    // Icon
    '*:data-[slot=icon]:text-(--btn-icon) forced-colors:data-hover:[--btn-icon:ButtonText] *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText]',
  ],
})

const btn = tv({
  extend: baseButton,
})

const Button = (props: ButtonProps) => {
  return <button type="button" className={cx(btn({}))} {...props} />
}

export { Button, type ButtonProps }
