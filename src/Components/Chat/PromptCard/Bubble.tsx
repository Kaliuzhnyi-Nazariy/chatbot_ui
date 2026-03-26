import { useId } from "react";

const Bubble = ({
  middleColor,
  endColor,
}: {
  middleColor: string;
  endColor: string;
}) => {
  const gradientId = useId();

  return (
    <svg className="w-67.5 h-53.25 relative" viewBox="0 0 270 213">
      <defs>
        <linearGradient id={gradientId} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.0)" />{" "}
          <stop offset="50%" stopColor={middleColor} />{" "}
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>

      <path
        d="
            M24 0
            H246
            Q270 0 270 24
            V131

            Q270 155 246 155
            H240

            Q210 155 213 185
            Q213 212 185 212

            H24
            Q0 213 1 189
            V24
            Q0 0 24 0
            Z
          "
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Bubble;
