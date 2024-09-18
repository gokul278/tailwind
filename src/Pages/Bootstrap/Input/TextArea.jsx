import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const TextArea = () => {
    return (
        <div>
            <div className='mt-5'>
                <InputGroup>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
            </div>
            <div className='mt-[20px]'>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </div>
        </div>
    )
}
