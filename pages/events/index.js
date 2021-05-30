import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helper/api-utils";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

function AllEventsPage(props) {
  const { events } = props;
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60
  };
}

export default AllEventsPage;
