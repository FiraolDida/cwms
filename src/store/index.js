import { createStore } from 'vuex'

const store = createStore({
    state: {
        user: {
            data: 'test',
            token: 'null'
        },
        notification: {
            show: false,
            type: null,
            message: null
        },
        dashboard: {
            loading: false,
            data: {}
        }
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {}
})

export default store;