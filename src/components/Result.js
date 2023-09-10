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
                        <div className="justify-content-center">
                            <div>
                                <button className='btn btn-warning wt-border start-btn' onClick={() => setResult('')}>Re-generate</button>
                            </div>
                            <div>
                                <a href={result} onClick={handleRedirect} download="Image" className='btn wt-border btn-warning start-btn' >Save</a>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Result