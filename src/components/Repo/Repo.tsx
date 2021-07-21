import React from "react";
import { RepoBadge } from "./RepoBadge";

export const Repo = () => {
  return (
    <div className="py-4">
      <div className="grid justify-start grid-flow-col">
        <div className="h-40 pr-4 w-44">
          <img
            className="w-full h-full"
            src="https://picsum.photos/seed/picsum/300/250"
            alt="owner avatar"
          />
        </div>
        <div className="flex flex-col justify-evenly">
          <h4 className="text-2xl font-bold">Title</h4>
          <p className="text-lg leading-7 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae
            aperiam ipsam nam unde a totam quia at esse autem voluptatem illum
            laudantium doloribus, ipsum eius eos quo veniam molestiae?
          </p>
          <div className="flex">
            <RepoBadge label="Stars" value={460} />
            <RepoBadge label="Issues" value={100} />
            <p className="text-lg">Submitted 30 days ago by tensoflow</p>
          </div>
        </div>
      </div>
    </div>
  );
};
