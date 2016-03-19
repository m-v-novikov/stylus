module.exports = function(grunt) {
    grunt.initConfig({
        slim: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    './html/index.html': './slim/index.slim'
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ['./style/main.styl'],
                    relativeDest: './', //path to be joined and resolved with each file dest to get new one.
                                            //mostly useful for files specified using wildcards
                    urlfunc: 'data-uri'//, // use data-uri('test.png') in our code to trigger Data URI embedding
                    //use: [
                    //    function () {
                    //        //return testPlugin('yep'); // plugin with options
                    //    }//,
                    //    //require('fluidity') // use stylus plugin at compile time
                    //],
                    //import: [      //  @import 'foo', 'bar/moo', etc. into every .styl file
                    //    'foo',       //  that is compiled. These might be findable based on values you gave
                    //    'bar/moo'    //  to `paths`, or a plugin you added under `use`
                    //]
                },
                files: {
                    'css/style/main.css': './style/main.styl'//, // 1:1 compile
                    //'css/out/common.css': ['./style/*/*/*.styl'] // compile and concat into single file
                }
            }
        },
        watch: {
            files: ['**/**/*.styl', '**/**/*.slim'],
            tasks: ['slim', 'stylus']
        }
    });

    grunt.loadNpmTasks('grunt-slim');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['slim', 'stylus', 'watch']);
}