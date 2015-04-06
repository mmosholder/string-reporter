var word = prompt("give me a word!");
if (word != null) {
	alert("Your word is " + word + ". There are " + word.length + " characters in your word!")
	alert("The third letter in your word is " + word.charAt(2))
	alert("Here's how your word looks in all lowercase: " + word.toLowerCase())
	alert("Here's how your word looks in all uppercase; " + word.toUpperCase())
	alert("Example: " + word + ". " + "What a great word.")
	alert("Subword: " + word.substring(1, 4))
}