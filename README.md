# ioniq5-dashboard-for-ha
custom card layouts with images for home assistant for the ionic 5

First off, let me start by what you 100% need to use this,

Download from hacs the Hyundai bluelink integration, custom brand icons, card mod, slider-entity-row and custom button-card, also install ftp addon from addons as it will make this easier.


1.	upload files from fonts into your www folder (local) (not the font folder but the files within)
2.	upload the folders ioniqa and ioniqb into your www folder (local) (not the font folder but the files within)
3.	Go to settings/Dashboards and then click the 3 dots in the top right and click resources. Click add resource and paste /local/loadfonts.js (make sure javascript module is selected, then click add resource again and paste /local/fonts.css and this time select style sheet.
4.	copy and paste the code from the (add to configuration file) into your configuration under your sensor lines. 
5.	Restart home assistant
6.	Now go to any page and add card, select add manually and click on any card, then click show editor and copy and paste the code from back view card into it and save
7.	Add another card, click show editor and copy and past the code from top view card into it, if your car is a left hand drive change the /local/ioniqb/ioniq5-top-rhd.png to /local/ioniqb/ioniq5-top-lhd.png, there are two of these lines right near the top


Sit back enjoy, Ill update the code if I add anymore (or if integration gets buttons added for start and stop charge in the future)

