import React from "react";

interface TQuestionCard {
  bgColor?: string;
  title: string;
  description: string;
}

const QuestionCard: React.FC<TQuestionCard> = ({
  bgColor,
  title,
  description,
}) => {



  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={` rounded-lg p-4  ${
        bgColor?.length !== 0 ? `text-white ` : "text-black"
      }`}
    >
      <h1 className="capitalize text-lg md:text-xl font-bold mb-3">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default QuestionCard;
