import xFetch from './xFetch';

export async function getAll() {
    return xFetch('localhost:9000/m/customer/dashboard');
}
