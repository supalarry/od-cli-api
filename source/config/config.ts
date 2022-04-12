import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// SERVER_HOSTNAME, SERVER_PORT is available when app is hosted

const SERVER_HOSTNAME = isProduction() ? process.env.RENDER_EXTERNAL_URL : 'localhost';
const SERVER_PORT = isProduction() ? 80 : 1337;

function isProduction() {
    const env = process.env.NODE_ENV;
    return env === 'production';
}

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER
};

export default config;
