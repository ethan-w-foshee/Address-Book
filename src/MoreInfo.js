import React from 'react'

function MoreInfo(props) {
    const [more, setMore] = React.useState(false);

    return (
        <div>
            {more === false ? (
                <div>
                <button onClick={() => setMore(!more)}>More Info</button>
                </div>
            ) : (
                <div>
                <button onClick={() => setMore(!more)}>Less Info</button>
                <p>{props.location.street.number} {props.location.street.name}</p>
                <p>{props.location.city}, {props.location.state}</p>
                <p>{props.location.country}</p>
                <p>Email: {props.email}</p>
                <p>Age: {props.dob.age}</p>
                <p>Cell: {props.cell}</p>
                </div>
            )}
        </div>
    )
}

export default MoreInfo