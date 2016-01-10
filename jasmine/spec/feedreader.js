/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		beforeEach(function(){
			jasmine.addMatchers({
				toBeUrl: function() {
 					return {
						 compare: function(actual) {
  							var result = {};
 							result.pass = (actual.slice(0,7) == 'http://')||(actual.slice(0,8) == 'https://');
 							if (!result.pass) {
								result.message = "URL should start with 'http://' or 'https://'";
							}
 							return result;
						}
					}
 				}
 			});
		});
		it('allFeeds url not empty',function(){
			for (var i=0;i<allFeeds.length;i++){
				expect(allFeeds[i].url).toBeUrl();
				expect(allFeeds[i].url).toBeDefined();
			}
		});

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('allFeeds name not empty',function(){
			for (var i=0;i<allFeeds.length;i++){
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name.length).toBeGreaterThan(0);
			}
		});
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
		describe('The menu',function(){
			var menuHide = $('body').hasClass('menu-hidden');
  			it('menu hidden by default',function(){
  				expect(menuHide).toBe(true);
			});
		});

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		describe('The hidden menu',function(){
			it('should toogle',function(){
 				$('.menu-icon-link').click();
 				expect($('body').hasClass('menu-hidden')).toBe(false);
				$('.menu-icon-link').click();
 				expect($('body').hasClass('menu-hidden')).toBe(true);
   			});
 		});

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		describe('Initial Entries',function(){
			beforeEach(function(done){
				loadFeed(0,function(){
					done();
				});
			});
			it('Should have atleast one entry',function(done){
 				expect($('.feed').children().length).toBeGreaterThan(0);
				done();
 			});

		});

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		describe('New Feed Selection',function(){
			var contentBefore,
				contentAfter;
  			beforeEach(function(done){
				loadFeed(0,function(){
 					contentBefore = $('.feed').html();
					loadFeed(1,function(){
						done();
					});
   				});
  			});
   			it('content should change',function(done){
 				contentAfter = $('.feed').html();
    				expect(contentAfter).not.toEqual(contentBefore);
				done();
   			});
		});
 }());
