import api from 'config/api';

export const createPost = data =>
  api
    .post('/posts', data)
    .then(response => response)
    .catch(error => ({ error }));


export const listPosts = () =>
  api
    .post('/posts')
    .then(response => response)
    .catch(error => ({ error }));


export const updatePost = (data) =>
  api
    .patch('/posts', data)
    .then(response => response)
    .catch(error => ({ error }));

export const deletePost = (id) =>
    api
      .delete('/posts', id)
      .then(response => response)
      .catch(error => ({ error }));
  
