
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'search-view', name: 'search-view', component: () => import('pages/SearchView.vue') },
      { path: 'categories/:id', name: 'category-details', component: () => import('pages/categories/details.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'cart', name: 'cart', component: () => import('pages/Cart.vue') },
      { path: 'favourite', name: 'favourite', component: () => import('pages/Favourite.vue') },
      { path: 'orders', name: 'orders', component: () => import('pages/Orders.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
