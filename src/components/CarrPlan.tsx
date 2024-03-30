import React from "react";

const CarrPlan = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-2 m-8 rounded-3xl font-serif w-[80%] bg-white p-12 ">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold py-5 text-gray-900">
              Career Planning
            </h1>
            <div className="text-start p-4 text-gray-700">
              <section>
                <ul className="list-disc px-8">
                  <li className="text-base pb-2">
                    Personality tests and career interest surveys guide students
                    towards future career paths.
                  </li>
                  <li className="text-base pb-2">
                    Workshops on resume writing and interview skills are
                    organized for job hunting preparation.
                  </li>
                  <li className="text-base pb-2">
                    Job shadowing and networking events with professionals
                    provide real-world insights.
                  </li>
                  <li className="text-base pb-2">
                    Students are equipped to make informed career choices based
                    on interests and strengths.
                  </li>
                  <li className="text-base pb-2">
                    Workshops on college applications and financial aid promote
                    college readiness.
                  </li>
                  <li className="text-base pb-2">
                    Career fairs and guest speaker sessions expose students to
                    diverse professions.
                  </li>
                  <li className="text-base pb-2">
                    Personalized counseling aligns student interests with
                    potential careers or majors (Jenkins et al., 2021).
                  </li>
                  <li className="text-base pb-2">
                    Interventions aim to prepare knowledgeable and confident
                    students for post-secondary education and careers.
                  </li>
                  <li className="text-base pb-2">
                    Goal is to help students achieve desired career outcomes
                    with effective planning.
                  </li>
                </ul>
              </section>
              <div className="flex">
                <div className="flex flex-col">
                  <h1 className="text-start font-semibold text-2xl">
                    Parent Resources :-
                  </h1>
                  <ul className="list-disc list-inside text-start p-4">
                    <li>
                      <a
                        href="https://www.schoolcounselor.org/"
                        className="text-blue-500 hover:underline"
                      >
                        SchoolCounselor.org
                      </a>{" "}
                      - Offers comprehensive guides on the role of school
                      counselors and how they support students.
                    </li>
                    <li>
                      <a
                        href="https://kidshealth.org/"
                        className="text-blue-500 hover:underline"
                      >
                        KidsHealth.org
                      </a>{" "}
                      - Provides advice on children's health, behavior, and
                      growth from birth through the teen years.
                    </li>
                    <li>
                      <a
                        href="https://www.understood.org/"
                        className="text-blue-500 hover:underline"
                      >
                        Understood.org
                      </a>{" "}
                      - Focuses on supporting parents of children with learning
                      and attention issues.
                    </li>
                    <li>
                      <a
                        href="https://www.pta.org/home/family-resources/parent-resources"
                        className="text-blue-500 hover:underline"
                      >
                        PTA.org
                      </a>{" "}
                      - Offers various resources and tips on supporting a
                      child's academic journey, health, and wellness, covering
                      various stages.
                    </li>
                    <li>
                      <a
                        href="https://www.commonsensemedia.org/"
                        className="text-blue-500 hover:underline"
                      >
                        Common Sense Media
                      </a>{" "}
                      - Offers guidance on safe internet use, media
                      recommendations, and understanding digital literacy and
                      citizenship.
                    </li>
                    <li>
                      <a
                        href="https://alison.com/course-creators/khan-academy?page=3&utm_source=google&utm_medium=cpc&utm_campaign=Performance-Max_Tier-4_Careers&gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0Goi2XSVnMfW75B-wCy85K3M_FvJhzPu2hc0KVBk44JRgKWEtLsZpe7kaAtJ4EALw_wcB"
                        className="text-blue-500 hover:underline"
                      >
                        Khan Academy
                      </a>{" "}
                      - Offers tutorials and practice exercises on various
                      subjects to help students understand concepts deeply.
                    </li>
                    <li>
                      <a
                        href="https://quizlet.com/"
                        className="text-blue-500 hover:underline"
                      >
                        Quizlet
                      </a>{" "}
                      - A tool for creating and using flashcards and games,
                      great for memorization and test prep.
                    </li>
                    <li>
                      <a
                        href="https://owl.purdue.edu/owl/research_and_citation/resources.html"
                        className="text-blue-500 hover:underline"
                      >
                        Purdue OWL
                      </a>{" "}
                      - Provides resources on writing, research, and citation
                      skills, which are essential for academic papers.
                    </li>
                    <li>
                      <a
                        href="https://www.coursera.org/courseraplus/?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=b&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo&term={term}&gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0Goh6Uz80-3lNtTDfG7m_m34GSlywy_rryVGZGRHdySDi_OlkA8LK4FgaAkseEALw_wcB"
                        className="text-blue-500 hover:underline"
                      >
                        Coursera
                      </a>{" "}
                      - Offers courses on study techniques and personal
                      development that enhance study habits.
                    </li>
                    <li>
                      <a
                        href="https://www.commonsense.org/education/reviews/ted-ed"
                        className="text-blue-500 hover:underline"
                      >
                        TED-Ed
                      </a>{" "}
                      - Features educational videos on various topics that can
                      supplement learning and inspire curiosity.
                    </li>
                  </ul>
                </div>
                <img src="./carr.jpeg" className="w-[40rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="factors"></div>
    </div>
  );
};

export default CarrPlan;

<div className="m-10 font-serif p-12 rounded-3xl bg-gray-200">
  <div className="flex gap-2">
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold py-5 text-gray-900">Career Planning</h1>
      <div className="text-start p-4 text-gray-700">
        <div className="flex">
          <div className="text-base pb-2">
            <section>
              <ul className="list-disc px-8">
                <li className="text-base pb-2">
                  Personality tests and career interest surveys guide students
                  towards future career paths.
                </li>
                <li className="text-base pb-2">
                  Workshops on resume writing and interview skills are organized
                  for job hunting preparation.
                </li>
                <li className="text-base pb-2">
                  Job shadowing and networking events with professionals provide
                  real-world insights.
                </li>
                <li className="text-base pb-2">
                  Students are equipped to make informed career choices based on
                  interests and strengths.
                </li>
                <li className="text-base pb-2">
                  Workshops on college applications and financial aid promote
                  college readiness.
                </li>
                <li className="text-base pb-2">
                  Career fairs and guest speaker sessions expose students to
                  diverse professions.
                </li>
                <li className="text-base pb-2">
                  Personalized counseling aligns student interests with
                  potential careers or majors (Jenkins et al., 2021).
                </li>
                <li className="text-base pb-2">
                  Interventions aim to prepare knowledgeable and confident
                  students for post-secondary education and careers.
                </li>
                <li className="text-base pb-2">
                  Goal is to help students achieve desired career outcomes with
                  effective planning.
                </li>
              </ul>
            </section>
          </div>
          <img src="./carr.jpeg" />
        </div>
      </div>
    </div>
    {/* <img src="./carr.jpeg" className="w-[40rem]" /> */}
  </div>
  <div id="factors"></div>
</div>;
