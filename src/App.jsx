

import { Col, Container, Row } from "react-bootstrap";
import { person } from "./data/data";
import Empty from "./components/Empty";
import { useState } from "react";
import WindowForm from "./components/Window";
import { useLocalStorageState } from "./hooks/useLocalStorageState";



function App() {

  const [personDates, setPersonDates] = useLocalStorageState(person, "dates")
  const [windowOpen, setWindowOpen] = useState(false);
  const onDelete = () => {
    setPersonDates([]);
  }
  const onView = () => {
    setPersonDates(personDates);
  }
  const openWindow = () => {
    setWindowOpen(true);
  }
  const closeWindow = () => {
    setWindowOpen(false)
  }
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center mb-2 fs-4 fw-bold">
          <Col sm="8">
            لديك {personDates.length} مواعيد اليوم
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8">
            <div className="rectangle p-2">
              {personDates.length > 0 ? (
                personDates.map((item) => (
                  <div key={item.id} className="d-flex border-bottom mx-3 my-2 align-items-center">
                    <img
                      className="img-avatar"
                      src={item.image}
                      alt="image-avatar"
                      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                    <div className="px-3">
                      <p className="d-inline fs-5">{item.name}</p>
                      <p className="fs-6">{item.date}</p>
                    </div>
                  </div>
                ))
              ) : (
                <Empty text={`لايوجد مواعيد اليوم`} />
              )}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
            <button onClick={onDelete} className="btn btn-danger p-2">مسح الكل</button>
            <div className="d-flex gap-2">
              <button onClick={openWindow} className="btn btn-primary p-1">+اضافة معاد</button>
              {windowOpen && <WindowForm personDates={personDates} setPersonDates={setPersonDates} handleClose={closeWindow} show={windowOpen} />}
              <button onClick={onView} className="btn btn-primary p-2">عرض البيانات</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
