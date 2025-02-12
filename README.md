# Bill Splitter App

A modern, user-friendly mobile application built with React Native and Expo that helps users split bills and expenses among friends and groups.

![Bill Splitter App](screenshots.png) <!-- Replace with actual screenshot paths -->

## Features

- Three splitting methods: Equal, Exact, and Percentage splits
- Real-time calculations and validation
- Intuitive user interface
- Cross-platform support (iOS & Android)
- Type-safe navigation with Expo Router
- Local state management with React Context

## Requirements

### Development Environment

- Node.js (v18 or higher)
- npm (v9 or higher) or Yarn
- Expo CLI (`npm install -g expo-cli`)
- Git

### For iOS Development (Mac only)

- macOS Monterey or later
- Xcode 14+
- CocoaPods (`sudo gem install cocoapods`)

### For Android Development

- Android Studio
- Android SDK (API Level 33+)
- Android Virtual Device or physical device

## Installation

1. **Clone the Repository**

```bash
git clone https://github.com/nagarajukasarla/bill-splitter.git
cd bill-splitter
```

2. **Install Dependencies**

```bash
npm install
or
yarn install
```

# Running the App

```bash
npm start
# or
yarn start
```

## Physical Device

- Install Expo Go app

- Scan QR code from terminal

- Interact with live reload

## Usage Guide

Splitting Options

    Equal Split

      Enter total amount

      Specify number of people

      Automatic equal division

    Exact Split

        Add participants

        Input specific amounts

        Real-time total validation

    Percentage Split

        Allocate percentages

        Auto-calculate shares

        Total percentage validation
