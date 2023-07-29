export const server = (done) => {
  app.plugins.browsersync.init({
    proxy: 'yoursite.dev', // Замените на адрес и порт вашего сервера Open Server
    notify: false
  });
}