<template>
    <v-card-text class="text-center pt-12">
        <Input v-model="value" placeholder="Enter Link...." style="width: 300px" />
        <Button type="primary" :loading="loading" @click="toLoading">
            <span v-if="!loading">Generate QR Code</span>
            <span v-else>Loading</span>
        </Button>
        <v-card flat>
            <div>
                <v-card-text>
                    <v-img max-width="250px" max-height="250px" :src="imageqr" />
                </v-card-text>
            </div>
        </v-card>
    </v-card-text>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            value: '',
            imageqr: '',
        };
    },
    methods: {
         toLoading() {
            this.loading = true;
            const link = encodeURIComponent(this.value);
            const qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`;
            this.imageqr = qr;
            this.loading = false;
        },
    },
};
</script>
  