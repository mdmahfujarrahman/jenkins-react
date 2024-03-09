import { useLoaderData } from "react-router-dom";

const SingleTask = () => {
    const singleTask = useLoaderData();
    console.log(singleTask);
    return <div>SingleTask</div>;
};

export default SingleTask;
