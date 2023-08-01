const resolveStream = async ({
    data,
    onChunk = () => { },
    onReady = () => { },
    stream,
}: any) => {
    const reader = stream.pipeThrough(new TextDecoderStream()).getReader();
    while (true) {
        const stream = await reader.read();
        if (stream.done) break;

        const chunks = stream?.value
            .replaceAll(/^data: /gm, "")
            .split("\n")
            .filter((c: any) => Boolean(c.length) && c !== "[DONE]")
            .map((c: any) => JSON.parse(c));

        for (let chunk of chunks) {
            const content = chunk.choices[0].delta.content;
            if (!content) continue;
            data.value += chunk.choices[0].delta.content;
            onChunk({ data: content });
        }
    }

    onReady({ data: data.value });
};

export const useChatStream = async ({
    onChunk = () => { },
    onReady = () => { },
    stream,
}: any) => {
    const data = ref("");
    await resolveStream({
        data,
        onChunk,
        onReady,
        stream,
    });

    return {
        data: readonly(data),
    };
};