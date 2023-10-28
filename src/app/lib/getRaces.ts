import prisma from './prisma'

export async function getRaces(serie: number) {
	try {
		const race = await prisma.races.findMany({
			where: {
				series_id: serie
			},
		});
		return { race }
	} catch (error) {
		return { error }
	}
}
