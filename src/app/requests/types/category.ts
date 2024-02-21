export type Categories = {
  id: string
  name: string
}

export type CategoriesWithoutId = Omit<Categories, 'id'>
