import { ButtonGroup, ToggleButton } from "react-bootstrap";
import React, { useState } from "react";

export default function PositionToggleButton() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState("1");
    const position_front = [
        { name: "4", value: "1" },
        { name: "3", value: "2" },
        { name: "2", value: "3" },
        { name: "5", value: "4" },
        { name: "6", value: "5" },
        { name: "1", value: "6" },
    ];
    const position_back = [{ name: "5" }, { name: "6" }, { name: "1" }];
    return (
        <>
            <ButtonGroup toggle className="mt-2" size="lg">
                {position_front.map((radio, idx) => {
                    return (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="outline-secondary rounded-0"
                            name="position"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                                setRadioValue(e.currentTarget.value)
                            }
                        >
                            {radio.name}
                        </ToggleButton>
                    );
                })}
            </ButtonGroup>
            <br />
            {/* <ButtonGroup toggle size="lg">
                {position_back.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="outline-secondary rounded-0 border-top-0"
                        name="position"
                        value={radio.name}
                        checked={radioValue === radio.name}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup> */}
        </>
    );
}
