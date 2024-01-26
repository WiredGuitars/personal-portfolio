import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button
      type="submit"
      className="h-[3rem] group w-[8rem] text-white rounded-full outline-none transition-all bg-gray-900 flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white/60"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white">
          Submitting
        </div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </>
      )}
    </button>
  );
}
