let renderTimer;

window.triggerDelayedKatexRender = () => {
    clearTimeout(renderTimer);

    console.log("Blazor navigation detected. Starting 2-second timer for KaTeX rendering.");

    renderTimer = setTimeout(() => {
        console.log("2 seconds have passed. Rendering KaTeX.");

        try {
            if (typeof renderMathInElement === 'function') {
                renderMathInElement(document.body, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '\\[', right: '\\]', display: true },
                        { left: '$', right: '$', display: false },
                        { left: '\\(', right: '\\)', display: false }
                    ],
                    throwOnError: false
                });
                console.log("KaTeX rendering finished.");
            } else {
                console.error("KaTeX auto-render.js is not loaded correctly.");
            }
        } catch (error) {
            console.error("An error occurred during KaTeX rendering:", error);
        }
    }, 2000);
};