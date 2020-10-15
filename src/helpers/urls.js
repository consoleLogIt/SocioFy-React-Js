

const API_ROOT = 'http://codeial.com:8000/api/v2';


export const APIurls = {
    logIn: `${API_ROOT}/v2/users/login`,
    signUp: `${API_ROOT}/v2/users/login`,
    fetchPosts: (page,limit) => `${API_ROOT}/v2/posts?page=${page}&limit=${limit}`
}