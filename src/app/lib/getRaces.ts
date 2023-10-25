import prisma from './prisma'

export async function getRaces(raceType: string) {
	try {
		const races = await prisma.race.findMany({
			where: {
				race_type: {
					race_type: raceType
				}
			}
		});
		return { races }
	} catch (error) {
		return { error }
	}
}
