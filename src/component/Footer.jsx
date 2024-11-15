import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <footer id='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col md="4" sm="12">
                        <Link to="/">
                        <img src="images\Asset 2.png" alt=""  className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.5s"/>
                        </Link>
                    </Col>
                    <Col md="4" sm="12">
                    <div className="wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                    <HashLink to="/#process">من نحن </HashLink>
                            <HashLink to="/#service">الخدمات </HashLink>
                            <HashLink to="/#contact">تفاصيل  </HashLink>
                            <HashLink to="/#latest">الصفحة الرئيسية</HashLink>
                                 
                        </div>
                    </Col>
                    <Col md="4" sm="12" className='iconsdiv'>
                    <div className="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
                    <HashLink to="/#process"> <GitHubIcon /> </HashLink>
                        </div>
                    </Col>
                </Row>
                <Col md={12} lg={12} sm={12}>

               
                <div className="copyright wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s" dir='ltr'>
                      <p>  © 2024 Youssef M.Ezzat </p>

                    
                   
                </div>

                </Col>
            </Container>
        </footer>
    )
}

export default Footer