/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

 
$(function() {
     describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test loops through each feed
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

        /*Test loops through each feed
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


 
        /* Test ensures that the menu element is
         * hidden by default.
         */
		describe('The menu',function(){
			var menuHide = $('body').hasClass('menu-hidden');
  			it('menu hidden by default',function(){
  				expect(menuHide).toBe(true);
			});
		});

         /* Test ensures that the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
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

 
        /* Test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
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

 
        /* Test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
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
