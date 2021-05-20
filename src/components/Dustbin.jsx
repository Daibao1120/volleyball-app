// import { ItemTypes } from "./ItemTypes";
// import { useDrop } from "react-dnd";
// import { useState } from "react";
// const style = {

// };
// export const Dustbin = function Dustbin({ name }) {
//     const [hasDropped, setHasDropped] = useState(false);
//     const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
//     const [{ isOver, isOverCurrent }, drop] = useDrop(
//         () =>
//             ({
//                 accept: ItemTypes.BOX,
//                 drop(item, monitor) {
//                     const didDrop = monitor.didDrop();
//                     if (didDrop) {
//                         return;
//                     }
//                     setHasDropped(true);
//                     setHasDroppedOnChild(didDrop);
//                 },
//                 collect: (monitor) => ({
//                     isOver: monitor.isOver(),
//                     canDrop: monitor.canDrop(),
//                 }),
//             }[(setHasDropped, setHasDroppedOnChild)])
//     );
//     // const text = greedy ? "greedy" : "not greedy";
//     let backgroundColor = "rgba(0, 0, 0, .5)";
//     if (isOverCurrent || isOver) {
//         backgroundColor = "darkgreen";
//     }
//     return (
//         <div ref={drop} style={backgroundColor}>
//             {hasDropped && <span>dropped {hasDroppedOnChild}</span>}
//         </div>
//     );
// };

import { ItemTypes } from "./ItemTypes";
import { useDrop } from "react-dnd";
import { useState } from "react";
function getStyle(backgroundColor) {
    return {
        height: "3rem",
        width: "8rem",
        marginRight: "1rem",
        marginBottom: "1rem",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        fontSize: "0.8rem",
        lineHeight: "normal",
        float: "left",
        border: "1px solid rgba(0,0,0,0.2)",

        backgroundColor,

        paddingTop: "0.5rem",
        margin: "0.5rem",
    };
}
export const Dustbin = ({ greedy, children }) => {
    const [hasDropped, setHasDropped] = useState(false);
    const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
    const [{ isOver, isOverCurrent }, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item, monitor) {
                const didDrop = monitor.didDrop();
                if (didDrop && !greedy) {
                    return;
                }
                setHasDropped(true);
                setHasDroppedOnChild(didDrop);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                isOverCurrent: monitor.isOver({ shallow: true }),
            }),
        }),
        [greedy, setHasDropped, setHasDroppedOnChild]
    );
    const text = greedy ? "greedy" : "not greedy";
    let backgroundColor = "rgba(0, 0, 0, .5)";
    if (isOverCurrent || (isOver && greedy)) {
        backgroundColor = "darkgreen";
    }
    return (
        <div ref={drop} style={getStyle(backgroundColor)}>
            {text}
            <br />
            {hasDropped && (
                <span>dropped {hasDroppedOnChild && " on child"}</span>
            )}

            <div>{children}</div>
        </div>
    );
};
