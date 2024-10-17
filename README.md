# ioniq5 & ioniq 6 cards for Home Assistant

# Custom card layouts with images for home assistant for the ionic 5 and ioniq 6


![logo](https://raw.githubusercontent.com/rchiileea/ioniq5-and-ioniq6-dashboard-for-ha/refs/heads/main/Screenshot%202024-10-17%20155145.png)

First off, let me start by what you 100% need to use this,

IF you have a 2024 ioniq 5, please check your entities and if they contain 2024 before the name if so replace all code with 2024_ioniq_5 instead of ioniq_5

Download from hacs the Hyundai bluelink integration, custom brand icons, card mod, slider-entity-row and custom button-card, also install ftp addon from addons as it will make this easier.


1.	Upload files from fonts into your www folder (local) (not the font folder but the files within)
	
2.	Upload the folders ioniq5a, ioniq5b (or ioniq6a, ioniq6b) as well as charge port into your www folder (local)

3.	First Start off adding the Fonts and files you have uploaded from fonts folder to home assistant, to do this settings/Dashboards and then click the 3 dots in the top right and click resources. Click add resource and paste /local/loadfonts.js (make sure javascript module is selected, then click add resource again and paste /local/fonts.css and this time select style sheet.

4.	# NEXT GO TOO (add to configuration file.yaml) and open it, change only the text in bold and replace with the sensors asked for that you have in your hyundai/kia integration you installed.  # Double check before continuing and copy and paste it into your configeration.
	
5.	Go to developer tools, scroll down and click template entities

6.	Decide if you want both top down and rear view, the actual two bottow ones in the pic are the alt versions.

7.	Now open up the yaml of your choice, the ioniq 5 ones are filled in already, but for the ioniq 6 you have to open the yaml file from here and change the entities to the ones for your car, sorry I could not do this as I dont have a ioniq 6 to get the correct entites from.




# For the top down view if your car is left hand drive use these instead

------------------------------------------------------------

type: picture-elements
image: /local/ioniq5b/ioniq5-top-lhd.png ((or for 6 users use /local/ioniq6b/ioniq6-top-lhd.png )
elements:
  - type: image
    entity: device_tracker.ioniq5_device_tracker (ioniq 6 users put your device tracker in here for the car)
    image: /local/ioniq5b/ioniq5-top-lhd.png (or for 6 users use /local/ioniq6b/ioniq6-top-lhd.png )
    style:
      left: 50%
      top: 50%
      width: 100%
      heigth: 100%

  - type: image
    entity: binary_sensor.ioniq_5_steering_wheel_heater (ioniq 6 users put your steering wheel heater sensor in here)
    state_image:
      'off': /local/ioniq5b/wheel--lhd.png 
      'on': /local/ioniq5b/wheel-on--lhd.png  (ioniq 6 users only need to change this entity to ---  'on': /local/ioniq6b/wheel-on--lhd.png

--------------------------------------------------------------


Sit back enjoy, Ill update the code if I add anymore (or if integration gets buttons added for start and stop charge in the future)


------------------------------------------------------------
