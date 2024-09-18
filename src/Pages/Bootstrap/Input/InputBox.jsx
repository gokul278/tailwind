import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Inputbox() {
    return (
        <>
            <div>
                <InputGroup className="mb-3 mt-3">
                    <Form.Control
                        placeholder="Your Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>

            <div>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Your Name"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
            </div>

        </>
    );
}

export default Inputbox;