# HemoScan — Patient Mobile App

iOS/Android app for patients in the **HemoScan / MediLab Connect** ecosystem. Patients log in, manage their personal data, and securely consult the blood analysis results their laboratory has uploaded.

Built with React Native + Expo. The lab-facing web portal lives in [`hemo-scan-lab-web`](https://github.com/JiovannyVega/hemo-scan-lab-web).

## Features

- **Login** — secure authentication against the HemoScan backend
- **Results (Resultados)** — consult blood test results uploaded by the lab
- **Personal data (Datos)** — view and manage patient profile information

## Project structure

```
├── App.js                  # Root component
├── navigation/
│   ├── AppNavigator.js     # Bottom tabs + stack composition
│   └── HomeStackNavigator.js
└── screens/
    ├── login/
    ├── resultados/
    └── datos/              # Each screen ships with its own .styles.js
```

## Tech stack

React Native · Expo · React Navigation (bottom tabs + stack) · Axios · react-native-dotenv

## Getting started

```bash
npm install
cp .env.example .env   # API base URL
npx expo start
```

Run on a device with Expo Go, or on an emulator with `npx expo start --android` / `--ios`.

---

Part of the HemoScan ecosystem: [Lab web portal](https://github.com/JiovannyVega/hemo-scan-lab-web) · Patient mobile app (this repo) · [AI analysis prototype](https://github.com/JiovannyVega/HemoScan).
