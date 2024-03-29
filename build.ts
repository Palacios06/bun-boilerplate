console.log('\x1b[34m Building project... \x1b[0m')

import { $ } from "bun";

const IS_WATCH_MODE = process.env.IS_WATCH_MODE;

const MINIFY_SETTINGS = {
    whitespace: true,
    identifiers: true,
    syntax: true,
}

const bunRun = async(entrypoints: string[], outdir: string) => {
    await $`bun build ${entrypoints} --outdir ${outdir} --watch`
}

const build = async (entrypoints: string[], outdir: string, type: string) => {
    try {

        if (IS_WATCH_MODE) {
            console.log(`\x1b[33m [Bun] ${type} build started in watch mode... \x1b[0m`)

            bunRun(entrypoints, outdir)
            return
        }

        await Bun.build({
            entrypoints,
            outdir,
            minify: MINIFY_SETTINGS
        })
        console.log(`\x1b[32m [Bun] ${type} build successful! \x1b[0m`)
    } catch (e) {
        console.error(`\x1b[31m [Bun] ${type} build failed... :( \x1b[0m`)
        console.error(e)
    }
}

const clientEntrypoint = ['./src/client/index.ts']
const serverEntrypoint = ['./src/server/index.ts']

await build(clientEntrypoint, './dist/client', 'Client')
await build(serverEntrypoint, './dist/server', 'Server')


// Should be await Promise.all([buildClient, buildServer]); but in current version of bun, it doesn't work