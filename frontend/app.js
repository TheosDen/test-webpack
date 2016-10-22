"use strict";

document.getElementById('loginBtn').onclick = function () {
    //noinspection JSUnresolvedFunction
    require.ensure([], function (require) {
        let login = require('./login');

        login();
    }, 'auth');
};

document.getElementById('logoutBtn').onclick = function () {
    //noinspection JSUnresolvedFunction
    require.ensure([], function (require) {
        let logout = require('./logout');

        logout();
    }, 'auth');
};