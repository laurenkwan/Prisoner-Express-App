// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')



import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createBootstrap } from 'bootstrap-vue-next'
// import fixtures from './fixtures.json'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(createBootstrap({ components: true, directives: true }))

// app.config.globalProperties.fixtures = fixtures;
// app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.use(router)
// app.use(createBootstrap({components: true, directives: true}))

// import fixtures from './fixtures.json'
// app.config.globalProperties.fixtures = fixtures;
// app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

import fixtures from './fixtures.json'
import programfixtures from './programfixtures.json'
app.config.globalProperties.fixtures = fixtures;
app.config.globalProperties.programfixtures = programfixtures;
app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.mount('#app')
