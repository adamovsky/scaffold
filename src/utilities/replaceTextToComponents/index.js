const replaceTextToComponents = (map, text) =>
    Object.keys(map).reduce(
        (jsx, key) => {
            const regex = new RegExp(key);

            return jsx.reduce((acc, part) => {
                if (typeof part !== 'string') {
                    acc.push(part);

                    return acc;
                }

                const parts = part
                    .split(regex)
                    .map(item => [item, map[key](key)]);
                const jsxParts = acc.concat(parts).flat();

                jsxParts.pop();

                return jsxParts;
            }, []);
        },
        [text]
    );

export default replaceTextToComponents;
