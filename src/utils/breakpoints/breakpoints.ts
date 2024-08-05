/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable complexity */
import { useState, useEffect, useCallback } from 'react'
import { Breakpoints } from '@mui/system/createTheme/createBreakpoints'
import useMediaQuery from '@mui/material/useMediaQuery'

type BreakpointKeys = 'small' | 'medium' | 'large' | 'extra-large'

type BreakpointsList = {
  [key: string]: number
}

class BreakpointProvider {
  breakpoints: Partial<Breakpoints> = {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1920
    }
  }

  mediaQueries: {
    [key: string]: string
  }

  constructor() {
    this.mediaQueries = {
      small: `(max-width: ${this.breakpoints.values!.sm}px)`,
      medium: `(min-width: ${this.breakpoints.values!.sm}px) and (max-width: ${
        this.breakpoints.values!.md
      }px)`,
      large: `(min-width: ${this.breakpoints.values!.md}px) and (max-width: ${
        this.breakpoints.values!.lg
      }px)`,
      'extra-large': `(min-width: ${this.breakpoints.values!.lg}px)`
    }
  }

  disableMobileBreakpoints() {
    this.breakpoints.values!.xs = 768
    this.breakpoints.values!.sm = 768

    this.mediaQueries.small = ''
    this.mediaQueries.medium = ''
  }
}

export const appBreakpoints = new BreakpointProvider()

export const breakpointsList: BreakpointsList = {
  small: appBreakpoints.breakpoints.values!.sm,
  medium: appBreakpoints.breakpoints.values!.md,
  large: appBreakpoints.breakpoints.values!.lg,
  'extra-large': appBreakpoints.breakpoints.values!.xl
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const screens = (...sizes: BreakpointKeys[]) => {
  const validSizes = sizes.filter(size => appBreakpoints.mediaQueries[size])

  if (validSizes.length === 0) {
    return ''
  }

  const mediaQueries = validSizes
    .map(size => appBreakpoints.mediaQueries[size])
    .join(', ')

  return `@media ${mediaQueries}`
}

const screenSizeToBreakpointKey = (size: number): BreakpointKeys => {
  const { sm, md, lg } = appBreakpoints.breakpoints.values!

  if (size < sm) {
    return 'small'
  } else if (size >= sm && size < md) {
    return 'medium'
  } else if (size >= md && size < lg) {
    return 'large'
  }

  return 'extra-large'
}

export const isScreenSize = (
  size: keyof BreakpointsList,
  currentSize?: number
): boolean => {
  const sizeToUse = currentSize || window.innerWidth
  const foundBreakpoint = screenSizeToBreakpointKey(sizeToUse)

  return size === foundBreakpoint
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useScreenSize = () => {
  const [size, setSize] = useState(window.innerWidth)

  const updateSize = () => setSize(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return size
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useBreakpoint = (sizes: BreakpointKeys[] | BreakpointKeys) => {
  const mediaQueryString = screens(...([] as BreakpointKeys[]).concat(sizes))
  const mediaQuery = useMediaQuery(mediaQueryString, {
    noSsr: true
  })

  if (!mediaQueryString) return false

  return mediaQuery
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useScreens = <T = unknown>() => {
  // Get current screen size in pixels, e.g. 800
  const currentSize = useScreenSize()

  // Convert the retrieved screen size in pixels (e.g. 800)
  // to its corresponding screen size name (e.g. 'large')
  const screenKey = screenSizeToBreakpointKey(currentSize)

  // For every screenKey value, memoize the instance of a function
  // that picks a property from an object by screen name,
  // and return this memoized version of the function.
  return useCallback(
    (
      valuesByScreen: Partial<Record<BreakpointKeys, T>>,
      defaultValue: T | undefined = undefined
    ) => {
      if (screenKey in valuesByScreen) {
        return valuesByScreen[screenKey]
      }

      return defaultValue
    },
    [screenKey]
  )
}

export default appBreakpoints.breakpoints
