import { Story } from '@storybook/react'
import { ThemeProvider, DarkModeProvider, Button } from '../components'
import { useDarkModeContext } from '../components/DarkModeProvider/context/DarkModeContext'
import { CssBaseline } from '../components/AppShell/CssBaseline'
import React from 'react'

const ToggleModeBtn = () => {
  const { setDarkMode, isDark } = useDarkModeContext()

  const handleOnClick = () => {
    setDarkMode(!isDark)
  } 

  return <Button onClick={handleOnClick}>Toggle UI Mode</Button>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line max-params
export default function createStory<T extends React.FC<any>>(
  component: T,
  props: Omit<React.ComponentProps<T>, 'children'>,
  children?: React.ReactNode,
  wrapper?: React.FC<any>
) {
  const render: Story<React.ComponentProps<T>> & {
    args: Omit<React.ComponentProps<T>, 'children'>
  } = args => {
    if (wrapper) {
      const Wrapper = wrapper

      return (
        <DarkModeProvider>
          <ThemeProvider>
          <CssBaseline />
          <ToggleModeBtn />
            <br />
            <br />
            <Wrapper>{React.createElement(component, args, children)}</Wrapper>
          </ThemeProvider>
        </DarkModeProvider>
      )
    }

    return (
      <DarkModeProvider>
        <ThemeProvider>
        <ToggleModeBtn />
        <br />
        <br />
        <CssBaseline />
          {React.createElement(component, args, children)}
        </ThemeProvider>
      </DarkModeProvider>
    )
  }

  // @ts-ignore
  render.args = props

  return render
}
