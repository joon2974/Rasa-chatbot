<template>
    <div class="Message">
        <!-- 일반 User의 message일 때, 자신의 입력은 아바타가 오른쪽, 타인은 왼쪽에 위치 -->
        <v-list-item>
            <v-list-item-action v-show="chatbot === true">
                <v-avatar color="#0277BD" size="40">
                    <img src="https://lh3.googleusercontent.com/proxy/sd-_aUYjLZAR6kkWHdQIEfS7r7-txa8h4pNhBqGuC59NI_UwiXTjq9X8xhoKbSm4YFKtRbippsMeKZwKJ88S_B4ux6mHQ42Lsrym4pGjPM_vb5-SSABtO6ncdSmvQ-Vzc3CQl0t2SdzNLz8">
                </v-avatar>
            </v-list-item-action>
            <v-list-item-content v-if="type === 'text' || chatbot === false">
                <v-textarea rows='1' row-height='10' auto-grow outlined disabled :value="message"></v-textarea>
            </v-list-item-content>
            <v-img v-else :src="message"></v-img>
            <v-list-item-action v-show="chatbot === false">
                <v-avatar color="orange" size="40">
                    <span class="white--text">{{name}}</span>
                </v-avatar>
            </v-list-item-action>
        </v-list-item>
    </div>
</template>

<script>

export default{
    props: {
        message: String,
        name: String,
        type: String,
        chatbot: Boolean
    },
}
</script>

<style>
  .Message{
      text-align: center;
  }
</style>