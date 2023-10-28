import prisma from './prisma'

export async function getRaces(serie: number) {
	try {
		const races = await prisma.races.findMany({
			where: {
				series_id: serie
			},
		});
		const result = JSON.parse(JSON.stringify(races))
		return result
	} catch (error) {
		return { error }
	}
}
