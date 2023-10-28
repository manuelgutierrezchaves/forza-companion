import prisma from './prisma'

export async function getEvents(eventType: string) {
	try {
    const series = await prisma.events.findMany({
		where: {
			type: eventType
		}
    });
		return { series }
	} catch (error) {
		return { error }
	}
}
