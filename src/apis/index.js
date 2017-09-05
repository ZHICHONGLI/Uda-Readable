const postHeader = { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json' };
export function fetchCategories () {
  return fetch('http://localhost:5001/categories',{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(res => res.json())
}

export function fetchAllPosts () {
  return fetch('http://localhost:5001/posts',{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(res => res.json())
}

export function fetchCatPosts (cate) {
  return fetch(`http://localhost:5001/${cate}/posts`, { headers: { 'Authorization': 'whatever-you-want' }})
    .then(res => res.json())
}

export function fetchPost (id) {
  return fetch(`http://localhost:5001/posts/${id}`, { headers: { 'Authorization': 'whatever-you-want' }})
    .then(res => res.json())
}

export function voteUp (id) {
  const payload = {option: 'upVote'};
  return fetch(`http://localhost:5001/posts/${id}`,
    { headers: postHeader,
      method: 'POST',
      body: JSON.stringify(payload)
    }
  ).then(res => res.json())
    .catch( (error) => console.log(error))
}

export function voteDown (id) {
  return fetch(`http://localhost:5001/posts/${id}`,
    { 
      method: "POST",
      headers: postHeader,
      body: JSON.stringify({option: "downVote"})
    }
  ).then(res => res.json())
    .catch( (error) => console.log(error))
}

export function fetchPostComments (id) {
  return fetch (`http://localhost:5001/posts/${id}/comments`,
    {
      headers: postHeader
    }
  ).then(res => res.json())
}

export function voteCommentUp (id) {
  return fetch(`http://localhost:5001/comments/${id}`,
    { 
      method: "POST",
      headers: postHeader,
      body: JSON.stringify({option: "upVote"})
    }
  ).then(res => res.json())
    .catch( (error) => console.log(error))
}

export function voteCommentDown (id) {
  return fetch(`http://localhost:5001/comments/${id}`,
    { 
      method: "POST",
      headers: postHeader,
      body: JSON.stringify({option: "downVote"})
    }
  ).then(res => res.json())
    .catch( (error) => console.log(error))
}

export function postComment (newComment) {
  return fetch(`http://localhost:5001/comments`,
    { 
      method: "POST",
      headers: postHeader,
      body: JSON.stringify(newComment)
    }
  ).then(res => res.json())
    .catch( (error) => console.log(error))
}

export function postNew (post) {
  return fetch(`http://localhost:5001/posts`,
    { 
      method: "POST",
      headers: postHeader,
      body: JSON.stringify(post)
    }
  ).then(res => res.json())
    .catch( (error) => console.log(error))
}

export function delPost (id) {
  return fetch(`http://localhost:5001/posts/${id}`,
    { 
      method: "DELETE",
      headers: postHeader
    }
  ).then(res => res.json())
    .catch( (error) => console.log(error))
}

export function delComment (id) {
  return fetch(`http://localhost:5001/comments/${id}`,
    { 
      method: "DELETE",
      headers: postHeader
    }
  ).then(res => res.json())
    .catch( (error) => console.log(error))
}

export function editComment (post, id) {
  return fetch(`http://localhost:5001/comments/${id}`,
    { 
      method: "PUT",
      headers: postHeader,
      body: JSON.stringify(post)
    }
  ).then(res => res.json())
    .catch( (error) => console.log(error))
}