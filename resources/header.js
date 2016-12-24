(function(){
    var SiteHeader = React.createClass({
        render: function(){
            return (
                <header>
                    <div className="jumbotron banner">
                        <div className="text shadow">
                            <span>iain</span><span className="plimmer">plimmer</span>
                        </div>
                        <div className="text">
                            {this.props.title}
                        </div>
                        <a href="mailto:iainplimmer@gmail.com" className="btn getintouch">
                            Get in touch
                        </a>
                        <a href="posts.html" className="btn getintouch">
                            Posts
                        </a>
                        <a href="https://github.com/iainplimmer" target="_blank" className="btn getintouch">
                            Github
                        </a>
                        <a href="http://www.twitter.com/iainplimmer" target="_blank" className="btn getintouch">
                            Twitter
                        </a>
                    </div>
                </header>
            );
        }
    });

    ReactDOM.render(
        <SiteHeader title="Full stack developer for Modern Web Applications" />,
        document.getElementById('header')
    );
})();