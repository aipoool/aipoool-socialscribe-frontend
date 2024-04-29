import { createProxyMiddleware } from "http-proxy-middleware"; 
module.exports = function (app) {
    console.log(app)
    app.use(createProxyMiddleware([
        '/auth/google/callback',
        '/auth/google',  
        '/api/login/success', 
        '/api/enter-your-key/success', 
    ], {target: 'http://localhost:1997' , changeOrigin: true})); 
};