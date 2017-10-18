# PasswordReset

Pairing Exercise:

We have created a skeleton project for a reset password screen.
The business logic for this must validate that the password is sufficiently complex before attempting to set it.

You must implement the logic for the PassWordValidator using TDD approach.

Acceptance criteria:

	• The validator must return true if the passwords match.
	• The validator must return false if the passwords do not match.
	• Passwords must be at least 8 characters in length
	• Password must not be greater than 20 characters in length
	• Password must contain both upper case and lower case characters
	• Passwords must contain at least one numeric character
	• The password must not have been used before
