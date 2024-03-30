import React from "react";

const SchoolPlan = () => {
  return (
      <div className="flex gap-2 m-8 rounded-3xl font-serif w-1/2 bg-white p-12">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold py-5 text-gray-900">
              School Transition Plan
            </h1>
            <div className="text-start">
              <p className="text-base  py-2">
                To make it easier for primary school pupils to adjust,
                orientation sessions will be held where they will tour their new
                settings and get the chance to meet their future teachers.
                Again, buddy programs will be created in which younger students
                are matched with older ones so that they can be shown. We shall
                provide workshops on coping strategies for change. By getting
                them acquainted with what lies ahead academically, these
                strategies minimize anxiety and increase anticipation, thus
                promoting a seamless entry into the next grade level.
              </p>
              <h1 className="text-start font-semibold text-xl px-4 pt-4">
                Resources :-
              </h1>
              <ul className="list-disc list-inside text-start p-4">
                <li>
                  <a
                    href="https://alison.com/course/child-development-with-whole-brain-approach?utm_source=google&utm_medium=cpc&utm_campaign=PPC_Tier-4_First-Click_Publisher-Courses&utm_adgroup=Course-5485_Child-Development-with-Whole-Brain-Approach&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0Goj8O-A4UwahaTZmHb-lGlq6LUTSdHAZ2KJxBtbyDSRk96dJkosOA9kaAvrvEALw_wcB&gad_source=1"
                    className="text-blue-500 hover:underline"
                  >
                    Child Development with Whole Brain Approach
                  </a>{" "}
                  - Offers guidance on various childhood transitions.
                </li>
                <li>
                  <a
                    href="https://www.understood.org/"
                    className="text-blue-500 hover:underline"
                  >
                    Understood.org
                  </a>{" "}
                  - Provides resources specifically for transitions in children
                  with learning and attention issues.
                </li>
                <li>
                  <a
                    href="https://www.greatschools.org/gk/articles/adjusting-to-new-school/"
                    className="text-blue-500 hover:underline"
                  >
                    GreatSchools.org
                  </a>{" "}
                  - Share tips for parents to support their child's transition
                  to a new school grade or environment.
                </li>
                <li>
                  <a
                    href="https://www.pta.org/home/About-National-Parent-Teacher-Association/Benefits-of-PTA-Membership/Why-Join-the-PTA"
                    className="text-blue-500 hover:underline"
                  >
                    PTA.org
                  </a>{" "}
                  - Offers a variety of resources for parents to get involved
                  and support their child’s education, including during
                  transitions.
                </li>
                <li>
                  <a
                    href="https://kidshealth.org/en/teens/stress-tips.html"
                    className="text-blue-500 hover:underline"
                  >
                    KidsHealth.org
                  </a>{" "}
                  - Provides advice on managing transitions and stress in
                  children and teenagers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SchoolPlan;
