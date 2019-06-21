# Habit-Builder
Final Project of Bootcamp | Habit Builder App

#Jonathan's change notes
**6/13/2019**

-created client folder

-removed any folders associated with "create-react-app" from root directory, and moved them 
into the "client" folder

-separated the express package.json from the react package.json

Setup scripts in the package.json of the express server so:
-"npm start" will run nodemon on the express server,
-it will cd into the "client" folder and start up the react application
-When saving with nodemon, it will only auto-reload the backend, and not the react application.

*This will prevent react from having to re-render the entire application any time an adjustment is made
in the backend.

#Mei's Homepage Content
**6/21/2019**

# Homepage Content 
```html
<div class="step1">   

	<h1>
    	Crushin’it lets you develop long term habits that help growth and get more done. 
	</h1>

    <h2>
        Crushin’it’s checking-in method enables you to focus on the process of building habits daily instead of the results. This makes it a lasting change. Don't punish yourself for missing, reward yourself for achieving. 
    </h2>

    <img scr="builder-hard-hat.png" alt="Construction worker icon">
</div>

<div class="step2">
    <h2 class="step2-option">
    	How to Build Long Term Habits 
	</h2>
    <h4>
        Studies have said most people build a longer term habit in 66 days. 
    </h4>
	
    <div class="step2-option option1 "> 
		<h4>
    		Process Oriented
		</h4>
		<h6>
			Building long term habits means being okay with admitting you missed a day. Focus on building the process. Successful people 
		</h6>
	</div><!-- end of option1 -->
    
    <div class="step2-option option2"> 
        <img src="results-truck.png" alt="truck with 3 stacks">
		<h3>
    		Results Oriented
		</h3>
		<h6>
			If you're motivated by seeing results, we recommend you use the 3 sets of 21 days method. This way if you miss a check-in you'll have a chance to reset. This is a useful technique when utilizing habits. 
		</h6>
	</div> <!-- end of option2 -->
    
</div> <!-- end of option step2 -->
<div class="step">
    <h2>
        Start being your best self today! 
    </h2>
    <h4>
    	Change happens by checking in daily. Let us help with that. 
    </h4>
    <button>
        Sign Up  
    </button>
</div>

    ```

