import React from "react";

const PeerInterv = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col gap-2 m-8 rounded-3xl font-serif w-[80%] bg-white p-12">
      <h1 className="text-start text-3xl py-4 font-bold">
        Peer Intervention Program
      </h1>
      <div className="flex gap-2">
        <div className="flex flex-col p-4">

          <div className="text-start">
            <div className="text-base p-2">
              <section>
                <ul className="list-disc px-8">
                  <li className="text-base pb-2">Enhances school's supportive environment.</li>
                  <li className="text-base pb-2">Teach empathy and leadership skills, identifying issues for early interventions.</li>
                  <li className="text-base pb-2">Strengthens school community and promotes academic and personal growth.</li>
                  <li className="text-base pb-2">Focus on anti-bullying.</li>
                  <li className="text-base pb-2">Train peer helpers in empathy, communication, and conflict-resolution.</li>
                  <li className="text-base pb-2">Organize anti-bullying workshops and act as safe contacts for victims.</li>
                  <li className="text-base pb-2">Regular meetings led by counselors ensure program effectiveness.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <img src="./peer.jpeg" className="w-[20rem] h-[25rem]" />
      </div>
    </div>
      <div id="progeval"></div>
    </div>
  );
};

export default PeerInterv;
