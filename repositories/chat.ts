export const getAnswer = async ({ messages }: any) => {
    const { body } = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
            messages,
        }),
    });
    if (!body) throw new Error("Unknown error");

    return body;
};