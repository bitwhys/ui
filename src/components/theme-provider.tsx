import { createContext, useContext, useEffect, useState } from 'react'

// Core types
type Theme = 'dark' | 'light' | 'system'
type ResolvedTheme = 'dark' | 'light'
type Density = 'condensed' | 'normal' | 'spacious'
type ControlSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Storage abstraction
export interface StorageStrategy {
  getItem(key: string): Promise<string | null>
  setItem(key: string, value: string): Promise<void>
}

// Default localStorage implementation
class LocalStorageStrategy implements StorageStrategy {
  async getItem(key: string): Promise<string | null> {
    return localStorage.getItem(key)
  }

  async setItem(key: string, value: string): Promise<void> {
    localStorage.setItem(key, value)
  }
}

// Provider props
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultDensity?: Density
  defaultSize?: ControlSize
  storageStrategy?: StorageStrategy
  themeStorageKey?: string
  densityStorageKey?: string
  sizeStorageKey?: string
  disableTransitions?: boolean // Prevents flash during theme change
}

// State exposed through context
type ThemeProviderState = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  density: Density
  size: ControlSize
  setTheme: (theme: Theme) => void
  setDensity: (density: Density) => void
  setSize: (size: ControlSize) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  resolvedTheme: 'light',
  density: 'normal',
  size: 'md',
  setTheme: () => null,
  setDensity: () => null,
  setSize: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  defaultDensity = 'normal',
  defaultSize = 'md',
  storageStrategy = new LocalStorageStrategy(),
  themeStorageKey = 'cr81v-ui-theme',
  densityStorageKey = 'cr81v-ui-density',
  sizeStorageKey = 'cr81v-ui-size',
  disableTransitions = false,
  ...props
}: ThemeProviderProps) {
  // State initialization with defaults
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [density, setDensityState] = useState<Density>(defaultDensity)
  const [size, setSizeState] = useState<ControlSize>(defaultSize)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light')
  const [mounted, setMounted] = useState(false)

  // Load persisted settings on mount
  useEffect(() => {
    const loadSettings = async () => {
      try {
        // Load theme
        const storedTheme = await storageStrategy.getItem(themeStorageKey)
        if (storedTheme as Theme) {
          setThemeState(storedTheme as Theme)
        }

        // Load density
        const storedDensity = await storageStrategy.getItem(densityStorageKey)
        if (storedDensity as Density) {
          setDensityState(storedDensity as Density)
        }

        // Load control size
        const storedSize = await storageStrategy.getItem(sizeStorageKey)
        if (storedSize as ControlSize) {
          setSizeState(storedSize as ControlSize)
        }
      } catch (error) {
        console.error('Failed to load theme settings:', error)
      } finally {
        setMounted(true)
      }
    }

    loadSettings()
  }, [storageStrategy, themeStorageKey, densityStorageKey, sizeStorageKey])

  // Apply theme and density to document
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Temporarily disable transitions if requested
    if (disableTransitions) {
      root.classList.add('disable-transitions')
    }

    // Set theme class
    root.classList.remove('light', 'dark')

    // Determine and apply the actual theme
    let currentTheme: ResolvedTheme
    if (theme === 'system') {
      currentTheme = isDark ? 'dark' : 'light'
    } else {
      currentTheme = theme as ResolvedTheme
    }

    root.classList.add(currentTheme)
    setResolvedTheme(currentTheme)

    // Set control spacing attributes
    root.setAttribute('data-density', density)
    root.setAttribute('data-control-size', size)

    // Re-enable transitions
    if (disableTransitions) {
      window.setTimeout(() => {
        root.classList.remove('disable-transitions')
      }, 0)
    }
  }, [theme, density, mounted, disableTransitions])

  // Theme watcher for system theme changes
  useEffect(() => {
    if (!mounted) return

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const onMediaChange = () => {
      const systemTheme: ResolvedTheme = media.matches ? 'dark' : 'light'

      if (theme === 'system') {
        // Update DOM and state when in system mode
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(systemTheme)
        setResolvedTheme(systemTheme)
      } else if (resolvedTheme === systemTheme) {
        // If current theme matches system, offer to switch to system
        // This implements the ThemeWatcher pattern you requested
        setTheme('system')
      }
    }

    // Initial check
    onMediaChange()

    // Listen for changes
    media.addEventListener('change', onMediaChange)
    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, theme, mounted])

  // Setter functions with persistence
  const setTheme = async (newTheme: Theme) => {
    try {
      await storageStrategy.setItem(themeStorageKey, newTheme)
      setThemeState(newTheme)
    } catch (error) {
      console.error('Failed to save theme:', error)
      // Still update state even if persistence fails
      setThemeState(newTheme)
    }
  }

  const setDensity = async (newDensity: Density) => {
    try {
      await storageStrategy.setItem(densityStorageKey, newDensity)
      setDensityState(newDensity)
    } catch (error) {
      console.error('Failed to save density:', error)
      // Still update state even if persistence fails
      setDensityState(newDensity)
    }
  }

  const setSize = async (newSize: ControlSize) => {
    try {
      await storageStrategy.setItem(sizeStorageKey, newSize)
      setSizeState(newSize)
    } catch (error) {
      console.error('Failed to save control size:', error)
      // Still update state even if persistence fails
      setSizeState(newSize)
    }
  }

  // Context value
  const value = {
    theme,
    resolvedTheme,
    density,
    size,
    setTheme,
    setDensity,
    setSize,
  }

  // Prevent flash of unstyled content
  if (!mounted) {
    // You can return null or a loading state
    // or a simplified DOM that doesn't depend on theme
    return null
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// Hook to access theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
