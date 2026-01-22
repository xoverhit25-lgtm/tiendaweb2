import { slugify } from "./slugify"

export function getCategorySlug(categoryName: string): string {
  return slugify(categoryName)
}
