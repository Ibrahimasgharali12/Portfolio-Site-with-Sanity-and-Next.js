// // app/components/Job.tsx

// import Image from "next/image";
// import { getJob } from "@/app/sanity/sanity.query";
// import type { JobType } from "@/app/types";

// export default async function Job() {
//   const job: JobType[] = await getJob();

//   return (
//     <section className=" mt-32">
//       <div className="mb-16">
//         <h2 className="flex justify-center font-semibold text-4xl mb-4">Work Experience</h2>
//       </div>

//       <div className=" flex justify-center">
//       Sorry Work Experience are Not Found because Working on it
//         {job.map((data) => (
//           <div
//             key={data._id}
//             className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
//           >
//             <a
//               href={data.url}
//               rel="noreferrer noopener"
//               className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
//             >
//               <Image
//                 src={data.logo}
//                 className="object-cover"
//                 alt={`${data.name} logo`}
//                 fill
//               />
//             </a>
//             <div className="flex flex-col items-start">
//               <h3 className="text-xl font-bold">{data.name}</h3>
//               <p>{data.jobTitle}</p>
//               <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
//                 {data.startDate.toString()} - {data.endDate.toString()}
//               </small>
//               <p className="text-base text-zinc-400 my-4">{data.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// app/components/Job.tsx

import Image from "next/image";
import { getJob } from "@/app/sanity/sanity.query";
import type { JobType } from "@/app/types";

export default async function Job() {
  const job: JobType[] = await getJob();

  return (
    <section className="mt-32">
      <div className="mb-16">
        <h2 className="flex justify-center font-semibold text-4xl mb-4">Work Experience</h2>
      </div>

      <div className="flex justify-center">
        {job.length === 0 ? (
          <p>Sorry, work experience information is not available at the moment.</p>
        ) : (
          job.map((data) => {
            // Ensure startDate and endDate are not null or undefined before using toString
            const startDate = data.startDate ? new Date(data.startDate).toLocaleDateString() : "Date not available";
            const endDate = data.endDate ? new Date(data.endDate).toLocaleDateString() : "Present";

            return (
              <div
                key={data._id}
                className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
              >
                <a
                  href={data.url}
                  rel="noreferrer noopener"
                  className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
                >
                  <Image
                    src={data.logo}
                    className="object-cover"
                    alt={`${data.name} logo`}
                    fill
                  />
                </a>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-bold">{data.name}</h3>
                  <p>{data.jobTitle}</p>
                  <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {startDate} - {endDate}
                  </small>
                  <p className="text-base text-zinc-400 my-4">{data.description}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
