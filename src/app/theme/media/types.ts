import { Size } from '../breakpoints/types'

export type Media = { [key in keyof Size]: string }
