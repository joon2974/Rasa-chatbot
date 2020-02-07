<template>
    <v-content>
        <v-container>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md6>
                    <v-card class="elevation-12" color="grey lighten-5">
                        <div id="toolbar-line">
                            <div id="circle-group">
                                <v-avatar color="red" size="12" class="circle"></v-avatar>
                                <v-avatar color="yellow" size="12" class="circle"></v-avatar>
                                <v-avatar color="green" size="12" class="circle"></v-avatar>
                            </div>
                        </div>
                        <v-toolbar dark color="blue-grey darken-3">
                            <v-toolbar-title flat color="blue-grey lighten-4--text">Rasa Bot</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-chip>OpenCareLab</v-chip>
                        </v-toolbar>
                        <v-card-text>
                            <v-label>Message</v-label>
                            <v-list ref="chats" id="chatText">
                                <message v-for="(msg, index) in messages" 
                                :key="`msg - ${index}`"  
                                :message="msg.msg"
                                :name="msg.name"
                                :type="msg.type"
                                :chatbot= "msg.name === 'ChatBot'"
                                ></message>
                            </v-list>
                        </v-card-text>
                        <v-card-actions>
                            <chat-input></chat-input>
                        </v-card-actions>
                        <v-textarea solo label="config" :value="JSON.stringify(response.config.data)" :disabled="true"></v-textarea>
                        <v-textarea solo label="data" :value="JSON.stringify(response.data)" :disabled="true"></v-textarea>
                        <v-textarea solo label="headers" :value="JSON.stringify(response.headers)" :disabled="true"></v-textarea>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import ChatInput from './ChatComponents/ChatInput'
import MessageComponent from './ChatComponents/MessageComponent'
import {mapState} from 'vuex'

export default {
    name: 'Chat',
    computed: {
        ...mapState(['messages', 'response'])
    },
    components:{
        'chat-input': ChatInput,
        'message': MessageComponent,
    },
    watch: {
        messages(){
            // 채팅 출력창을 watch하여 데이터가 갱신될 때마다 스크롤을 맨 아래로 내려준다.
            setTimeout(() => {
                this.$refs.chats.$el.scrollTop = this.$refs.chats.$el.scrollHeight
            }, 0);
        },
    }
}
</script>

<style>
#chatText{
    height: 400px;
    overflow: auto;
}
@media screen and (max-width: 959px){
    #inputText{
        width:300px;
    }
}
.elevation-12{
    margin-top: 30px;
}
#toolbar-line{
    height: 20px;
    background-color: #263238;
}
#circle-group{
    padding-left: 5px;
}
.circle{
    margin-bottom: 3px;
    margin-right: 4px;
}
</style>