
import {UPDATE_POSTS} from './actionTypes'
import { APIurls } from '../helpers/urls';

export function fetchPosts(){
    return (dispatch) => {
        const url  = APIurls.fetchPosts(1,10);
        fetch(url)
        .then(Response => {
            return Response.json();
        })
        .then((data)=>{
            dispatch(updatePosts(data.data.posts));
        })
    }
}

export function updatePosts(posts){
    return {
        type:UPDATE_POSTS,
        posts
    }
}