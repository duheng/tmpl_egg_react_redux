import { createSelector, } from 'reselect';


const getHome = state => {
  const { show_list, } = { ...state.home, };
  return {
    show_list
  };
};

export default createSelector(getHome, (home) => {
  return {
    home,
  };
});
