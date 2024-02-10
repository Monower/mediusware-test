import React from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';
import { BASE_URL } from '../../config';
import { useState,useEffect } from 'react';

const Problem2 = () => {

    const [contact, setContact] = useState([]);
    const [usContact, setUsContact] = useState([]);


    useEffect(() => {
        fetch(BASE_URL + '/contacts/')
            .then((res) => res.json())
            .then(({ results }) => {
                setContact(results);
                const filteredData = results.filter((item) => { 
                    return item.country.name === 'United States'
                })
                setUsContact(filteredData);
            })
    }, []);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    {/* <button className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button> */}
                    <ModalA contact={contact} />
                    {/* <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button> */}
                    <ModalB contact={usContact} />
                </div>

                {/* <ModalA /> */}

            </div>
        </div>
    );
};

export default Problem2;