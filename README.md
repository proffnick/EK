This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

Clone the project at git [Proffnick Repo](https://github.com/proffnick/EK.git)

```bash
# close
git  clone https://github.com/proffnick/EK.git

# move into folder
  cd EK

# using npm
npm i

# OR using Yarn
yarn install

# move into ios folder and install packages
cd ios
pod install
# move out
cd ..

# start server
npx react-native start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npx run-android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npx run-ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Credits

EKVentures

# Learn More

Reach me at proffnick1[@]gmail.com for any issues.
