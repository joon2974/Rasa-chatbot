<template>
    <v-form @submit.prevent="sendMessage">
        <v-label>Your message</v-label>
        <v-row>
            <v-col>
                <v-textarea id="inputText" rows='1' auto-grow solo placeholder="input your message..." v-model="message" @keydown.13="sendMessage" ref="chatLine"></v-textarea>
            </v-col>
            <v-col>
                <v-btn color="blue-grey lighten-4" type="submit">Send</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
    data(){
        return{
            message: '',
        }
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        ...mapMutations(['addMessage', 'setResponse']),
        sendMessage(){
            this.$store.commit('addMessage', {name: this.user, msg: this.message})

            const msgToBot = JSON.stringify({
                "message": this.message,
                "sender": "OpenCareLab"
            })

           axios.post('http://localhost:5005/webhooks/rest/webhook', msgToBot)
                .then((data) => {
                    this.$store.commit('setResponse', data)

                    for(var i = 0; i < data.data.length; i++){
                        if(data.data[i].text){
                            this.$store.commit('addMessage', {name: "ChatBot", type: 'text', msg: data.data[i].text})
                        }else if(data.data[i].image){
                            this.$store.commit('addMessage', {name:"ChatBot",type: 'img', msg: data.data[i].image})
                        }
                    }
                })
                .catch(() => {
                    this.alert("Didn't receive response!")
                })

            this.message = ''
        },
    },
    watch: {
        message(){
            // 채팅 입력창에 엔터가 같이 들어가는 현상이 발생하여 엔터가 들어가 있으면 채팅 입력창을 비워준다.
            setTimeout(() => {
                if(this.message === '\n'){
                    this.message = ''
                }
            })
        }
    }
}
</script>

<style>
#inputText{
    width: 400px;
}
</style>