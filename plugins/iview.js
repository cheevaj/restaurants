import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import locale from 'iview/dist/locale/en-US'; // Import English locale
import dayjs from 'dayjs'; 

Vue.use(iView, { locale });

dayjs.locale('en');

// import Vue from 'vue';
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';

// Vue.use(iView);