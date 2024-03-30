import React from "react";

const Factors = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2 m-8 rounded-3xl font-serif w-[80%] bg-white p-12">
        <h1 className="text-5xl font-bold py-5 text-gray-900">
          Factors which may affect the Personal, Social, and Academic
          Functioning
        </h1>
        <div className="flex gap-2">
          <div className="flex flex-col p-4">
            <div className="text-start">
              <div className="text-base p-2">
                <section>
                  <ul className="list-disc px-8">
                    <li className="text-base pb-2">
                      Issues like abuse, violence, eating disorders, ADHD, and
                      depression can impact a student's life and academic
                      performance.
                    </li>
                    <li className="text-base pb-2">
                      Signs of substance use include sudden mood changes, poor
                      grades, and disinterest in hobbies.
                    </li>
                    <li className="text-base pb-2">
                      Secretive behavior and changes in social circles may
                      indicate substance abuse.
                    </li>
                    <li className="text-base pb-2">
                      Children from homes with substance abuse may show anxiety,
                      depression, or neglect.
                    </li>
                    <li className="text-base pb-2">
                      Intervention and support from school and home are crucial
                      for student well-being and academic success.
                    </li>
                    <li className="text-base pb-2">
                      Counseling parents and communities includes training on
                      child development and communication skills.
                    </li>
                    <li className="text-base pb-2">
                      Providing mental health materials and resources is
                      important.
                    </li>
                    <li className="text-base pb-2">
                      Creating parent-friendly spaces for discussions about
                      family concerns and solutions.
                    </li>
                    <li className="text-base pb-2">
                      Partnerships between counselors, families, and communities
                      create an enabling environment for children's growth and
                      well-being.
                    </li>
                  </ul>
                </section>
              </div>
              <div className="flex">
                <div>
                  <h1 className="text-start font-semibold text-xl px-4 pt-4">
                    Resources :-
                  </h1>
                  <ul className="list-disc list-inside text-start p-4">
                    <li>
                      <a
                        href="https://www.apa.org/topics/mental-health"
                        className="text-blue-500 hover:underline"
                      >
                        APA.org
                      </a>{" "}
                      - Offers resources on mental health and developmental
                      issues.
                    </li>
                    <li>
                      <a
                        href="https://www.teacherspayteachers.com/Store/Caroline-Koehler?utm_source=Google%20Ads%20Main%20Link&utm_campaign=Home%20Page&gad_source=1"
                        className="text-blue-500 hover:underline"
                      >
                        TeachersPayTeachers.com
                      </a>{" "}
                      - Provides articles and guides on children's mental health
                      and learning disorders.
                    </li>
                    <li>
                      <a
                        href="https://www.iser.com/NAPCSE.html"
                        className="text-blue-500 hover:underline"
                      >
                        ISER.com
                      </a>{" "}
                      - Supports parents with resources and advocacy tips.
                    </li>
                    <li>
                      <a
                        href="https://www.understood.org/"
                        className="text-blue-500 hover:underline"
                      >
                        Understood.org
                      </a>{" "}
                      - Focuses on learning and attention issues and offers
                      strategies and support.
                    </li>
                    <li>
                      <a
                        href="https://www.stopbullying.gov/"
                        className="text-blue-500 hover:underline"
                      >
                        StopBullying.gov
                      </a>{" "}
                      - It gives parents and students resources on preventing
                      and addressing bullying.
                    </li>
                  </ul>
                </div>
                <img src="./factors.jpeg" className="w-[20rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div id="crisisplan"></div>
    </div>
  );
};

export default Factors;
