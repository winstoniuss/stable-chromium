# stable-chromium

[![npm version](https://img.shields.io/npm/v/stable-chromium.svg)](https://www.npmjs.com/package/stable-chromium)

`stable-chromium` is a robust library designed to streamline the process of downloading and installing the stable version of the Chromium browser specifically for Windows 64-bit systems. This tool is indispensable for developers and QA engineers who rely on consistent and reliable browser environments for automated testing.

The library is particularly optimized for integration with automated testing frameworks such as Gauge and Taiko, ensuring that your testing workflows are not disrupted by browser inconsistencies.

## 🌟 Features

- **Automated Download**: Automatically fetches the latest stable version of Chromium for Windows 64-bit.
- **Ease of Use**: Simplifies the setup process for automated testing environments.
- **Compatibility**: Ensures compatibility with popular testing tools like Gauge and Taiko.
- **Stability**: Provides a stable browser version to avoid common pitfalls in automated testing due to browser updates.

## 📦 Chromium Version

The current stable version provided by this package is:

- **Stable Chromium Version**: `120.0.6099.5`
- **Base Revision**: `1217362` (Released on November 1, 2023)

> ⚠️ Note: The subsequent version `121.0.6103.3` has known issues with launching on Windows Server 2016.

## 💻 Install

Install `stable-chromium` with npm:

```bash
npm install stable-chromium