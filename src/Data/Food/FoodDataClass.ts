import { provideLocalStorageDataClass } from '../../utils/provideLocalStorageDataClass'

export const Food = provideLocalStorageDataClass('Food', {
  initialContent: [
    {
      _id: '1',
      name: 'All-purpose flour',
      category: 'Baking',
      unit: 'cup',
    },
    {
      _id: '2',
      name: 'Sugar',
      category: 'Baking',
      unit: 'cup',
    },
    {
      _id: '3',
      name: 'Salt',
      category: 'Seasoning',
      unit: 'teaspoon',
    },
    {
      _id: '4',
      name: 'Butter',
      category: 'Dairy',
      unit: 'cup',
    },
    {
      _id: '5',
      name: 'Eggs',
      category: 'Dairy',
      unit: 'piece',
    },
    {
      _id: '6',
      name: 'Milk',
      category: 'Dairy',
      unit: 'cup',
    },
    {
      _id: '7',
      name: 'Olive oil',
      category: 'Oils',
      unit: 'tablespoon',
    },
    {
      _id: '8',
      name: 'Onion',
      category: 'Vegetables',
      unit: 'piece',
    },
    {
      _id: '9',
      name: 'Garlic',
      category: 'Vegetables',
      unit: 'clove',
    },
    {
      _id: '10',
      name: 'Tomatoes',
      category: 'Vegetables',
      unit: 'piece',
    },
    {
      _id: '11',
      name: 'Chicken breast',
      category: 'Meat',
      unit: 'pound',
    },
    {
      _id: '12',
      name: 'Ground beef',
      category: 'Meat',
      unit: 'pound',
    },
    {
      _id: '13',
      name: 'Pasta',
      category: 'Grains',
      unit: 'ounce',
    },
    {
      _id: '14',
      name: 'Rice',
      category: 'Grains',
      unit: 'cup',
    },
    {
      _id: '15',
      name: 'Black pepper',
      category: 'Seasoning',
      unit: 'teaspoon',
    },
  ],
})
