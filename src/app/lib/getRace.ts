import prisma from './prisma'

export async function getRace(circuit: string) {
	try {
		const race = await prisma.race.findFirst({
			where: {
				circuit: circuit
			},
			include: {
				race_type: true
			}
		});
		console.log(race)
		return { race }
	} catch (error) {
		return { error }
	}
}
