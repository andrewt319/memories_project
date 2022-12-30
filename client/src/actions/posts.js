import * as api from '../api';

// Create actions

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data}); // because of redux thunk we hvae to dispatch the action not return
    } catch (error) {
        console.log(error.message);
    }
    const action = { type: 'FETCH_ALL', payload: [] }
}