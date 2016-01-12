##Feed-Reader-testing
Click [http://devi-srinivasan.github.io/Feed-Reader-Testing/](http://devi-srinivasan.github.io/Feed-Reader-Testing/) to open the app with added test cases. To open the app locally either clone [this repo](http://devi-srinivasan.github.io/Feed-Reader-Testing/) or click `Download Zip` button and click on `index.html`.
As a part of the Udacity nanodegree course, test cases are written using **Jasmine** framework to test the application.
Cloned [This repo](https://github.com/udacity/frontend-nanodegree-feedreader) and added following test cases to test the app.

####Test cases written
######AllFeeds Url not empty
*	Using jasmine addMatchers, test cases are written to check whether the url is a valid url and not empty.

######AllFeeds name not empty
*	Test cases are written to check whether name is defined and not empty.

######Toggle Menu
*	Test cases are wirtten to check
	*	if the menu is hidden or not when page loads.
	*	if the menu toggles when clicked.
	*	if the page contents change when clicked.

####Additional test cases 
*	In addition to the required test cases additional test cases are written to check
	*	if the hiddenmenu has any duplicate items.
	*	if the loadFeed has any duplicate list item.

####Materials are used for reference	
*	http://jasmine.github.io/2.1/introduction.html
*	http://evanhahn.com/how-do-i-jasmine/
*	http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/
