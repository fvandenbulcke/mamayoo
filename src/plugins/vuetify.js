import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import TrophyIcon from '@/components/icons/TrophyIcon';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md',
    values: {
      trophy: { component: TrophyIcon },
    },
  },
});
