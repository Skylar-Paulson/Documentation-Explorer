# Documentation Explorer

A very simple, very basic, documentation explorer written entirely in HTML, JavaScript, CSS, and Markdown. This is designed to act as a simple browser for Markdown/HTML documentation files and includes some basic guides to assist in the creation of simple documentation files.

This was created mainly for personal use to offer an easier way to track and quickly browse different documentation files locally. There are probably bugs.

As this is written in purely HTML and JavaScript, support for auto-discovering files is not currently present. This was originally created with the intention of being opened as a local HTML file and had to work around some design constraints related to local files and browser security policies, and so lacks some nice-to-haves in favor of simplicity and the original goal of being usable on a local system without requiring a dedicated web server to view and use.

Also, I considered adding a search to the document list or for documents themselves, but any modern browser's find (Ctrl+F) functionality is more than sufficient so I've opted to abandon that plan.

This serves mainly as an example repository demonstrating a potential solution for hosting and browsing documentation files using GitHub Pages.

Also, note that you do not need to emulate the structure of this repository to use this. As long as paths are configured correctly in `Documentation_Paths.js` you can use whatever organizational structure you want. Just keep in mind if you intend to use GitHub Pages that there are some restrictions, like all folders and subfolders requiring either an `index.md` or `index.html` to be discoverable (this includes any subfolders within them, even if those subfolders have index files) and you can't prepend any folders that need to be included with an underscore. Neglecting either of the former will result pages being ignored/inaccessible.

Access the demo [here](https://skylar-paulson.github.io/Documentation-Explorer/?)

## Setup

The below sections outline how to get this basic documentation browser up and running either via GitHub pages or via a normal web server depending on your needs. Ideally, GitHub Pages is preferred only because it allows documentation authors to easily and automatically update documentation files by simply committing changes to the documentation repository.

### GitHub Pages

1. Create a new repository and populate it with documentation files, or fork this one and modify accordingly.
2. Open to your newly created repository on GitHub's website.
3. Navigate to Settings > Pages and select the branch on your repository containing your documentation files and the Documentation Explorer.
4. If using GitHub enterprise, optionally set Pages to be private so only members of your organization can access it. Otherwise, your documentation files will be exposed to anyone who finds them which may not be ideal.
5. Navigate to your newly created site (usually https://your-username.github.io/YourRepositoryName)
6. That's all! Now just read the included Documentation Guides for more information on how to create documentation files and structure things in a way that GitHub Pages can find them and you should be good to go.

### Web Server

1. Create your web server. How to do that is not within the scope of this guide but you just need a basic HTTP web server. A quick internet search should get you what you need.
2. Simply choose a directory in your web server's public files (usually named www or something similar. Basically, wherever you'd be putting html files that can be accessed by users.)
3. Toss the contents of this repository into your chosen destination and modify accordingly.
4. That's all. Nothing else is required. If you want additional restrictions on who can view and access documentation that is outside of the scope of this short guide.