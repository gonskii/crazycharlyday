import { Inter } from 'next/font/google';
import { Archivo_Black } from 'next/font/google';

const fontInter = Inter({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const fontArchivoBlack = Archivo_Black({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-archivo-black',
	weight: ['400'],
});

export const fonts = `${fontInter.variable} ${fontArchivoBlack.variable}`;
