console.log('\x1b[34m Building project... \x1b[0m')

const MINIFY_SETTINGS = {
    whitespace: true,
    identifiers: true,
    syntax: true,
}

const build = async (entrypoints: string[], outdir: string, type: string) => {
    try {
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

await build(clientEntrypoint, './dist/client', 'Client'),
await build(serverEntrypoint, './dist/server', 'Server')
