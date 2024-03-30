import React from "react";

const CrisisPlan = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-2 m-8 rounded-3xl font-serif w-[80%] bg-white p-12">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold py-5 text-gray-900">
              Crisis Counseling Plan
            </h1>
            <div className="text-start">
              <section>
                <ul className="list-disc px-8">
                  <li className="text-base pb-2">
                    School counselor plays a key role in the emergency
                    management plan during crises.
                  </li>
                  <li className="text-base pb-2">
                    Offers immediate emotional support to affected students and
                    families.
                  </li>
                  <li className="text-base pb-2">
                    Leads group counseling sessions and collaborates with
                    community resources.
                  </li>
                  <li className="text-base pb-2">
                    Organizes educational sessions on coping strategies for
                    resilience and recovery.
                  </li>
                  <li className="text-base pb-2">
                    Crises can deeply impact students, teachers, and schools,
                    affecting emotional well-being and learning systems.
                  </li>
                  <li className="text-base pb-2">
                    Effective intervention requires empathy, communication
                    skills, and psychological first-aid techniques (Madani et
                    al., 2023).
                  </li>
                  <li className="text-base pb-2">
                    Counselors should build supportive relationships with
                    families and create healing environments.
                  </li>
                  <li className="text-base pb-2">
                    Work to help schools regain stability by fostering
                    resilience-building activities.
                  </li>
                </ul>
              </section>
              <h1 className="text-start font-semibold text-2xl">
                Resources :-
              </h1>
              <ul className="list-disc px-8 py-2">
                <li>
                  <a
                    href="https://www.samhsa.gov/find-help/disaster-distress-helpline"
                    className="text-blue-500 hover:underline"
                  >
                    SAMHSA Disaster Distress Helpline
                  </a>{" "}
                  - Offers 24/7 support for those affected by natural disasters.
                </li>
                <li>
                  <a
                    href="https://www.compassionatefriends.org/"
                    className="text-blue-500 hover:underline"
                  >
                    The Compassionate Friends
                  </a>{" "}
                  - Provides resources and support for families experiencing the
                  death of a child.
                </li>
                <li>
                  <a
                    href="https://www.servproeatoncounty.com/?utm_campaign=General+Disaster+Restoration+-+Eaton&utm_source=google&utm_medium=ppc&utm_term=disaster%20relief%20company&utm_content=3374014-e1-ng-mb-c15735854827-g133355493964-a572344258996-uCj0KCQjwhtWvBhD9ARIsAOP0GogGFzf8lKnBm9wE6DE0e2KwGE1nA7gNKNB7WgLfVu5lZ2jOis6zksUaAnfrEALw_wcB-cat10408186-kdisaster%20relief%20company-mod&gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GogGFzf8lKnBm9wE6DE0e2KwGE1nA7gNKNB7WgLfVu5lZ2jOis6zksUaAnfrEALw_wcB"
                    className="text-blue-500 hover:underline"
                  >
                    SERVPRO Eaton County
                  </a>{" "}
                  - Offers local disaster response resources and assistance.
                </li>
                <li>
                  <a
                    href="https://www.nimh.nih.gov/health/topics/suicide-prevention"
                    className="text-blue-500 hover:underline"
                  >
                    NIMH Suicide Prevention
                  </a>{" "}
                  - A vital resource for individuals facing severe distress or
                  suicidal thoughts.
                </li>
                <li>
                  <a
                    href="https://www.samhsa.gov/"
                    className="text-blue-500 hover:underline"
                  >
                    SAMHSA
                  </a>{" "}
                  - Contains a variety of resources for dealing with trauma and
                  mental health issues following a crisis.
                </li>
                <li>IN CASE OF EMERGENCY CONTACT (561-940-0018)</li>
              </ul>
            </div>
          </div>
          <img src="./crisis.jpeg" className="w-[20rem]" />
        </div>
      </div>
        <div id="crisisplan"></div>
    </div>
  );
};

export default CrisisPlan;
