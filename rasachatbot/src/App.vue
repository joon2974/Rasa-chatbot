<template>
  <v-app>
    <chat-component />
  </v-app>
</template>

<script>
import ChatComponent from './components/ChatComponent';

export default {
  name: 'App',

  components: {
    ChatComponent,
  },

  data: () => ({
    //
  }),
};
</script>
