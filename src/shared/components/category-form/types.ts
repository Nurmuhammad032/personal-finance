export type CategoryProps =
  | {
      mode: 'create'
      close: () => void
      id?: string
    }
  | {
      mode: 'edit'
      close: () => void
      id: string
    }
