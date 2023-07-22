import React from "react";
const list = [1, 2, 3, 4, 5, 6, 7, 8];

interface ButtonProps {
  btn: number;
}

export const LoadingCard: React.FC<ButtonProps> = ({ btn }) => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
      {list.map((item) => (
        <div
          key={item}
          className="card animate-pulse relative bg-base-100 drop-shadow-md"
        >
          <figure>
            <div className="bg-base-content bg-opacity-20 h-[250px] w-full object-cover"></div>
          </figure>
          <div className="p-5">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-base-content bg-opacity-20 rounded col-span-2"></div>
                <div className="h-2 bg-base-content bg-opacity-20 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-base-content bg-opacity-20 rounded w-14"></div>
            </div>
            {btn === 1 ? (
              <div>
                <div className="btn btn-disabled btn-sm btn-block mt-3"></div>
              </div>
            ) : (
              <div className="flex justify-between">
                <div className="btn btn-disabled btn-sm mt-3 w-14"></div>
                <div className="btn btn-disabled btn-sm mt-3 w-10"></div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
