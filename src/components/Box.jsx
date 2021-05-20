import { ItemTypes } from "./ItemTypes";
import { useDrag } from "react-dnd";
const style = {
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    marginRight: "1rem",
    marginBottom: "1rem",
    cursor: "move",
    float: "left",
};
export const Box = function Box({ name }) {
    const [, drag] = useDrag(() => ({ type: ItemTypes.BOX }));
    return (
        <div ref={drag} style={style} data-testid={`box-${name}`}>
            {name}
        </div>
    );
};
