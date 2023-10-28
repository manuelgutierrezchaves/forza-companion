import prisma from './prisma'

export async function getRaces(serie: number) {
	try {
		const races = await prisma.races.findMany({
			where: {
				series_id: serie
			},
		});
		return { races }
	} catch (error) {
		return { error }
	}
}
