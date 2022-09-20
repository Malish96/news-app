export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/editors/',
    name: 'Editors',
    component: 'editor/EditorLists',
    showInMenu: true,
  },
  {
    path: '/news-categories/',
    name: 'News Categories',
    component: 'newCategory/NewsCategoryList',
    showInMenu: true,
  },
  {
    path: '/news/',
    name: 'News',
    component: 'news/NewsLists',
    showInMenu: true,
  },
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [
  //     {
  //       name: 'login',
  //       path: '/user/login',
  //       component: './user/Login',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  
  // {
  //   path: '/',
  //   redirect: '/welcome',
  // },
  {
    component: './404',
  },
];
