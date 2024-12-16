import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'brayan.appasistencia1',
  appName: 'appasistencia1',
  webDir: 'www',
  plugins: {
    BarcodeScanner: {
      // Opcionales: agrega configuraciones que necesites para el escaneo
    },
  },
};

export default config;
