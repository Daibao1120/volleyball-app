import { Box } from "./Box";
import { Dustbin } from "./Dustbin";
import { memo } from "react";
export const Container = memo(function Container() {
    return (
        <div>
            <div style={{ overflow: "hidden", clear: "both" }}>
                <Dustbin name="4" />
                <Dustbin name="3" />
                <Dustbin name="2" />
                <br />
                <Dustbin name="5" />
                <Dustbin name="6" />
                <Dustbin name="1" />
            </div>
            <div style={{ overflow: "hidden", clear: "both" }}>
                <Box name="大砲" />
                <Box name="大砲2" />
                <Box name="舉球" />
                <Box name="攔中" />
                <Box name="攔中2" />
                <Box name="副攻" />
                <Box name="自由" />
            </div>
        </div>
    );
});
