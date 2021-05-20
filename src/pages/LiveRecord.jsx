import {
    Button,
    ButtonGroup,
    Form,
    Tab,
    Tabs,
    ToggleButton,
} from "react-bootstrap";
import React, { useState } from "react";

import { DndProvider } from "react-dnd";
import Example from "../example";
import { HTML5Backend } from "react-dnd-html5-backend";
import PositionToggleButton from "../components/PositionToggleButton";

function MyTogglebutton(props) {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState("1");
    const { radios, variant, name } = props;
    console.log(radios);

    return (
        <>
            <ButtonGroup toggle size="lg">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant={variant}
                        name={name}
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
}

function App() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Example />
            </DndProvider>
        </div>
    );
}

export default function ToggleButtonExample() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState("1");

    const attack_radios = [
        { name: "斜線", value: "1" },
        { name: "直線", value: "2" },
    ];
    const attack_type = [
        { name: "扣球", value: "扣球" },
        { name: "吊球", value: "吊球" },
    ];
    const position_front = [
        { name: "4", value: "4" },
        { name: "3", value: "5" },
        { name: "2", value: "6" },
    ];
    const position_back = [
        { name: "5", value: "7" },
        { name: "6", value: "8" },
        { name: "1", value: "9" },
    ];
    const point_radios = [
        { name: "得分", value: "10" },
        { name: "失誤", value: "11" },
    ];
    const defend_radios = [
        { name: "低手", value: "12" },
        { name: "上手", value: "13" },
        { name: "else", value: "14" },
    ];
    const defend_result = [
        { name: "S", value: "S" },
        { name: "A", value: "A" },
        { name: "B", value: "B" },
        { name: "C", value: "C" },
    ];
    const set_radios = [
        { name: "低手", value: "16" },
        { name: "上手", value: "17" },
    ];
    const serve_radios = [
        { name: "低手", value: "18" },
        { name: "高手", value: "19" },
        { name: "跳發", value: "20" },
        { name: "跳飄", value: "21" },
    ];
    const block_result = [
        { name: "得分", value: "22" },
        { name: "觸球", value: "23" },
        { name: "攔網出界", value: "24" },
        { name: "觸球出界", value: "out" },
    ];
    const set_type = [
        { name: "A快", value: "28" },
        { name: "2號", value: "29" },
        { name: "平長功", value: "30" },
        { name: "B快", value: "31" },
        { name: "流2", value: "32" },
        { name: "C快", value: "33" },
        { name: "背2", value: "34" },
        { name: "背平", value: "35" },
        { name: "D快(女背飛)", value: "36" },
        { name: "老大", value: "37" },
        { name: "老二", value: "38" },
        { name: "老三", value: "39" },
        { name: "修正", value: "40" },
    ];
    const set_result = [
        { name: "好球", value: "41" },
        { name: "壞球", value: "42" },
        { name: "失誤", value: "43" },
    ];
    // localStorage.setItem
    // localStorage.getItem(data);
    const data = JSON.parse(localStorage.getItem("attendeeData"));
    const activeKey =
        sessionStorage.getItem("live_record_active_key") || "attack";

    const [key, setKey] = useState(activeKey);

    console.log(data);
    return (
        <>
            {data.map((d, i) => {
                const { Number, Name } = d;
                return (
                    <Button variant="info" className="mr-2 mb-2" key={i}>
                        {`${Name}(${Number})`}
                    </Button>
                );
            })}

            <Tabs
                activeKey={key}
                onSelect={(k) => {
                    sessionStorage.setItem("live_record_active_key", k);
                    setKey(k);
                }}
                id="uncontrolled-tab-example"
            >
                <Tab eventKey="attack" title="攻擊">
                    <Form>
                        <div className="d-flex">
                            <div className="d-flex align-items-center">
                                <b className="mr-1">出手位置：</b>
                            </div>
                            <div>
                                <App />
                                {/* <PositionToggleButton /> */}
                            </div>
                        </div>
                        <hr />
                        <b className="mr-1">球型：</b>
                        <MyTogglebutton
                            radios={set_type}
                            variant="outline-secondary"
                            name="set_type"
                        />
                        <hr />
                        <b className="mr-1">攻擊方式：</b>
                        <MyTogglebutton
                            radios={attack_type}
                            variant="outline-secondary"
                            name="attack_type"
                        />
                        <hr />
                        <b className="mr-1">攻擊方向：</b>
                        <MyTogglebutton
                            radios={attack_radios}
                            variant="outline-secondary"
                            name="attack_radios"
                        />
                        <hr />
                        <b className="mr-1">結果：</b>
                        <div>
                            <Button
                                variant="primary"
                                className="mr-2"
                                type="submit"
                                size="lg"
                            >
                                送出
                            </Button>
                            <Button
                                variant="outline-danger"
                                as="input"
                                type="reset"
                                value="清除"
                                size="lg"
                            />
                        </div>
                    </Form>
                </Tab>

                <Tab eventKey="defend" title="防守">
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <b className="mr-1">防守位置：</b>
                        </div>
                        <div>
                            <br />
                        </div>
                    </div>
                    <hr />
                    <b className="mr-1">防守方式：</b>

                    <hr />
                    <b className="mr-1">結果：</b>
                    <ButtonGroup toggle className="my-2">
                        {defend_result.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="outline-secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) =>
                                    setRadioValue(e.currentTarget.value)
                                }
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <div>
                        <Button
                            variant="primary"
                            className="mr-2"
                            type="submit"
                        >
                            送出
                        </Button>
                        <Button
                            variant="outline-danger"
                            as="input"
                            type="reset"
                            value="reset"
                        />
                    </div>
                </Tab>

                <Tab eventKey="set" title="舉球">
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <b className="mr-1">舉球位置：</b>
                        </div>
                        <div>
                            <ButtonGroup toggle className="mt-2">
                                {position_front.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="outline-secondary rounded-0"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) =>
                                            setRadioValue(e.currentTarget.value)
                                        }
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                            <br />
                            <ButtonGroup toggle>
                                {position_back.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="outline-secondary rounded-0 border-top-0"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) =>
                                            setRadioValue(e.currentTarget.value)
                                        }
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                    <hr />
                    <b className="mr-1">舉球方式：</b>
                    <ButtonGroup toggle className="my-2">
                        {set_radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="outline-secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) =>
                                    setRadioValue(e.currentTarget.value)
                                }
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <hr />
                    <b className="mr-1">舉球戰術：</b>
                    <ButtonGroup toggle className="my-2">
                        {set_type.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="outline-secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) =>
                                    setRadioValue(e.currentTarget.value)
                                }
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <hr />
                    <b className="mr-1">結果：</b>
                    <ButtonGroup toggle className="my-2">
                        {set_result.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="outline-secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) =>
                                    setRadioValue(e.currentTarget.value)
                                }
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <div>
                        <Button variant="primary" className="mr-2">
                            送出
                        </Button>
                        <Button variant="outline-danger">清除</Button>
                    </div>
                </Tab>

                <Tab eventKey="block" title="攔網">
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <b className="mr-1">攔網位置：</b>
                        </div>
                        <div>
                            <ButtonGroup toggle className="mt-3">
                                {position_front.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="outline-secondary rounded-0"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) =>
                                            setRadioValue(e.currentTarget.value)
                                        }
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                    <hr />
                    <b className="mr-1">結果：</b>
                    <ButtonGroup toggle className="my-2">
                        {block_result.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="outline-secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) =>
                                    setRadioValue(e.currentTarget.value)
                                }
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <div>
                        <Button variant="primary" className="mr-2">
                            送出
                        </Button>
                        <Button variant="outline-danger">清除</Button>
                    </div>
                </Tab>

                <Tab eventKey="serve" title="發球">
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <b className="mr-1">發球落點：</b>
                        </div>
                        <div>
                            <ButtonGroup toggle className="mt-2">
                                {position_front.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="outline-secondary rounded-0"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) =>
                                            setRadioValue(e.currentTarget.value)
                                        }
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                            <br />
                            <ButtonGroup toggle>
                                {position_back.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="outline-secondary rounded-0 border-top-0"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) =>
                                            setRadioValue(e.currentTarget.value)
                                        }
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                    <hr />
                    <b className="mr-1">發球位置：</b>
                    <ButtonGroup toggle>
                        {position_back.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="outline-secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) =>
                                    setRadioValue(e.currentTarget.value)
                                }
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <hr />
                    <b className="mr-1">發球方式：</b>
                    <ButtonGroup toggle>
                        {serve_radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="outline-secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) =>
                                    setRadioValue(e.currentTarget.value)
                                }
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <hr />
                    <b className="mr-1">結果：</b>
                    <ButtonGroup toggle>
                        {point_radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="outline-secondary mb-2"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) =>
                                    setRadioValue(e.currentTarget.value)
                                }
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <div>
                        <Button variant="primary" className="mr-2">
                            送出
                        </Button>
                        <Button variant="outline-danger">清除</Button>
                    </div>
                </Tab>
            </Tabs>
        </>
    );
}
