import { useLocation } from 'react-router-dom';
const Response = () => {
    const location = useLocation();
    console.log(location.state.firstName);
    return (
        <div className="footer">
            <h1>Response Page</h1>
            <table className="table table-striped">
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>{location.state.firstName}</td>
                    <td>{location.state.lastName}</td>
                    <td>{location.state.email}</td>
                </tr>
            </table>
        </div>      
    )  
};

export default Response;