CKEDITOR.replace('editor1', {
    extraPlugins: 'editorplaceholder',
    editorplaceholder: 'Reply an answer...',
    toolbarGroups: [
        {
            "name": "styles",
            "groups": ["styles"]
        },
        {
            "name": "basicstyles",
            "groups": ["basicstyles"]
        },
        {
            "name": "links",
            "groups": ["links"]
        },
        {
            "name": "paragraph",
            "groups": ["list"]
        },
        {
            "name": "document",
            "groups": ["mode"]
        },
        {
            "name": "insert",
            "groups": ["insert"]
        },
    ],
    removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar,PasteFromWord,Unlink,Table,HorizontalRule,SpecialChar,Source'
});