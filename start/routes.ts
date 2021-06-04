/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/king/login', 'King/AuthController.login').as('king.login')
Route.post('/king/login', 'King/AuthController.postLogin').as('king.login.post')

Route.group(() => {
  Route.get('/', 'King/KingController.index').as('index')
  
  Route.get('profile', 'King/ProfilesController.index').as('profile')
  Route.post('profile', 'King/ProfilesController.update').as('profile.post')
  
  Route.get('expertise', 'King/ExpertiseController.index').as('expertise')
  Route.get('expertise/create', 'King/ExpertiseController.create').as('expertise.create')
  Route.post('expertise/create', 'King/ExpertiseController.store').as('expertise.create.post')
  Route.get('expertise/:id', '').as('expertise.edit')
  Route.post('expertise/:id', '').as('expertise.edit.post')
  
  Route.get('work', 'King/WorkExperiencesController.index').as('work')
  Route.get('work/create', 'King/WorkExperiencesController.create').as('work.create')
  Route.post('work/create', 'King/WorkExperiencesController.store').as('work.create.post')
  Route.get('work/:id', '').as('work.edit')
  Route.post('work/:id', '').as('work.edit.post')
  
  Route.get('edu', 'King/EducationsController.index').as('edu')
  Route.get('edu/create', 'King/EducationsController.create').as('edu.create')
  Route.post('edu/create', 'King/EducationsController.store').as('edu.create.post')
  Route.get('edu/:id', '').as('edu.edit')
  Route.post('edu/:id', '').as('edu.edit.post')
  
  Route.get('interest', '').as('interest')
  Route.post('interest', '').as('interest.post')
  Route.get('interest/:id', '').as('interest.edit')
  Route.post('interest/:id', '').as('interest.edit.post')
  
  Route.get('portfolio', '').as('portfolio')
  Route.post('portfolio', '').as('portfolio.post')
  Route.get('portfolio/:id', '').as('portfolio.edit')
  Route.post('portfolio/:id', '').as('portfolio.edit.post')
  
}).prefix('king').as('king').middleware(['auth'])

Route.group(()=>{
  Route.get('/', 'FrontController.index')
  Route.get('/:portfolio', 'FrontController.portfolio')
}).middleware('front')
