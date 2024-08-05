import React from "react";

const texts = [
  {
    id: 1,
    title: "We exist to make our\n customers happy",
    info: `From the early days of QuadX, we have prioritized getting direct customer feedback on what we were building. Talking to our customers forms the kernel of the product development process we have today. We listen with empathy, ask questions, and critically evaluate our work by how valuable our customers find it.
We never stop asking how we can make our product better, and we never settle for ‘good enough’. We listen to our colleagues, and we start from a place of believing they are capable and well-intentioned.
We delight our customers and take pride in our work. Otherwise, why even be here?`,
  },
  {
    id: 2,
    title: "We make bold bets and challenge the status quo",
    info: `Our foundation is in algorithm intelligence, science, and pure mathematics, and we have a deep appreciation for the scientific process. We develop hypotheses and design experiments to test them. We reduce complex problems to their constituent bits.
We debate vigorously and change our minds when confronted with the right evidence. We bravely do what’s right, even when it hasn't been done before. We treat our company like a product and aim to get better, every single day.`,
  },
];

const Aboutpart = () => {
  return (
    <div className=" dark:bg-[#000] dark:text-white text-xs font-medium px-5">
      <div className="flex flex-col gap-10 py-20 lg:mx-32 ">
        <div className="flex flex-col gap-6 lg:flex-row lg:px-10">
          {texts.map((txt) => {
            return (
              <div key={txt.id} className="flex flex-col gap-4">
                <h3 className="text-2xl lg:text-3xl font-bold break-words">
                  {txt.title.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
                <small className="text-slate-400 break-words w-[90%] text-xs font-thin">
                  {txt.info}
                </small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Aboutpart;
