# Dinamic generated form

Input data provided in JSON schema

Output is organised as alarm message.
However, the output object could be sent to any destination

# The form should include the following fields:

name
    text based
    should enforce the need for a first and last name (separated by a space)
date of birth
    date based
    required, should be older than 18
gender
    options based (male/female)
    optional
contact number
    text based
    optional
    allow for multiple values (e.g. mobile, home, etc)
require guardian consent
    checkbox
    optional
guardian details (name, contact)
    text based
    required/applicable if consent checkbox is ticked

# to be done

at present form fields are not cleared after the form submission 
    because states are manipulated by Components
solution: useReducer + useContext or Redux to manipulate with global state by Form Component 
