export const server = (done) => {
  app.plugins.browsersync.init({
    proxy: 'yoursite.com', // Замените на адрес и порт вашего сервера Open Server
    notify: false,
    port: 3000,
  });
}