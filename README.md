# Password-Generator

Our assignment this week was to create a Javascript file to link with the provided HTML and CSS files to operate a random Password Generator website.

![Provided HTML](https://user-images.githubusercontent.com/98381243/157602347-914b0b3e-f1f2-4c67-b952-f80026858c3e.png)

When clicking the "Generate Password" button, there is no response from the page. Our assignment was to create prompts and questions for a user to follow in order to generate the random password, and we do this by applying what we've learnt this week about Javascript.

In order for the "Generate Password" button to become functional, we need to apply an "event listener" into the Javascript file.

![Event Listener Password Generator](https://user-images.githubusercontent.com/98381243/157601580-f9e291d1-65d9-4600-b3ea-ce86ce24e029.png)

Once the event listener is applied, when we click the "Generate Password" button, a series of prompts will appear on the page asking us to specify how many and what type of characters we want for the password.

![Password Generator Prompt VSC](https://user-images.githubusercontent.com/98381243/157602649-2e78bc75-350e-4cd9-b431-8b0cf709ddae.png)

The first prompt asks the user how long they want their password to be, specifying that it needs to be between 8 and 128 characters. When a number is selected outside of this range, a separate prompt appears telling the user to choose a number in the specified range.

![Character Range Prompt](https://user-images.githubusercontent.com/98381243/157603626-e87d2d25-e2f5-4027-8113-3854ac16146e.png)

 The following prompts ask the users if they want lowercase letters, uppercase letters, numbers and special characters in the password. If a user does not want any of the previous criteria in their password, a prompt will appear informing the user that a password cannot be generated without at least one of the criteria being selected.

![No Criteria Selected Prompt](https://user-images.githubusercontent.com/98381243/157603799-f1722a8a-d56e-459a-b54c-5a111198226a.png)

When all the criteria have been met, then a random password will appear in the textbox.

![Generated Password](https://user-images.githubusercontent.com/98381243/157604159-be06e1d4-eb48-4eb2-b6e1-673cbdd07ac4.png)

Link to the finished product: https://androneus14.github.io/Password-Generator/
