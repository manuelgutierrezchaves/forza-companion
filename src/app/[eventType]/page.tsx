import EventsGrid from "@/components/EventsGrid";

export const revalidate = 60; // Refresh db fetch in seconds

type Params = {
  params: {
    eventType: string
  }
}

export default async function EventsPage({ params: { eventType } }: Params) {

  return (
    <div>
      <div className="flex justify-center p-20">
        <EventsGrid
          eventType={eventType}
        />
      </div>
    </div>
  )
}
