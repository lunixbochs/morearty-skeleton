require.config({
    paths: {
        "JSXTransformer": "bower_components/react/JSXTransformer",
        "immutable": "bower_components/immutable/dist/immutable",
        "jquery": "bower_components/jquery/dist/jquery",
        "jsx": "bower_components/requirejs-react-jsx/jsx",
        "morearty": "bower_components/moreartyjs/dist/morearty",
        "react": "bower_components/react/react-with-addons",
        "text" : "bower_components/requirejs-text/text",
    },

    shim : {
        "react": {
            "exports": "React"
        },
        "JSXTransformer": "JSXTransformer"
    },

    jsx: {
        fileExtension: ".jsx",
        transformOptions: {
            harmony: true,
            stripTypes: false
        },
        usePragma: false
    }
});

require(['react', 'immutable'], function (React, Imm) {
    window.React = React;
    window.Immutable = Imm;

    require(['app/Bootstrap'], function (Bootstrap) {
        React.render(
            React.createFactory(Bootstrap)(),
            document.getElementById('root')
        );
    });
});
