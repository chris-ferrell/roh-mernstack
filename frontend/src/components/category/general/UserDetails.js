const UserDetails = ({ user }) => {
    return(
        <div className="user-details">
            <h4>{user.userName}</h4>
            <p><strong>Account Balance </strong>{user.balance}</p>
            <p>{user.createdAt}</p>
        </div>
    )   
}

export default UserDetails 