import {FaPaperPlane} from "react-icons/fa";
import {experimental_useFormStatus as useFormStatus} from "react-dom";
const SubmitButton = () => {
  const {pending} = useFormStatus();
  return (
    <button
      type="submit"
      className="group h-[3rem] w-[8rem] bg-gray-900 flex items-center justify-center gap-2 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95 disabled:bg-opacity-65 disabled:scale-100 dark:bg-black/30 dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        // This div works as a default animation
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white">
          {" "}
        </div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
};

export default SubmitButton;
