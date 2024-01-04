<template>
    <div>
        <v-card-text class="text-right">
            <Tooltip v-if="!en" placement="top" content="English to Lao" :delay="1000">
                <Button @click="toggleLanguage">English</Button>
            </Tooltip>
            <Tooltip v-else placement="top" content="Lao to English" :delay="1000">
                <Button @click="toggleLanguage">ລາວ</Button>
            </Tooltip>
        </v-card-text>
    </div>
</template>

<script>
export default {
    data() {
        return {
            en: this.$store.state.en,
        };
    },
    methods: {
        toggleLanguage() {
            // Update the 'en' variable when the button is clicked
            this.en = !this.en;
            // Also, commit the mutation to update the language state in the store if needed
            this.$store.commit('setLanguage', this.en);
        },
    },
};
</script>
