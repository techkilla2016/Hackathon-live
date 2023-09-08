"use client"
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const page = () => {

    return (
        <div className="main">
            <Container>
                <Row className='py-5 justify-content-center'>
                    <Col xxl={6} xl={6} lg={12} md={12} sm={12} xs={12}>
                        <img src="/assets/logo.png" alt="" />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xxl={10} xl={10} lg={12} md={12} sm={12} xs={12}>
                        <img src="/assets/thanks.png" alt="" />
                    </Col>
                </Row>
                <div className='py-5 d-flex justify-content-center'>
                    <div className="code">

                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <p className='thanks'>
                        To access the picture in the drive
                    </p>
                </div>

                <div className='d-flex justify-content-center py-4'>
                    <Link href='/' className='btn btn-success start-btn'>go to Home</Link>
                </div>

            </Container>

        </div>
    )
}

export default page