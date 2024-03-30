import React from "react";

const ClassGuid = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-2 m-8 rounded-3xl font-serif w-[80%] bg-white p-12">
        <div className="flex gap-2">
          <img src="./class.jpeg" className="w-[20rem]" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold py-5 text-gray-900">
              Classroom Guidance
            </h1>
            <div className="text-start p-4 text-gray-700">
              <div className="text-base pb-2">
                <section>
                  <ul className="list-disc px-8">
                    <li className="text-base pb-2">
                      Classroom guidance teaches essential life skills like
                      emotion management and teamwork.
                    </li>
                    <li className="text-base pb-2">
                      Covers topics such as bullying prevention, stress
                      management, and goal setting.
                    </li>
                    <li className="text-base pb-2">
                      Benefits all students regardless of seeking counseling,
                      preparing them for challenges.
                    </li>
                    <li className="text-base pb-2">
                      Lessons empower with tools for responsible decision-making
                      and positive self-concept.
                    </li>
                    <li className="text-base pb-2">
                      "Understanding Emotions" lesson follows ASCA Mindsets &
                      Behaviours for Student Success.
                    </li>
                    <li className="text-base pb-2">
                      Includes group discussions, individual reflections, and
                      role-play sessions.
                    </li>
                    <li className="text-base pb-2">
                      Utilizes visual aids and storytelling for varied learning
                      needs.
                    </li>
                    <li className="text-base pb-2">
                      Activities help recognize and manage emotions, fostering
                      emotional intelligence and resilience.
                    </li>
                    <li className="text-base pb-2">
                      Ensures all learners benefit and are prepared for academic
                      success and personal growth.
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div id="carrplan"></div>
    </div>
  );
};

export default ClassGuid;
