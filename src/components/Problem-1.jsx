import React, { useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const handleClick = (val) => {
        setShow(val);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (name && status) {
            setUsers([...users, { name, status }]);
            setName('');
            setStatus('');
        }

    }


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={HandleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input value={name} onChange={(e) => setName(e.target.value)} name='name' type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input value={status} onChange={(e) => setStatus(e.target.value)} name='status' type="text" className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                show == 'all' && users.map((user, index) => {

                                    if (user.status == 'active') {
                                        return (
                                            <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.status}</td>
                                            </tr>
                                        )
                                    }
                                })
                            }

                            {
                                show == 'all' && users.map((user, index) => {

                                    if (user.status == 'completed') {
                                        return (
                                            <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.status}</td>
                                            </tr>
                                        )
                                    }
                                })

                            }

                            {
                                show == 'all' && users.map((user, index) => {
                                    if(user.status != 'active' && user.status != 'completed'){
                                        return (
                                            <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.status}</td>
                                            </tr>
                                        )
                                    }
                                })
                            }

                            {
                                show == 'active' && users.map((user, index) => {
                                    if (user.status == 'active') {
                                        return (
                                            <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.status}</td>
                                            </tr>
                                        )
                                    }
                                })
                            }

                            {
                                show == 'completed' && users.map((user, index) => {
                                    if (user.status == 'completed') {
                                        return (
                                            <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.status}</td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;