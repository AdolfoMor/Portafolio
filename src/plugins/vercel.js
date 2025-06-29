// src/plugins/vercel-analytics.js
import { Analytics } from '@vercel/analytics';

export default {
  install(app) {
    Analytics.init(); // inicializa analytics

    // Opcional: envía evento pageview manualmente
    app.mixin({
      mounted() {
        Analytics.page();
      },
    });
  },
};
