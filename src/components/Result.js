"use client"
import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
const Result = ({ result, setResult }) => {
    const router = useRouter()
    const handleRedirect = () => {
        setTimeout(() => {
            router.push('/result')
        }, 1000)
    }
    return (
        <div className='center_main py-5 '>
            <h1 className='text-center'>Here is Your Photograph</h1>
            <Container className=''>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={8} md={6} sm={12} xs={12}>
                        <div className="finalImag">
                            <img src={result} alt="" />
                        </div>
                        <Row className="justify-content-between">
                            <Col lg={5} sm={6} className='d-flex py-2'>
                                <button className='btn btn-warning wt-border fs-2 start-btn' onClick={() => setResult('')}>Re-generate</button>
                            </Col>
                            <Col lg={5} sm={6} className='d-flex  py-2'>
                                <a href={result} onClick={handleRedirect} download="Image" className='btn wt-border btn-warning fs-2 start-btn' >Save</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Result