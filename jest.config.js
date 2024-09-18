module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", 
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["./jest/setup.js"],
  transformIgnorePatterns: [
    "/node_modules/(?!react-native|@react-native|react-native-vector-icons|@react-navigation)",
  ],
};

