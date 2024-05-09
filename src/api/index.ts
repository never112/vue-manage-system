import { useGetDerivedNamespace } from 'element-plus';
import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: './mock/table.json',
        method: 'get'
    });
};
export const fetchCodeCovData = () => {
    return request({
        url: './mock/tablecodecov.json',
        method: 'get'
    });
};

export const fetchUserData = () => {
    return request({
        url: './mock/user.json',
        method: 'get'
    });
};
export const fetchRoleData = () => {
    return request({
        url: './mock/role.json',
        method: 'get',
    });
};
export const fetchRoleData2 = () => {
    return request({
        url: './mock/role.json',
        method: 'get',
        params:{"id":"sdfsdf","test":"xx"}
    });
};
export const loginx = () => {
    return request({
        url: './mock/login',
        method: 'post',
        data:{"usernaem":"test","password":"12312"}
    });
};
export const login2 = (data) => {
    return request({
        url: './mock/login',
        method: 'post',
        data:data
    });
};

