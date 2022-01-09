
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'search-view', name: 'search-view', component: () => import('pages/SearchView.vue') },
      { path: 'categories/:slug', name: 'category-details', component: () => import('pages/categories/details.vue') },
      { path: 'products/:id', name: 'product-details', component: () => import('pages/products/details.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'cart', name: 'cart', component: () => import('pages/Cart.vue') },
      { path: 'favourite', name: 'favourite', component: () => import('pages/Favourite.vue') },
      { path: 'orders', name: 'orders', component: () => import('pages/Orders.vue') },
      { path: 'signin', name: 'signin', component: () => import('pages/auth/Signin.vue') },
      { path: 'signup', name: 'signup', component: () => import('pages/auth/Signup.vue') },
      { path: 'onboarding', name: 'onboarding', component: () => import('pages/Onboarding.vue') },
      { path: 'checkout', name: 'checkout', component: () => import('src/pages/Checkout.vue') },
      { path: 'verification', name: 'verification', component: () => import('src/pages/Verification.vue') },
      { path: 'order-success', name: 'order-success', component: () => import('src/pages/OrderSuccess.vue') }
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
