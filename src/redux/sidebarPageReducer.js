let initialState = {
  navbar: [
    {id: 1, name: 'Profile', url: '/profile'},
    {id: 2, name: 'Messages', url: '/messages'},
    {id: 3, name: 'Users', url: '/users'},
    {id: 4, name: 'News', url: '/news'},
    {id: 5, name: 'Music', url: '/music'},
    {id: 6, name: 'Settings', url: '/settings'},
  ]
};


const sidebarPageReducer = (state = initialState, action) => {

  return state;
}

export default sidebarPageReducer;