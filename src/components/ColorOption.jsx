const colorMap = {
  "soft-red": "bg-soft-red",
  "aqua-blue": "bg-aqua-blue",
  "lavender-purple": "bg-lavender-purple",
};

function ColorOption({ onTempColor, onHandleTempColor, name }) {
  return (
    <p
      onClick={() => onHandleTempColor(name)}
      className={`ml-5 flex justify-center items-center w-10 h-10 rounded-full cursor-pointer ${colorMap[name]} hover:scale-110`}
    >
      {onTempColor === name && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 24 24"
        >
          <path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path>
        </svg>
      )}
    </p>
  );
}

export default ColorOption;
