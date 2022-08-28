import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const LiveCard = ({ allcard }) => {
  const { uname } = allcard;
  const { data: language } = useQuery(["languageCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then((res) =>
      res.json()
    )
  );
  const { data: job } = useQuery(["jobCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then((res) =>
      res.json()
    )
  );
  const { data: admission } = useQuery(["admissionCourses"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/admission`).then(
      (res) => res.json()
    )
  );
  const courseData =
    admission?.find((allcard) => allcard.uname === uname) ||
    language?.find((allcard) => allcard.uname === uname) ||
    job?.find((allcard) => allcard.uname === uname);
  console.log(courseData);
  return (
    <div
      className="mx-auto lg:flex bg-base-200 shadow-lg rounded-2xl
       hover:-translate-y-3 border-neutral  transform transition duration-300 text-warning h-full"
    >
      <figure className="p-4">
        <img
          src={allcard?.img}
          alt="Shoes"
          className="h-full md:h-48 lg:h-36 rounded-xl w-96"
        />
      </figure>
      <div className="w-full p-4 lg:pr-4 lg:pl-0 lg:pt-4 pt-0">
        <div className="text-right">
          {courseData?.meetLink?.link ? (
            <p className="bg-red-500 inline py-1 px-2 text-center rounded-lg text-sm text-white">
              <i class="fa-solid fa-circle text-xs"></i> Live
            </p>
          ) : (
            <p className="bg-gray-500 inline py-1 px-2 text-center rounded-lg text-sm text-white">
              <i class="fa-solid fa-ban text-xs"></i> Not Available
            </p>
          )}
        </div>
        <div className="content-between grid">
          <h2 className="text-xl">{allcard?.name.slice(0, 30)}</h2>
          <div>
            <p className="text-lg">Career Development</p>
            <div className="flex items-end gap-4">
              <div>
                <p className="">Rashel Mahmud</p>
                <p className="text-error">09:00 PM (Sharp)</p>
              </div>
              <div className="mt-2 text-sm">
                {courseData?.meetLink?.link ? (
                  <a
                    href={courseData?.meetLink?.link}
                    target="blank"
                    className="btn btn-sm btn-info font-thin text-white"
                  >
                    Join
                    <i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
                  </a>
                ) : (
                  <a className="px-3 py-2 rounded-lg line-through uppercase bg-base-300 btn-sm font-thin">
                    <i class="fa-solid fa-ban text-xs mr-1"></i> Join
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
