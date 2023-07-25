import { del, get, post, put } from './api.js';

const endpoints = {
    getAll: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    getById: '/data/albums/',
    create: '/data/albums',
    edit: '/data/albums/',
    delete: '/data/albums/',
};

export async function getAll() {
    return get(endpoints.getAll);
}

export async function getMyTheaters(id) {
    return get(endpoints.getMyTheaters(id));
}

export async function getById(id) {
    return get(endpoints.getById + id);
}

export async function create(data) {
    return post(endpoints.create, data);
}

export async function edit(id, data) {
    return put(endpoints.edit + id, data);
}

export async function deleteItem(id) {
    return del(endpoints.delete + id);
}
