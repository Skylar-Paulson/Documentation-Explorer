/*
    Documentation file paths for the Documentation Explorer.

    If the documentation file has a fallback url, it must include the connector script in its source in order
    to detect when loading fails and should have hasConnector: true in the table of contents below.

    Any documentation files without the connector and hasConnector: true will not support fallback urls or 
    document outline generation.
*/
const tableOfContents = [
    {
        title: "Documentation Explorer (Home)",
        url: "home",
        id: "home",
        classList: ["visible-in-docs", "hidden"],
        hasConnector: false
    },

    // General
    {
        title: "General",
        open: true,
        children: [
            // Markdown Guide
            {
                format: "<b>[Guide]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                title: "Markdown",
                url: "DOCUMENTATION_HELP_GUIDES/Markdown/",
                id: "MarkdownGuide",
                hasConnector: true
            }
        ]
    },

    // Applications
    {
        title: "Applications",
        children: [
            // Example App 1
            {
                title: `Example App 1 (<a href='#' onclick='loadById("ExampleApp1")'>Guide</a>)`,
                open: true,
                children: [
                    // Guides
                    {
                        format: "<b>[Guide]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                        title: "Example App 1",
                        url: "ExampleApp1/",
                        id: "ExampleApp1",
                        hasConnector: true
                    },

                    // Specifications
                    {
                        format: "<b>[Specification]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                        title: "Example Spec 1",
                        url: "ExampleApp1/SPEC_DOCS/ExampleSpec1/",
                        id: "ExampleApp1_ExampleSpec1",
                        hasConnector: true
                    },

                    {
                        format: "<b>[Specification]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                        title: "Example Spec 2",
                        url: "ExampleApp1/SPEC_DOCS/ExampleSpec2/",
                        id: "ExampleApp1_ExampleSpec2",
                        hasConnector: true
                    }
                ]
            },

            // Example App 2
            {
                title: `Example App 2 (<a href='#' onclick='loadById("ExampleApp2")'>Guide</a>)`,
                open: true,
                children: [
                    // Guides
                    {
                        format: "<b>[Guide]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                        title: "Example App 2",
                        url: "ExampleApp2/",
                        id: "ExampleApp2",
                        hasConnector: true
                    }
                ]
            },
        ]
    }
];