import React, { useEffect, useState } from "react"

const Stocks = () => {
    const [toDoAPI, settoDoAPI] = useState([]);
    const fetchUserData = () => {
        fetch('https://dummyjson.com/todos')
            .then(response => {
                return response.json()
            })
            .then(data => {
                //console.log(data.todos);
                settoDoAPI(data.todos)
            })

    }
    useEffect(() => {
        fetchUserData()
    }, [])
    return (
        <div className="stock-container">
            <table className="table table-striped">
                <tr>
                    <th>ID</th>
                    <th>TODO</th>
                </tr>
                {toDoAPI.length > 0 && (
                    <>
                        {toDoAPI.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.todo}</td>
                            </tr>
                        ))}
                    </>
                )}
            </table>
        </div>
    )
};

export default Stocks;



