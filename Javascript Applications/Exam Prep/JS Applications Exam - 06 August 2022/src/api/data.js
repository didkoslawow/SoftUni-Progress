import { del, get, post, put } from './api.js';

export async function getAll() {
    return get('/data/offers?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/offers/' + id);
}
