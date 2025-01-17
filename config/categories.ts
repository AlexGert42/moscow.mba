import { TypeCategories } from '@/types/index'

const categories: { [key in TypeCategories]: TypeCategories } = {
  mini: 'mini',
  mba: 'mba',
  profession: 'profession',
  mbl: 'mbl',
  executive: 'executive'
}

export default categories
