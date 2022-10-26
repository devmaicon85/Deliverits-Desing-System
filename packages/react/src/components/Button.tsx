import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  padding: '0 $4',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$deliverits500',

        '&:not(:disabled):hover': {
          background: '$deliverits300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$deliverits300',
        border: '2px solid $deliverits500',

        '&:not(:disabled):hover': {
          background: '$deliverits500',
          color: '$white',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
