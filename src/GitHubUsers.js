import styled from "styled-components";
import CustomLink from "./Link";
import useFetchData from "./useFetchData";
import Movies from "./Movies";

const gitHubUrl = "https://api.github.com/users";

const UserList = styled.ul`
    max-width: 90vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem auto;

    li {
        width: 100%;
        display: flex;
        align-items: center;
        background: #d9dddc;
        padding: 1rem 2rem;
        border-radius: 1rem;
        text-align: left;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 1.5rem;
    }

    h5 {
        margin-bottom: 0;
    }
`

const YellowLink = styled(CustomLink)`
    color: yellow;
    text-decoration: line-through;
`

const GitHubUsers = () => {

    const { isLoading, isError, data } = useFetchData(gitHubUrl);

    if (isLoading) return <h2>Loading Users...</h2>

    if (isError) return <h2>There was an error while fetching users</h2>

    return (
        <div>
            <h3>GitHub Users</h3>
            <UserList>
                {
                    data.map((user) => {
                        const { id, avatar_url, login, html_url } = user;
                        return (
                            <li key={id}>
                                <img src={avatar_url} alt={login} />
                                <div>
                                    <h5>{login}</h5>
                                    <CustomLink href={html_url}>profile</CustomLink>
                                    <YellowLink href={html_url}>Crossed</YellowLink>
                                </div>
                            </li>
                        )
                    })
                }
            </UserList>
            <Movies />
        </div>
    )
}
export default GitHubUsers