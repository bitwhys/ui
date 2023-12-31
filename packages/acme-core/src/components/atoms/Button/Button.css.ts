import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { red, sand, orange } from '@radix-ui/colors'

const variant = {
  primary: {
    backgroundColor: red.red10,
    color: 'white',
    ':hover': {
      backgroundColor: red.red9,
    },
  },
  secondary: {
    backgroundColor: sand.sand7,
    color: sand.sand12,
    ':hover': {
      backgroundColor: sand.sand8,
    },
  },
}

export type Size = keyof typeof size

const size = {
  small: {
    padding: '4px 12px',
  },
  medium: {
    padding: '8px 16px',
  },
  large: {
    padding: '12px 20px',
  },
}

export const button = recipe({
  base: {
    all: 'unset',
    borderRadius: 9999,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 16,
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      cursor: 'pointer',
    },
    ':active': {
      transform: 'scale(0.96)',
    },
  },
  variants: {
    variant,
    size,
  },
})

export type Variant = keyof typeof variant

export type ButtonVariants = RecipeVariants<typeof button>
