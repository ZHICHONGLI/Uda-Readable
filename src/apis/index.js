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

