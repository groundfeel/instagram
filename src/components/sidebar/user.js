import React from 'react';

export default function User() {
  return (
    <div className="user grid grid-cols-4 gap-4 mb-6 items-center">
      <div className="user__img flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src="/images/me.jpg"
          alt=""
        />
      </div>
      <div className="user__info col-span-3">
        <p className="font-bold text-sm">karlhadwen</p>
        <p className="text-sm">Karl Hadwen</p>
      </div>
    </div>
  );
}