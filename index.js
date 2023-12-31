const axios = require('axios');
const extract = require('extract-zip');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');

const CHROMIUM_URL = config.CHROMIUM_URL;
const DOWNLOAD_PATH = path.resolve(config.DOWNLOAD_PATH);
const EXTRACT_PATH = path.resolve(config.EXTRACT_PATH);

async function downloadChromium() {
    console.log('Starting Chromium download...');
    try {
        const response = await axios.get(CHROMIUM_URL, { responseType: 'stream' });
        const writer = fs.createWriteStream(DOWNLOAD_PATH);
        response.data.pipe(writer);
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error('Error downloading Chromium:', error);
        throw error;
    }
}

async function extractChromium() {
    console.log('Starting Chromium extraction...');
    try {
        await extract(DOWNLOAD_PATH, { dir: EXTRACT_PATH });
        fs.unlinkSync(DOWNLOAD_PATH);  // Remove the zip file after extraction
    } catch (error) {
        console.error('Error extracting Chromium:', error);
        throw error;
    }
}

async function installChromium() {
    try {
        await downloadChromium();
        await extractChromium();
        console.log('Chromium successfully installed!');
    } catch (error) {
        console.error('Error installing Chromium:', error);
    }
}

if (require.main === module) {
    installChromium();
}

module.exports = {
    install: installChromium
};