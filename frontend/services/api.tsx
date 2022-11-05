const local_api_url = 'http://localhost:3000/';


const local_api_sign_in = local_api_url + 'api/user/' + 'login/'
const local_api_sign_up = local_api_url + 'api/user/' + 'add/'
const local_api_editProfile = local_api_url + 'api/user/' + 'editProfile/'
const local_api_newpost = local_api_url + 'api/post/' + 'createPost/'
const local_api_createComment = local_api_url + 'api/comment/' + 'createcomment/'

export const loginRequest = async (data: object): Promise<any> => {
  const response = await fetch(local_api_sign_in, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  if (!response.ok) {
    throw Error('Failed To login !');
  }
  return response.json()
}

export const signupRequest = async (data: object): Promise<any> => {
  const response = await fetch(local_api_sign_up, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  if (!response.ok) {
    throw Error('Failed To signup !');
  }
  return response.json()
}

export const editProfileRequest = async (data: any, token: string): Promise<any> => {
  const response = await fetch(local_api_editProfile, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    },
    body: JSON.stringify(data)
  })
  if (!response.ok) {
    throw Error('Failed To Edit Your Profile !');
  }
  return response.json()
}
export const editPostRequest = async (data: any, token: string, id: number): Promise<any> => {
  const response = await fetch(`${local_api_url}api/post/modifyPost/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    },
    body: JSON.stringify(data)
  })
  if (!response.ok) {
    throw Error('Failed To Edit Your Post !');
  }
  return response.json()
}

export const newPostRequest = async (data: any, token: string): Promise<any> => {
  let formData = new FormData()
  formData.append("description", data.description)
  formData.append("image", data.image)

  const response = await fetch(local_api_newpost, {
    method: 'POST',
    headers: {
      'Authorization': `${token}`
    },
    body: formData
  })
  if (!response.ok) {
    throw Error('Failed To Create NewPost !');
  }
  return response.json()
}

export const commentPostRequest = async (data: object, token: string, id: number): Promise<any> => {
  const response = await fetch(`${local_api_url}api/comment/createcomment/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    },
    body: JSON.stringify(data)
  })
  if (!response.ok) {
    throw Error('Failed To signup !');
  }
  return response.json()
}

export const deletePostRequest = async (token: string, id: number): Promise<any> => {
  const response = await fetch(`${local_api_url}api/post/deletePost/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    },
    // body: JSON.stringify(data)
  })
  if (!response.ok) {
    throw Error('Failed To signup !');
  }
  return response.json()
}

export const requestApi = async (url: string, token: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    },
  });
  const data = await response.json();
  // console.log(data)

  return data;
}

export const getAllUsers = async (token: string) => {
  return requestApi(`${local_api_url}api/user/admin/profile`, token)
}

export const getUserAccount = async (token: string) => {
  return requestApi(`${local_api_url}api/user/profile`, token)
}

export const getAllPosts = async (token: string) => {
  return requestApi(`${local_api_url}api/post/getAllPosts`, token)
}

export const getImages = async (token: string) => {
  return requestApi(`${local_api_url}public/images`, token)
}

export const getLike = async (token: string, id: number) => {
  return requestApi(`${local_api_url}api/like/getLike/${id}`, token)
}

export const gestionLike = async (token: string, id: number) => {
  return requestApi(`${local_api_url}api/like/gestionLike/${id}`, token)
}

export const getAllLike = async (token: string) => {
  return requestApi(`${local_api_url}api/like/getAllLikes`, token)
}




// /api/comment/createcomment/:idpost
