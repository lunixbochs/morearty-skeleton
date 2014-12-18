define(['react', 'morearty', 'jsx!app/Hello'], function(React, Morearty, Hello) {
    return React.createClass({
        displayName: 'App',
        mixins: [Morearty.Mixin],
        render: function () {
            return (
                <Hello />
            );
        }
    });
});
