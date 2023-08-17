import axios from "axios";

const graphUrl=axios.create({baseURL:'https://api.cartql.com/'});


graphUrl.interceptors.request.use(req=>{
    req.headers={
        "x-hasura-admin-secret":'s7Vs5LvdwN91fFI8P3b0bV6NX9tJdP2gE2O7AUJgZGrIHi0ATDzlAzyWy2bQ4Gbg',
        "Authorization":'Berae s7Vs5LvdwN91fFI8P3b0bV6NX9tJdP2gE2O7AUJgZGrIHi0ATDzlAzyWy2bQ4Gbg',
        "Content-Type":'application/json'
    }
    return req;
});

export {graphUrl};