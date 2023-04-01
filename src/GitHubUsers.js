import { useEffect, useState } from "react"

const gitHubUrl = "https://api.github.com/users";

const GitHubUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(gitHubUrl);
                const users = await response.json();
                console.log(users);
                setUsers(users);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div>
            <h3>GitHub Users</h3>
            <ul className="users">
                {
                    users.map((user) => {
                        const { id, avatar_url, login, html_url } = user;
                        return (
                            <li key={id}>
                                <img src={avatar_url} alt={login} />
                                <div>
                                    <h5>{login}</h5>
                                    <a href={html_url}>profile</a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default GitHubUsers