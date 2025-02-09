/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

router.get('/api/welcome', async () => {
  return {
    hello: 'world',
  }
})

