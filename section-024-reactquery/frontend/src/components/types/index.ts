export interface EventInterface {
  id: string
  date :string
  image: string
  title: string
  location: string
}

export interface ImageInterface {
  path: string
  caption: string
}

export interface MyError extends Error {
  code?: number | undefined
  info?: string | undefined
}
