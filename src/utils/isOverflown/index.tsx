const FONT_RENDER_CORRECTION = 0.475

const isOverflown = (element: HTMLElement) => {
  const { scrollWidth, scrollHeight } = element
  const { width, height } = element.getBoundingClientRect()

  return (
    scrollWidth > width + FONT_RENDER_CORRECTION ||
    scrollHeight > height + FONT_RENDER_CORRECTION
  )
}

export default isOverflown
