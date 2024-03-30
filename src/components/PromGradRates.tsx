import React from "react";

const PromGradRates = () => {
  return (
    <div className="flex gap-2 m-8 rounded-3xl font-serif w-1/2 bg-white p-12">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold py-5 text-gray-900">
            Promotion and Graduation Rates
          </h1>
          <div className="text-start">
            <p className="text-base  py-2">
            To increase promotion and graduation rates, we will introduce
            focused tutoring for students who could be performing better and
            mentorship programs that promote learning. On top of that, early
            intervention techniques will be implemented to quickly identify and
            assist those students who may be facing problems. Additionally,
            constant communication with parents is one way of ensuring that a
            home environment is supportive. Such efforts to tackle academic and
            personal issues will significantly go a long way in boosting
            promotion and graduation rates.
            </p>
            <h1 className="text-start font-semibold text-xl px-4 pt-4">Resources :-</h1>
            <ul className="list-disc list-inside text-start p-4">
              <li>
                <a
                  href="https://www.ntatutor.com/fifteen-reasons-to-hire-nta-certified-tutors.html"
                  className="text-blue-500 hover:underline"
                >
                  NTA Tutor
                </a>{" "}
                - Offers tutoring resources and strategies for academic Support.
              </li>
              <li>
                <a
                  href="https://www.mentoring.org/wp-content/uploads/2019/11/Full_Toolkit.pdf"
                  className="text-blue-500 hover:underline"
                >
                  Mentoring.org
                </a>{" "}
                - Guides establishing effective mentoring programs for students.
              </li>
              <li>
                <a
                  href="https://www.eif.org.uk/reports"
                  className="text-blue-500 hover:underline"
                >
                  EIF Reports
                </a>{" "}
                - Shares research and practices on early intervention to support
                at-risk students.
              </li>
              <li>
                <a
                  href="https://www.pta.org/home/About-National-Parent-Teacher-Association/Benefits-of-PTA-Membership/Why-Join-the-PTA"
                  className="text-blue-500 hover:underline"
                >
                  PTA.org
                </a>{" "}
                - Offers tips for parents to support their children’s education
                at home.
              </li>
              <li>
                <a
                  href="https://www.edutopia.org/blog/infusing-basics-spirit-of-innovation-ross-cooper-tony-sinanis"
                  className="text-blue-500 hover:underline"
                >
                  Edutopia
                </a>{" "}
                - Features innovative educational strategies to engage students
                and families.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromGradRates;