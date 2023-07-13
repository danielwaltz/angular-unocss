import { defineConfig } from 'unocss';
import { presetMoserLabs } from '@moser-inc/unocss-preset-moser-labs';

export default defineConfig({
  presets: [presetMoserLabs({ defaultApp: 'roomgrabber' })],
});
