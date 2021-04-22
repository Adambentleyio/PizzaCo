import { MdStore as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'storeSettings',
  // visible title
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'Slicemaster',
      title: 'Slicemasters currently slicing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'hotSlices',
      title: 'Slices available today',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
  ],
};
