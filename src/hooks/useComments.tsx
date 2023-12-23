import { useEffect, useState } from "react";

export const useComments = (id) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem(id));
        if (data?.length)
            setComments(data);
    }, [id]);

    const updateComments = (id, comment) => {
        if (comment.name && comment.text) {
            const data = JSON.stringify([...comments, comment]);
            window.localStorage.setItem(id, data);
            setComments(JSON.parse(data));
        }
    };

    const deleteComment = (comment) => {
        globalThis.dd = comments;
        const data = comments.filter((item) => item !== comment);
        setComments(data);
        localStorage.setItem(id, JSON.stringify(data));
    }

    return { comments, updateComments, deleteComment };
};
export default useComments;