import Ts from '@rollup/plugin-typescript';

export default {
  input: [
    'src/index.ts',
    'src/atoms/Color/index.ts',
    'src/atoms/Text/index.ts',
    'src/molecules/Button/index.ts',
    'src/foundation/index.ts',
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [Ts()],
  external: ['react', '@figolue/foundation']
}