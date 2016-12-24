(function(){
    var SiteFooter = React.createClass({
        render: function(){
            return (
                <footer>
                    <hr />
                    &copy; 2016
                </footer>
            );
        }
    });

    ReactDOM.render(
        <SiteFooter />,
        document.getElementById('footer')
    );
})();