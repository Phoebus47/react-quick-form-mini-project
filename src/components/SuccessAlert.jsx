import { movies } from "../data/Movies";
import { useState } from "react";

export const SuccessAlert = ({ formData }) => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
      <div className="rounded-lg border border-gray-200 bg-card text-card-foreground w-full max-w-md shadow-lg">
        <div className="flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-purple-700 to-indigo-600 text-white">
          <div className="font-semibold tracking-tight flex items-center gap-2 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mt-1"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M7 3v18"></path>
              <path d="M3 7.5h4"></path>
              <path d="M3 12h18"></path>
              <path d="M3 16.5h4"></path>
              <path d="M17 3v18"></path>
              <path d="M17 7.5h4"></path>
              <path d="M17 16.5h4"></path>
            </svg>{" "}
            Movie Survey
          </div>
        </div>
        <div className="p-6 space-y-6 pt-6 bg-white">
          <div className="space-y-2 bg-green-50 rounded-lg border border-green-100">
            <div className="rounded-lg p-6 bg-card text-card-foreground w-full max-w-md shadow-lg">
              <div className="flex flex-col justify-center items-left gap-2">
                <div className="flex flex-row justify-start items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-2xl text-green-700">
                    ส่งแบบสำรวจสำเร็จ!
                  </span>
                </div>
                {movies.map((movie) => (
                  <div key={movie.id}>
                    {movie.title === formData.movie && (
                      <div className="flex flex-col gap-6">
                        <p className="text-lg text-gray-400 flex justify-between">
                          ชื่อ:{" "}
                          <span className="text-black">{formData.name}</span>
                        </p>
                        <p className="text-lg text-gray-400 flex justify-between">
                          อีเมล:{" "}
                          <span className="text-black">{formData.email}</span>
                        </p>
                        <p className="text-lg text-gray-400 flex justify-between">
                          หนังที่เลือก:{" "}
                          <span className="text-purple-700">{movie.title}</span>
                        </p>
                        <div className="flex justify-between items-start py-6 border-t border-gray-200 bg-green-50">
                          <p className="text-lg text-gray-400 flex justify-between">
                            ความคิดเห็น:{" "}
                            <span className="text-black bg-gray-100">
                              {formData.comments}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              window.location.reload();
            }}
            className="w-full h-[50px] bg-black text-white rounded-md"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                <path d="M16 16h5v5" />
              </svg>
              ทำแบบสำรวจใหม่
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};
