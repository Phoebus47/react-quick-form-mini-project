import { useState } from "react";
import { movies } from "../data/Movies";
import { SuccessAlert } from "./SuccessAlert";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movie: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));

    // ✅ ล้าง error ของ field นั้นเมื่อเริ่มพิมพ์
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "โปรดใส่ชื่อของคุณ";
    }
    if (!formData.movie) {
      newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";
    }
    if (!formData.email.trim()) {
      newErrors.email = "โปรดใส่อีเมลของคุณ";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      movie: "",
      comments: "",
    });

    setErrors({});
    setIsSubmitted(false);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
      {isSubmitted ? (
        <SuccessAlert
          formData={formData}
          onReset={handleReset}
          onClose={() => setIsSubmitted(false)}
        />
      ) : (
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
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-6 pt-6 bg-white">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  ชื่อ <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  placeholder="กรุณากรอกชื่อของคุณ"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  อีเมล <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  placeholder="example@email.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">
                  เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
                </label>
                <div className="grid gap-2">
                  {movies.map((movie) => (
                    <label
                      key={movie.title}
                      htmlFor={`movie-${movie.title}`}
                      className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
                    >
                      <input
                        type="radio"
                        id={`movie-${movie.title}`}
                        name="movie"
                        value={movie.title}
                        checked={formData.movie === movie.title}
                        onChange={handleChange}
                        className="h-4 w-4 cursor-pointer"
                      />
                      {errors.movie && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.movie}
                        </p>
                      )}
                      <div className="grid gap-1 mt-3">
                        <span className="text-sm">
                          {movie.title} ({movie.year})
                        </span>
                        <span className="text-sm text-gray-500">
                          Director: {movie.director}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="comments" className="text-sm font-medium block">
                  ความคิดเห็นเกี่ยวกับหนัง
                </label>
                <textarea
                  id="comments"
                  placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                  name="comments"
                  rows={4}
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-2 rounded-md"
                ></textarea>
              </div>
            </div>

            <div
              className="flex justify-between p-6 border-t border-gray-200
          rounded-b-lg bg-white"
            >
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-300 flex items-center gap-2"
              >
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
                  className="h-4 w-4"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>{" "}
                รีเซ็ต
              </button>

              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-700 to-indigo-600 text-white flex items-center gap-2 hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-700"
              >
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
                  className="h-4 w-4"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>{" "}
                ส่งแบบสำรวจ
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
};
