import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Filter from './Filter';
import SearchItem from './SearchItem';

const Search = () => {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={4}>
              <div className="me-lg-5 bg-black p-4">
                <Filter />
              </div>
            </Col>
            <Col lg={8}>
              <div>
                <SearchItem />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Search;