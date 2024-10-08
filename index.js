const { NativeModules, Platform } = require('react-native');

const { PlayLicensing } = NativeModules;

module.exports = {
  verify(publicKey, salt = 'kas donitnu vuvig ko kogatulu') {
    if (Platform.OS !== 'android') {
      return Promise.resolve(true);
    }
    return PlayLicensing.verify(publicKey, salt);
  },
};
