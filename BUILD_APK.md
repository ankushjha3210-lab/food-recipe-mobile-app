# Build APK Guide

## Quick APK Build (Recommended)

### Method 1: Using Expo EAS Build (Cloud Build)

1. **Install EAS CLI**
```bash
npm install -g eas-cli
```

2. **Login to Expo**
```bash
eas login
```

3. **Configure the project**
```bash
cd mobile
eas build:configure
```

4. **Build APK**
```bash
eas build -p android --profile preview
```

5. **Download APK**
- EAS will provide a download link
- Or check: https://expo.dev/accounts/[your-account]/projects/food-recipe-app/builds

### Method 2: Local Build with Expo

1. **Install dependencies**
```bash
cd mobile
npm install
```

2. **Build locally**
```bash
npx expo export --platform android
```

3. **Generate APK using Android Studio**
- Open the `android` folder in Android Studio
- Build → Generate Signed Bundle/APK
- Select APK
- Follow the wizard

### Method 3: Quick APK with Expo Go (Testing Only)

For quick testing without building:
1. Install Expo Go on Android device
2. Run `npx expo start`
3. Scan QR code with Expo Go app

## Alternative: Use Online Build Services

### AppGyver/Expo Snack
1. Go to https://snack.expo.dev
2. Upload your code
3. Click "Run on Android"
4. Download APK from device

### EAS Build (Free Tier)
- Free builds available
- Cloud-based compilation
- Automatic signing
- Direct APK download

## Important Notes

- **Backend URL**: Update `API_URL` in `App.js` before building
- **App Icons**: Add proper icons in `assets/` folder
- **Permissions**: Check `app.json` for required permissions
- **Testing**: Test on real device before distribution

## Troubleshooting

If build fails:
1. Clear cache: `npx expo start -c`
2. Reinstall: `rm -rf node_modules && npm install`
3. Check Node version: `node -v` (should be 18+)

## Distribution

Once APK is built:
- Share directly via file transfer
- Upload to Google Drive/Dropbox
- Distribute via Firebase App Distribution
- Publish to Google Play Store
