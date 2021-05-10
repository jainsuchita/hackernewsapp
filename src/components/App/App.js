import React, { useState } from "react";

// Bootstrap for react
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const [list, addList] = useState([]);
  const [userValue, addValue] = useState("");

  const deleteItem = (key) => {
    let newList = [...list];

    newList = newList.filter((item) => {
      return item.id !== key;
    });

    addList(newList);
  };

  const addItem = () => {
    if (userValue !== "") {
      let valueObj = {
        id: Math.random(),
        value: userValue,
      };

      let newList = [...list];
      newList.push(valueObj);

      addList(newList);
      addValue("");
    }
  };

  const updateInput = (value) => {
    addValue(value);
  };

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        TODO LIST
      </Row>

      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="add item . . . "
              size="lg"
              value={userValue}
              onChange={(item) => updateInput(item.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="dark" size="lg" onClick={addItem}>
                ADD
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {/* map over and print items */}
            {list.length > 0 &&
              list.map((item) => {
                return (
                  <ListGroup.Item
                    variant="dark"
                    action
                    key={item.id}
                    onClick={() => deleteItem(item.id)}
                  >
                    {item.value}
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
