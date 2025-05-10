import type { Preview } from '@storybook/react'

import '../src/styles.css'
import './dark-mode.css'

import { withThemes } from './decorators/with-themes'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    tags: ['autodocs'],
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    options: {
      storySort: {
        method: 'alphabetical',
        // order: ["Introduction","Examples","Shadcn","Colors","Typography"],
      },
    },
  },
}

export const decorators = [withThemes]

export default preview
