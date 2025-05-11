import { ThemeProvider } from '../../src/components/theme-provider'

export const withThemeProvider = (Story, { parameters }) => {
  // 👇 Make it configurable by reading the theme value from parameters
  const { defaultTheme = 'system', defaultDensity = 'normal', defaultSize = 'md' } = parameters
  return (
    <ThemeProvider
      defaultTheme={defaultTheme}
      defaultDensity={defaultDensity}
      defaultSize={defaultSize}
    >
      <Story />
    </ThemeProvider>
  )
}
