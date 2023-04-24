import styled from "styled-components";

const Link = ({ className, href, children }) => {
    return (
        <a className={className} href={href}>
            {children}
        </a>
    );
}

const CustomLink = styled(Link)`
    color: green;
    text-transform: capitalize;
`
export default CustomLink;