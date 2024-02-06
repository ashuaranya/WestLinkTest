// src/components/PaginatedTable.js
import React, { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import './PaginatedTable.css';

const itemsPerPage = 5;

function PaginatedTable({mockData = []}) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = mockData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const handleSelectChange = (event) => {
        setCurrentPage(parseInt(event.target.value))
    }

    const pageCountOptions = Array.from({ length: totalPages }, (_, index) => index + 1);
    
    return (
        <div className="table-user">
            <Table hover>
                <thead className="text-uppercase">
                    <tr>
                        <th className="px-2">First Name</th>
                        <th className="px-2">Last Name</th>
                        <th className="px-2">Email</th>
                        <th className="px-4"></th>
                        <th className="text-end px-2">Role</th>
                        <th className="px-2">Status</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id} className={item.status === 'deleted' ? 'delete-row' : ''}>
                            <td className="px-2">{item.fname}</td>
                            <td className="px-2">{item.lname}</td>
                            <td className="px-2">{item.email}</td>
                            <td className="px-4"></td>
                            <td className="text-end px-2">{item.role}</td>
                            <td className= {item.status === 'deleted' ? 'text-delete px-2' : 'px-2'}> {item.status === 'registered' && <FontAwesomeIcon icon={faCheck} className="p-1 icon-check" />}{item.status}</td>
                            {/* Add more cells as needed */}
                        </tr>
                        ))}
                </tbody>
            </Table>

            <div className="d-flex justify-content-end align-items-center mt-3">
                <p className="align-items-center d-flex gap-2 justify-content-center w-auto">
                    <div>Page</div>
                    <Form.Select size="sm" id="pageCountSelect" value={currentPage} onChange={handleSelectChange}>
                        {pageCountOptions.map(option => (
                            <option value={option}>{option}</option>
                            ))}
                    </Form.Select>
                    <div>of</div>
                    <div className="d-flex"> {totalPages}</div>
                </p>
                <Pagination>
                    <Pagination.Next className="text-uppercase p-2 next-button"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        >Next Page</Pagination.Next>
                </Pagination>
            </div>
        </div>
        );
}

export default PaginatedTable;
