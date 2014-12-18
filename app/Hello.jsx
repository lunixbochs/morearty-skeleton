define(['react', 'morearty'], function(React, Morearty) {
    return React.createClass({
        displayName: 'Hello',
        mixins: [Morearty.Mixin],
        render: function () {
            var binding = this.getDefaultBinding();
            return (
                <p>Hello from React / Morearty.</p>
            );
        },
    });
});
