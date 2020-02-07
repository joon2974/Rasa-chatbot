import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: [],
        user: 'OpenCareLab',
        response: {config: '', data: 'data', headers: 'headers'}
    },
    mutations: {
        addMessage(state, message){
            state.messages = [...state.messages, message]
        },
        setResponse(state, res){
            state.response = res
        }
    }
})