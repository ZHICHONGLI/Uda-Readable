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
  return fetch(`http://localhost:5001/comments/${id}`,
    { headers: { 'Authorization': 'whatever-you-want' },
      method: 'POST',
      body: payload
    }
  )
}

export function voteDown (id) {
  return fetch(`http://localhost:5001/comments/${id}`,
    { 
      method: "POST",
      headers: { 'Authorization': 'whatever-you-want' },
      body: {"option": "downVote"}
    }
  )
}