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
  
  Route.get('programming-language', 'King/ProgrammingLanguagesController.index').as('programming-language')
  Route.get('programming-language/create', 'King/ProgrammingLanguagesController.create').as('programming-language.create')
  Route.post('programming-language/create', 'King/ProgrammingLanguagesController.store').as('programming-language.create.post')
  Route.get('programming-language/:id', 'King/ProgrammingLanguagesController.show').as('programming-language.edit')
  Route.post('programming-language/:id', 'King/ProgrammingLanguagesController.update').as('programming-language.edit.post')
  Route.get('programming-language/delete/:id', 'King/ProgrammingLanguagesController.destroy').as('programming-language.delete')
  
  Route.get('framework', 'King/FrameworksController.index').as('framework')
  Route.get('framework/create', 'King/FrameworksController.create').as('framework.create')
  Route.post('framework/create', 'King/FrameworksController.store').as('framework.create.post')
  Route.get('framework/:id', 'King/FrameworksController.show').as('framework.edit')
  Route.post('framework/:id', 'King/FrameworksController.update').as('framework.edit.post')
  Route.get('framework/delete/:id', 'King/FrameworksController.destroy').as('framework.delete')

  Route.get('work', 'King/WorkExperiencesController.index').as('work')
  Route.get('work/create', 'King/WorkExperiencesController.create').as('work.create')
  Route.post('work/create', 'King/WorkExperiencesController.store').as('work.create.post')
  Route.get('work/:id', 'King/WorkExperiencesController.show').as('work.edit')
  Route.post('work/:id', 'King/WorkExperiencesController.update').as('work.edit.post')
  
  Route.get('edu', 'King/EducationsController.index').as('edu')
  Route.get('edu/create', 'King/EducationsController.create').as('edu.create')
  Route.post('edu/create', 'King/EducationsController.store').as('edu.create.post')
  Route.get('edu/:id', '').as('edu.edit')
  Route.post('edu/:id', '').as('edu.edit.post')
  
  Route.get('interest', 'King/InterestsController.index').as('interest')
  Route.get('interest/create', 'King/InterestsController.create').as('interest.create')
  Route.post('interest/create', 'King/InterestsController.store').as('interest.create.post')
  Route.get('interest/:id', '').as('interest.edit')
  Route.post('interest/:id', '').as('interest.edit.post')
  
  Route.get('portfolio', 'King/PortfoliosController.index').as('portfolio')
  Route.get('portfolio/create', 'King/PortfoliosController.create').as('portfolio.create')
  Route.post('portfolio/create', 'King/PortfoliosController.store').as('portfolio.create.post')
  Route.get('portfolio/:id', '').as('portfolio.edit')
  Route.post('portfolio/:id', '').as('portfolio.edit.post')
  
}).prefix('king').as('king').middleware(['auth'])

Route.group(()=>{
  Route.get('/', 'FrontController.index')
  Route.post('/send-message', 'FrontController.sendMessage').as('send.message')
  Route.get('/portfolio/image/:filename', 'King/PortfoliosController.image').as('portfolio.image')
  Route.get('/:portfolio', 'FrontController.portfolio')
}).middleware('front')
