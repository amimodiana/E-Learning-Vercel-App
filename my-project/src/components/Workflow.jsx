import { CheckCircle2 } from "lucide-react";
import codeImage from "../assets/code.jpg";

const checklistItems = [
  "Write code faster",
  "Automate repetitive tasks",
  "Collaborate seamlessly",
  "Debug efficiently"
];

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>

      <div className="pt-12 w-full lg:w-1/2 mx-auto">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <CheckCircle2 className="text-orange-600 mr-2" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="pt-12 w-full lg:w-1/2 mx-auto">
        <img src={codeImage} alt="Code" />
      </div>

      <div className="pt-12 w-full lg:w-12">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex mb-12">
            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
              <CheckCircle2 />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">{item}</h5>
              <p className="text-md text-neutral-500">Some description here</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
