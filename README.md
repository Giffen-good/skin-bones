# NEW SKIN AND BONES VIDEO MODAL
#
#
# This repo contains an updated video modal for Skin and Bones. This documentation will outline the relevant files that need to be updated and the steps required to implement this solution 
#
#
# OUTLINE OF CHANGES
#
#
# The index.html provides a working example of this solution in action. It is the markup scraped from the skin and bones site. A few modifications have been made to the markup for the purpose of:
# 1. Linking the newly written JS
# 2. Creating the modal in the doc rather than generating it through JS on click
# 3. Relevant css to accomodate for the changes specified in 2.
#
# The m.js file is the JS required for the end user to interact with the modal based on the specified requirements.
#
# The scrollLock.js is used to initiate the body scroll lock while the modal is open. It's a light piece of code which accomodates for a wide variety of browsers. It defines some global functions which are called within m.js
#
#
# IMPLEMENTATION
#
#
# The implementation is as follows:
#
#
# 1. upload newly created JS
# 2. Modify header.php directly after the BODY body by inserting the new markup where the new markup is contained in index.html and includes everything between <!--- NEWLY CREATED SECTION --> and <!-- END OF NEWLY CREATED SECTION -->
# 3. remove magnific popup and enqueue newly uploaded scripts ( where scrollLock.js is a dependency for m.js ) 
# 4. Confirm proper functioning of new modal
