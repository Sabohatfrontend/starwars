// const CustomNode = ({ data }: { data: { label: string } }) => {
//     return (
//         <div style={{
//             padding: '10px',
//             border: '1px solid #777',
//             borderRadius: '5px',
//             backgroundColor: '#fff',
//             boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
//         }}>
//             <strong style={{ color: "red" }}>{data.label}</strong>
//         </div>
//     );
// };

// export default CustomNode;

import { type Node, type NodeProps } from '@xyflow/react';

export const SLIDE_WIDTH = 200;
export const SLIDE_HEIGHT = 100;

export type SlideNode = Node<SlideData, 'slide'>;

export type SlideData = {
  source: string;
};

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function Slide({ data }: NodeProps<SlideNode>) {
  console.log('slide:', data);
  return (
    <article className="slide nodrag" style={style}>
      <span style={{ color: 'red' }}>{data.source}</span>
    </article>
  );
}
