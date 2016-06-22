window.jQuery = window.$ =  require("jquery");
require("bootstrap");

require.ensure([], function(require){
    require('./Router.jsx');
});
