import React from 'react';

type DotProps = {
  cx: number;
  cy: number;
  r?: number;
  color?: string;
};

type ItineraSvgProps = {
    padding: number,
    color: string,
    width: string,
    radius: number,
}

const Dot: React.FC<DotProps> = ({ cx, cy, r , color }) => (
  <circle cx={cx} cy={cy} r={r} fill={color} />
);

const ItineraSVG = ({ color, width, radius, padding }:ItineraSvgProps) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height="100%" viewBox="0 0 1000 200">
      {/* I */}
      <g>
        {[20, 40, 60, 80, 100, 120, 140, 160].map((cy) => (
          <Dot key={`I-${cy}`} cx={10} cy={cy} color={color} r={radius} />
        ))}
      </g>

      {/* T */}
      <g transform={`translate(${padding}, 0)`}>
        {[40, 50, 60, 70, 80, 90, 100].map((cx) => (
          <Dot key={`T-top-${cx}`} cx={cx} cy={30} color={color} r={radius} />
        ))}
        {[40, 60, 80, 100, 120, 140, 160, 170, 180].map((cy) => (
          <Dot key={`T-middle-${cy}`} cx={70} cy={cy} color={color} r={radius} />
        ))}
      </g>

      {/* I */}
      <g transform={`translate(${2 * padding}, 0)`}>
        {[20, 40, 60, 80, 100, 120, 140, 160].map((cy) => (
          <Dot key={`I-${cy}`} cx={120} cy={cy} color={color} r={radius}/>
        ))}
      </g>

      {/* N */}
      <g transform={`translate(${3 * padding}, 0)`}>
        {/* Left vertical line */}
        {[40, 60, 80, 100, 120, 140, 160, 180].map((cy) => (
          <Dot key={`N-left-${cy}`} cx={140} cy={cy} color={color} r={radius} />
        ))}

        {/* Diagonal line */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Dot key={`N-diagonal-${i}`} cx={150 + i * 10} cy={50 + i * 16} color={color} r={radius}/>
        ))}

        {/* Right vertical line */}
        {[40, 60, 80, 100, 120, 140, 160, 180].map((cy) => (
          <Dot key={`N-right-${cy}`} cx={240} cy={cy} color={color} r={radius}/>
        ))}
      </g>

      {/* E */}
      <g transform={`translate(${4 * padding}, 0)`}>
        {/* Vertical line */}
        {[20, 30, 40, 60, 80, 100, 120, 140, 160].map((cy) => (
          <Dot key={`E-vertical-${cy}`} cx={270} cy={cy} color={color} r={radius} />
        ))}

        {/* Top horizontal line */}
        {[40, 50, 60, 70, 80, 90, 100].map((cx) => (
          <Dot key={`E-top-${cx}`} cx={240 + cx} cy={20} color={color} r={radius}/>
        ))}

        {/* Middle horizontal line */}
        {[40, 50, 60, 70, 80, 90, 100].map((cx) => (
          <Dot key={`E-middle-${cx}`} cx={240 + cx} cy={90} color={color} r={radius} />
        ))}

        {/* Bottom horizontal line */}
        {[40, 50, 60, 70, 80, 90, 100].map((cx) => (
          <Dot key={`E-bottom-${cx}`} cx={240 + cx} cy={160} color={color} r={radius} />
        ))}
      </g>

      {/* R */}
      <g transform={`translate(${5 * padding}, 0)`}>
        {/* Vertical line */}
        {[40, 60, 80, 100, 120, 140, 160, 180].map((cy) => (
          <Dot key={`R-vertical-${cy}`} cx={400} cy={cy} color={color} r={radius} />
        ))}

        {/* Top horizontal line */}
        {[10, 20, 30, 40, 50, 60, 70, 80].map((cx) => (
          <Dot key={`R-top-${cx}`} cx={400 + cx} cy={40} color={color} r={radius} />
        ))}

        {/* Middle horizontal line */}
        {[10, 20, 30, 40, 50, 60, 70].map((cx) => (
          <Dot key={`R-middle-${cx}`} cx={cx + 400} cy={110} color={color} r={radius} />
        ))}

        {/* Top-right vertical line */}
        {[60, 80, 100].map((cy) => (
          <Dot key={`R-top-right-${cy}`} cx={480} cy={cy} color={color} r={radius}/>
        ))}

        {/* Diagonal leg */}
        {[0, 1, 2, 3, 4].map((i) => (
          <Dot key={`R-diagonal-${i}`} cx={400 + i * 15} cy={120 + i * 15} color={color} r={radius} />
        ))}
      </g>

      {/* A */}
      <g transform={`translate(${6 * padding}, 0)`}>
        {/* Left diagonal line */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Dot key={`A-left-${i}`} cx={580 - i * 10} cy={180 - i * 20} color={color} r={radius} />
        ))}

        {/* Right diagonal line */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Dot key={`A-right-${i}`} cx={580 + i * 10} cy={180 - i * 20} color={color} r={radius} />
        ))}

        {/* Horizontal bar */}
        {[0, 10, 20, 30, 40, 50, 60].map((cx) => (
          <Dot key={`A-bar-${cx}`} cx={cx + 550} cy={110} color={color} r={radius}/>
        ))}
      </g>
    </svg>
  );
};

export default ItineraSVG;
