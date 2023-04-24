import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios(url);
                const data = response.data;
                console.log(data);
                setData(data);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
                console.error(error);
            }
            setIsLoading(false);
        }
        fetchUsers();
    }, []);
    return { isLoading, isError, data }
}
export default useFetchData;