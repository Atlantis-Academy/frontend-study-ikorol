import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from '../appearance'
import { createBaseStyles }       from '../base'
import { createBaseShape }        from '../shape'

export const baseStyles = createBaseStyles()

export const normalSizeStyles = ({ theme }) =>
  createBaseShape({
    size: 15,
    fontFamily: 'Gordita, sans-serif',
    fontSize: theme.fontSizes.normal,
    border: '1px solid',
  })

export const smallSizeStyles = ({ theme }) =>
  createBaseShape({
    size: 10,
    fontFamily: 'Gordita, sans-serif',
    fontSize: theme.fontSizes.small,
    border: '.5px solid',
  })

export const largeSizeStyles = ({ theme }) =>
  createBaseShape({
    size: 20,
    fontFamily: 'Gordita, sans-serif',
    fontSize: theme.fontSizes.medium,
    border: '1px solid',
  })

export const shapeStyles = switchProp(prop('size', 'large'), () => ({
  normal: normalSizeStyles,
  small: smallSizeStyles,
  large: largeSizeStyles,
}))

export const normalColorStyles = ({ theme }) =>
  createAppearanceStyles({
    fontColor: theme.colors.grayBlue,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.purple,
  })

export const appearanceStyles = switchProp(prop('color', 'normal'), () => ({
  normal: normalColorStyles,
}))
