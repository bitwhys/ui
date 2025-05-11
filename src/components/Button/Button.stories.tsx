// import { cx } from '@/utils/cx'
import { RocketShip } from '@/icons/rocket-ship.tsx'
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
    onClick: fn(),
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

export const Primary: Story = {
  args: {
    // variant: 'primary',
    children: 'Default',
  },
}
export const Ghost: Story = {
  args: {
    // variant: 'primary',
    children: 'Default',
  },
}
export const Disabled: Story = {
  args: {
    // variant: 'primary',
    children: 'Default',
  },
}
export const ExtraSmall: Story = {
  args: {
    // variant: 'primary',
    // children: 'Primary',
    size: 'xs',
  },
}
export const Small: Story = {
  args: {
    // variant: 'primary',
    // children: 'Primary',
    size: 'sm',
  },
}
export const Large: Story = {
  args: {
    // variant: 'primary',
    // children: 'Primary',
  },
}
export const WithLeadingIcon: Story = {
  args: {},
  render: (args) => (
    <Button {...args}>
      <RocketShip />
      Activate
    </Button>
  ),
}
export const isLoading: Story = {
  args: {
    isLoading: true,
    // variant: 'primary',
    // children: 'Primary',
  },
}
