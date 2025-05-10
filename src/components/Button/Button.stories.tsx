// import { cx } from '@/utils/cx'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    // variant: {
    //   control: 'radio',
    //   options: [...Object.keys(buttonVariants.variants.variant)],
    // },
  },
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Continue to installation',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    // variant: 'primary',
    // children: 'Primary',
  },
}
