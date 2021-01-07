import { FaPepperHot as icon} from 'react-icons/fa';

export default {

    //computer name
    name: 'topping',
    // Visible title
    title: 'Toppings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of Pizza',
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'What is the name of the topping?',
            options: {
                layout: 'checkbox'
            }
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian'
        },
        prepare: ({ name, vegetarian })  => ({
            title: ` ${name} ${vegetarian ? ' v+' : ''}`
        })
    }
}