import Button from 'react-bootstrap/Button';

function TypesExample() {
    return (
        <>
            <div className='mt-10'>
                <Button className='w-[100%]' variant="primary">Primary</Button>{' '}
                <Button className='w-[100%] mt-10' variant="outline-primary">Primary</Button>{' '}
            </div>
        </>
    );
}

export default TypesExample;