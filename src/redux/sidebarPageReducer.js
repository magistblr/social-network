let initialState = {
  navbar: [
    {id: 1, name: 'Profile', url: '/profile'},
    {id: 2, name: 'Messages', url: '/messages'},
    {id: 3, name: 'News', url: '/news'},
    {id: 4, name: 'Music', url: '/music'},
    {id: 5, name: 'Settings', url: '/settings'},
  ]
};


const sidebarPageReducer = (state = initialState, action) => {

  return state;
}

export default sidebarPageReducer;