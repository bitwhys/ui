import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { Loading } from '@/icons/loading'
import { cx } from '@/utils/cx'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

import { scheme } from '@/components/Button/button.styles.ts'

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
  variants: {
    size: {
      sm: [
        // TODO
      ],
      md: [
        // TODO
      ],
      lg: [
        // TODO
      ],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const btn = tv({
  extend: baseButton,
  variants: {
    variant: {
      default: [
        // TODO
      ],
      primary: [
        // TODO
      ],
      ghost: [
        // TODO
      ],
      danger: [
        // TODO
      ],
    },
    scheme,
  },
})

interface ButtonProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof btn> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span
        className="pointer-fine:hidden absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      {children}
    </>
  )
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      className,
      variant,
      size,
      scheme,
      disabled,
      children,
      isLoading,
      loadingText,
      ...props
    },
    forwardRef,
  ) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component
        data-slot="button"
        ref={forwardRef}
        className={cx(btn({ variant, size, scheme }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <Loading className="size-4 shrink-0 animate-spin" aria-hidden="true" />
            <span className="sr-only">{loadingText ? loadingText : 'Loading'}</span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          <TouchTarget>{children}</TouchTarget>
        )}
      </Component>
    )
  },
)

Button.displayName = 'Button'

export { Button, btn, type ButtonProps }
