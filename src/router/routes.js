
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'search-view', component: () => import('pages/SearchView.vue') },
      { path: 'categories/:id', component: () => import('pages/categories/details.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'cart', component: () => import('pages/Cart.vue') },
      { path: 'favourite', component: () => import('pages/Favourite.vue') }
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
