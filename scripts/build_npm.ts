import { build, emptyDir } from 'https://deno.land/x/dnt@0.38.0/mod.ts';

await buildPkg(Deno.args[0]?.replace(/^v/, ''));

async function buildPkg(version: string) {
  await emptyDir('../npm');
  await build({
    test: false,
    shims: false,
    typeCheck: 'both',
    entryPoints: ['./mod.ts'],
    outDir: './npm',
    package: {
      name: '@aiinkiestism/buy-me-a-crypto',
      version,
      description: 'buy me a crypto is a counterpart of buy me a coffee for crypto.',
      license: 'MIT',
      sideEffects: false,
      type: 'module',
      author: {
        name: 'hashmimic',
        email: 'hashmimic1@gmail.com',
        url: 'https://hashmimic.com/',
      },
      main: undefined,
      module: undefined,
      types: undefined,
      repository: {
        type: 'git',
        url: 'https://github.com/aiinkiestism/buy-me-a-crypto',
      },
      bugs: {
        url: 'https://github.com/aiinkiestism/buy-me-a-crypto/issues',
      },
      homepage: 'https://github.com/aiinkiestism/buy-me-a-crypto',
      keywords: [
        'crypto',
        'web3',
        'tip',
        'blockchain',
        'ethers',
      ],
      publishConfig: { access: 'public' },
    },
    packageManager: 'pnpm'
  })
}