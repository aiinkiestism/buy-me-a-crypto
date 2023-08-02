import { prerelease, valid } from 'https://deno.land/x/semver@v1.4.0/mod.ts';

const version = Deno.args[0];

if (!version) {
  console.error('version arg is required.');
  Deno.exit(1);
}
if (!valid(version)) {
  console.error('version arg is invalid.');
  Deno.exit(1);
}

const tag = prerelease(version)?.[0] ?? 'latest';

const commnad = new Deno.Command('npm', {
  args: ['publish', './npm', '--tag', String(tag)],
});
const result = await commnad.output();

if (!result.success) {
  console.error(new TextDecoder().decode(result.stderr));
}