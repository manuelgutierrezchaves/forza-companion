import prisma from './prisma'

export async function getRaces() {
	try {
		const races = await prisma.race.findMany()
		return { races }
	} catch (error) {
		return { error }
	}
}
