import React from "react";
import event from "../../images/event.png";
import Event from "../Event";

const UpcomingEventsSection = () => {
  return (
    <div
      id="upcoming-events"
      className="items-center bg-gray-100 pb-4 container md:bg-white"
    >
      <div className="p-4">
        <div className="my-5">
          <h3 className="font-bold text-3xl">upcoming</h3>
          <h2 className="font-normal text-3xl -mt-3">events</h2>
        </div>
        <p className="text-sm">
          Be the first to be aware of our upcoming events
        </p>
      </div>
      <Event
        event={event}
        title="Summer School Coding Training"
        date="19th of August, 2019"
      />
    </div>
  );
};

export default UpcomingEventsSection;
