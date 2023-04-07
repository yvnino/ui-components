import { ElementType, ComponentPropsWithRef, ForwardRefExoticComponent, RefAttributes, CSSProperties } from 'react'

export type CompoundedComponentWithRef<
  P,
  R,
  // eslint-disable-next-line @typescript-eslint/ban-types
  S = {}
> = ForwardRefExoticComponent<P & RefAttributes<R>> & S

type PropsWithOverridableAs<T extends ElementType, P> = Omit<P, 'as'> & {
  as?: T
} & ComponentPropsWithRef<T>

interface NamedComponent<P> {
  defaultProps?: Partial<P>
  displayName?: string
}
export interface OverridableComponent<P = {}> extends NamedComponent<P> {
  <T extends ElementType = ElementType<Omit<P, 'as'>>>(
    props: PropsWithOverridableAs<T, P>
  ): JSX.Element | null
}

export interface BaseProps {
  className?: string
  style?: CSSProperties
}
