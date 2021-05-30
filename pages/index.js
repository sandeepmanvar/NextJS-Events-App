import Head  from "next/head";
import { getFeaturedEvents } from "../helper/api-utils";
import EventList from "../components/events/EventList";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great events that allow you to envolve..." />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800 // half an hour
  };
}
export default HomePage;
