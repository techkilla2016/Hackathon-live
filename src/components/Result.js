"use client"
import { v4 as uuid } from 'uuid';

import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
const Result = ({ result, setResult }) => {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 5)
    const router = useRouter()
    // const handleRedirect = (code) => {

    //     setTimeout(() => {
    //         router.push(`result/techkilla-${small_id}_m`);
    //     }, 1000)
    // }
    const handleRedirect = () => {
        // Create a Blob object from the base64 image data
        const base64Image = result; // Assuming 'code' contains the base64 image data
        const blob = new Blob([base64Image], { type: 'image/jpeg' }); // Adjust the type as needed (e.g., 'image/png' for PNG images)

        // Create a temporary URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create an anchor element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = `tk-${small_id}_m.webp`; // Specify the desired file name

        // Programmatically trigger a click event on the anchor element
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        });
        a.dispatchEvent(clickEvent);

        // Cleanup by revoking the Blob URL
        window.URL.revokeObjectURL(url);

        setTimeout(() => {
            router.push(`result/tk-${small_id}_m`);
        }, 1000)
    };

    return (
        <div className='center_main py-5 '>
            <h1 className='text-center'>Here is Your Photograph</h1>
            <Container className=''>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={10} md={12} sm={12} xs={12}>
                        <div className="finalImag">
                            <img src={result} alt="" />
                        </div>
                        <div className="d-flex justify-content-between py-4">
                            <div>
                                <button className='btn btn-warning wt-border start-btn' onClick={() => setResult('')}>Re-generate</button>
                            </div>
                            <div>
                                <button onClick={handleRedirect} className='btn wt-border btn-warning start-btn'>download</button>
                                {/* <a href={result} onClick={handleRedirect} target="_blank" rel="noopener noreferrer" download={`tk-${small_id}_m`} className='btn wt-border btn-warning start-btn'>Save</a> */}
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Result