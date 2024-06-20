<template>
    <div>
      <SocialChat icon :attendants="attendants">
        <p slot="header">
          Chat to us on WhatsApp for any questions or sales-related topics.
        </p>
        <template v-slot:button>
          <img ref="whatsappButton"
            src="" alt="WhatsApp icon"
            aria-hidden="true" />
        </template>
        <small slot="footer">Opening hours: 8am to 6pm</small>
      </SocialChat>
    </div>
  </template>
  <script>
  import { SocialChat } from 'vue-social-chat';
  export default {
    components: {
      SocialChat,
    },
    data() {
      return {
        i: 1600,
        documentmessage: 'hello',
        attendants: [
          {
            app: 'whatsapp',
            label: 'Support',
            name: 'Support Team',
            number: '+8562093837642',
            avatar: {
              src: 'https://actual-url-to-your-avatar-image.jpg',
              alt: 'Avatar',
            },
          },
        ],
      };
    },
    mounted() {
      setTimeout(() => {
        this.sendHello();
        setInterval(this.sendHello, this.i * 1000); // Repeat every 1 minute
      }); // Initial delay of 1 minute
    },
    methods: {
      sendHello() {
        if(this.i===1){
            this.attendants.forEach(async (attendant) => {
                this.clickWhatsAppButton(); // Programmatically click the WhatsApp button
                await this.sendMessage(attendant.number, this.documentmessage);
            });
        }
      },
      clickWhatsAppButton() {
        // Programmatically click the WhatsApp button
        this.$refs.whatsappButton.click();
      },
      sendMessage(number, message) {
        // Add logic to send a message to the specified number
        window.open(
          `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
            message
          )}`
        );
      },
    },
  };
  </script>
    