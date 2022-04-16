import React from 'react'
import { Grid, Row, Col } from 'rsuite';

const Topproduct = () => {
  return (
    <>
    <div className='container topProduct'>
    <Grid fluid>
        <Row className="show-grid">
        <Col xs={12}>
            <h2>top product</h2>
        </Col>
        <Col xs={12}>
            <ul className='catogeries'>
                <li>All</li>
                <li>Boys Collection</li>
                <li>Girl Collection</li>
                <li>Shose Collection</li>
            </ul>
        </Col>
        </Row>
    </Grid>
    </div>
    </>
  )
}

export default Topproduct