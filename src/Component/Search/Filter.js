import React from 'react';
import { Form } from 'react-bootstrap';

const Filter = () => {
    return (
      <div>
        <p>Filters</p>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>
            <Form.Label style={{ fontSize: "10px" }}>Filter by Name</Form.Label>
            <Form.Select size="sm">
              <option>Select Name</option>
            </Form.Select>
          </div>
        ))}
      </div>
    );
};

export default Filter;