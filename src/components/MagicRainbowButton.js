import React from 'react'
import styled from 'styled-components'

import useRainbow from './use-rainbow.hook'

const MagicRainbowButton = ({
  children,
  intervalDelay = 1300,
  ...delegated
}) => {
  const transitionDelay = intervalDelay * 1.25

  const colors = useRainbow({ intervalDelay })

  const colorKeys = Object.keys(colors)

  return (
    <ButtonElem
      {...delegated}
      style={{
        ...colors,
        transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear
        `,
        background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `
      }}
    >
      {children}
    </ButtonElem>
  )
}

const ButtonElem = styled.button`
  position: relative;
  border: none;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  object-fit: fill;
  padding: 0 16px 16px 16px;
  border-solor: #eee #ddd #bbb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
`

export default MagicRainbowButton
