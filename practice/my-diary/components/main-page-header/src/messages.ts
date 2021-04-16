import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  name: {
    id: `${name}.name`,
    defaultMessage: 'Irina Korol',
  },
  post: {
    id: `${name}.post`,
    defaultMessage: 'posts',
  },
  liked: {
    id: `${name}.liked`,
    defaultMessage: 'liked',
  },
})
