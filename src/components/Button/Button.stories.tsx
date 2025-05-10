// import { cx } from '@/utils/cx'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

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
    children: 'Button',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    // variant: 'primary',
    children: 'Default',
  },
}

export const Small: Story = {
  args: {
    // variant: 'primary',
    // children: 'Primary',
  },
}
export const Large: Story = {
  args: {
    // variant: 'primary',
    // children: 'Primary',
  },
}
export const WithLeadingIcon: Story = {
  args: {
    // variant: 'primary',
    // children: 'Primary',
  },
}
export const WithTrailingIcon: Story = {
  args: {
    // variant: 'primary',
    // children: 'Primary',
  },
}
