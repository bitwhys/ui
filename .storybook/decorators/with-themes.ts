import { withThemeByClassName } from '@storybook/addon-themes'

export const withThemes = withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
})
