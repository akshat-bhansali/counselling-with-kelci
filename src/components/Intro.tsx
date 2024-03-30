import React from "react";
import Form from "./Form";

const Intro = () => {
  return (
    <>
      <div className="flex gap-2 m-8 rounded-3xl font-serif w-[80%] bg-white p-12">
        <div className="text-start left-80 text-gray-900">
          <div>
            <h1 className="text-start text-3xl font-bold">
              Welcome to Our School Counseling System
            </h1>
          </div>
          <main>
            <div className="flex flex-row-reverse gap-8 py-6 px-5">
              <div>
                <section>
                  <h1 className="text-start text-2xl font-bold py-2">
                    About Me and My Role
                  </h1>
                  <p>
                    Hello and welcome to Elite Middle School's Counseling
                    Corner. I am your counselor, Kelci Latchie. As your school
                    counselor, I am passionate about helping students develop
                    themselves. Guiding them through both academic and personal
                    struggles is something I enjoy doing.I like creating
                    programs to enhance their mental health and well-being.
                  </p>
                  <p>
                    Aside from the job, I enjoy reading and hiking because they
                    help me stay balanced. Besides that, my belief in lifelong
                    learning compels me to always look for new ways of
                    supporting my learners.
                  </p>
                </section>
                <div>
                  <h2 className="text-start text-xl font-bold py-2">
                    Our Counseling System
                  </h2>
                  <p>
                    Our counseling system encompasses the development of
                    all-rounded students. This, in turn, supports emotional and
                    social needs, improving performance academically. By
                    fostering resilience and positive relationships, we
                    contribute to a conducive learning environment (
                    <span className="italic">Twum-Antwi et al., 2020</span>).
                  </p>
                  <p>
                    This is consistent with the school's educational mission to
                    prepare students for success within and outside school
                    contexts. Ultimately, our vision is to enable every student
                    to thrive to their most significant potential.
                  </p>
                </div>
              </div>
              <img src="./im2.jpg" className="w-[20rem] rounded-xl" />
            </div>
            <div className="flex gap-8 py-6 px-5">
              <div>
                <section>
                  <h2 className="text-start text-xl font-bold py-2">
                    Empowering Students: The Role of School Counseling
                  </h2>
                  <p>
                    School counselors work collaboratively with ALL students,
                    parents, teachers, administrators, and the local community
                    agencies to help students with their academic success.
                    School Counselors provide individual counseling, group
                    counseling and classroom lessons to students throughout the
                    year. School counselors work on three domains with students,
                    Academic, Career, and Social/Personal.
                  </p>
                  <p>
                    {" "}
                    School Counselors build comprehensive school counseling
                    programs and curriculum that are developed around each
                    schools specific needs. The School Counselor's role is to
                    support the academic development of students which can mean
                    identifying social and emotional issues that get in the way
                    of academic success. School counselors work with students on
                    issues that may impede their ability to be successful in
                    classrooms. There are limits to what school counselors do.
                    School counselors are not therapists and do no provide
                    ongoing therapy. When ongoing therapy is needed, counselors
                    work collaboratively with parents to meet students needs.
                  </p>
                </section>
                <section>
                  <h2 className="text-start text-xl font-bold py-2">
                    Protecting the Environment
                  </h2>
                  <div className="font-bold">For Students:</div>
                  <ul className="list-disc ml-6">
                    <li>
                      Drop a slip in the counselor's lockbox located outside
                      their office door. The box is checked each morning and
                      afternoon.
                    </li>
                    <li>
                      Ask any teacher or staff member throughout the day to come
                      to the office to see the counselor.
                    </li>
                  </ul>
                  <div className="font-bold">For Teachers:</div>
                  <ul className="list-disc ml-6">
                    <li>
                      Teachers can email or call to refer a student if they have
                      concerns about them.
                    </li>
                  </ul>
                  <div className="font-bold">For Parents:</div>
                  <ul className="list-disc ml-6">
                    <li>Call the counselor's office during their hours.</li>
                    <li>Email the counselor.</li>
                    <li>Visit the counselor's office during their hours.</li>
                  </ul>
                </section>
              </div>
              <div className="font-serif mt-12 text-black bg-orange-300 p-8 rounded-3xl w-1/2">
                <p className="text-2xl font-semibold">Contact Information</p>
                <p className="h-1 bg-black w-full mb-4" />
                <div>
                  <p className="py-1 text-sm">Kelci Latchie</p>
                  <p className="py-1 text-sm">
                    My Email:{" "}
                    <span className="text-blue-600">Kelci.Latchie@npsb.la</span>
                  </p>
                  <p className="py-1 text-sm">Phone Extension: 114</p>
                  <p className="py-1 text-sm">Contact: (318)352-3623</p>
                  <p className="py-1 text-sm">Office Hours: 8 AM - 3 PM</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Form />
    </>
  );
};

export default Intro;

