import prisma from './prisma';

interface UserTyreInput {
  clerk_id: string | null;
  race_id: number;
  tyres: any; // o puedes especificar un tipo más detallado si ya lo tienes definido
}

export async function postUserTyre(data: UserTyreInput) {
  try {
    const newUserTyre = await prisma.user_tyres.create({
      data: {
        clerk_id: data.clerk_id,
        race_id: data.race_id,
        tyres: data.tyres,
      },
    });
    return JSON.parse(JSON.stringify(newUserTyre));
  } catch (error) {
    return { error };
  }
}
