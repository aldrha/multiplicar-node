
const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la lista de multiplicar', opts)
    .command('crear', 'Genera un archivo con la lista de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}