import "./style.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
// import { Helmet } from "react-helmet";

function OldNewSection() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

  return (
    <div className="flex w-full px-8 justify-between flex-wrap lg:flex-nowrap mt-16 mb-16">
      <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
        <div
          className="bg-before-1 w-72 h-48 bg-contain"
          onMouseOver={() => setIsFlipped1(!isFlipped1)}
        ></div>
        <div
          className="bg-after-1 w-72 h-48 bg-contain"
          onMouseOver={() => setIsFlipped1(!isFlipped1)}
        ></div>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
        <div
          className="bg-before-2 w-72 h-48 bg-contain"
          onMouseOver={() => setIsFlipped2(!isFlipped2)}
        ></div>
        <div
          className="bg-after-2 w-72 h-48 bg-contain"
          onMouseOver={() => setIsFlipped2(!isFlipped2)}
        ></div>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
        <div
          className="bg-before-3 w-72 h-48 bg-contain"
          onMouseOver={() => setIsFlipped3(!isFlipped3)}
        ></div>
        <div
          className="bg-after-3 w-72 h-48 bg-contain"
          onMouseOver={() => setIsFlipped3(!isFlipped3)}
        ></div>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
        <div
          className="bg-before-4 w-72 h-48 bg-contain"
          onMouseOver={() => setIsFlipped4(!isFlipped4)}
        ></div>
        <div
          className="bg-after-4 w-72 h-48 bg-contain"
          onMouseOver={() => setIsFlipped4(!isFlipped4)}
        ></div>
      </ReactCardFlip>
    </div>
  );
}
export default OldNewSection;
