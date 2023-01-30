// requireds
const { rejects } = require("node:assert");
const fs = require("node:fs");
const colors = require('colors');

let data = "";

let listarTabla = (base, limite = 10) => {

	return new Promise((resolve, reject) => {
		if (!Number(base)) {
			reject(`El valor introducido ${base} no es un número`);
		}
		data = (`==================== tabla de ${base} ====================`.green);
		for (let i = 1; i <= limite; i++) {
			data += `\n${base} x ${i}: ${i * base}\n`;
		}
		resolve(data)
	});
}

let crearArchivo = (base, limite = 10) => {
	return new Promise((resolve, reject) => {
		if (!Number(base)) {
			reject(`El valor introducido ${base} no es un número`);
		}

		for (let i = 1; i <= limite; i++) {
			let resp = i * base;
			data += `${base} x ${i}: ${resp}\n`;
		}

		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
			if (err) reject(err);

			resolve(`tabla-${base}-al-${limite}.txt`.red);
		});
	});
};

module.exports = {
	crearArchivo,
	listarTabla
};
