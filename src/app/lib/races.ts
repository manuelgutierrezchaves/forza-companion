import prisma from './prisma'

export async function getRaces({ raceType }) {
	try {
		const races = await prisma.race.findMany({
			where: {
				race_type: {
					race_type: raceType as string
				}
			}
		});
		return { races }
	} catch (error) {
		return { error }
	}
}
