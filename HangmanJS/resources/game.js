var Hangman = (function() {
    'use strict';

    var self = window;    

    //  We're starting a new game so let's go!
    window.onload = function () {
        self.GameOver = false; 
        self.TurnsLeft = 9;    
        self.Alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');                
        ResetGame();     
        document.addEventListener("keydown", keyDownHandler);
    }

    function keyDownHandler(e) {
        var pressedKey = e.key.toLowerCase();
        if (!self.GameOver && pressedKey.match(/[a-z]/i)) {
            TakeTurn(pressedKey, document.getElementById("Key_" + pressedKey));
        }
    }   

    //  Function that resets the game to start again
    function ResetGame () {
        self.GameOver = false; 
        self.TurnsLeft = 9;    
        self.Alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        document.getElementById("GameOverModal").style.display = 'none';        
        document.getElementById('TurnsLeft').innerHTML = self.TurnsLeft;
        
        CreateNewWord();

        // Unhide any hidden letters        
        var _alphabetLetters = document.getElementById("Alphabet").children;
        for(var letter in _alphabetLetters) {
            if (_alphabetLetters[letter].style) {
                _alphabetLetters[letter].style.display = '';
            }
        }        
    }

    //  Event that happens when the player takes their turn
    function TakeTurn (e, t) {                                 
        //  Let's first take the item from the array if it exists, and see if its in the hidden word
        var index = self.Alphabet.indexOf(e);
        if (index > -1) {
            self.Alphabet.splice(index,1);         
            var occs = FindOccurences(self.HiddenWord, e);
            if (occs.length > 0) {
                occs.map(function (i) {
                    self.RevealedWord = self.RevealedWord.replaceAt(i, e);                
                    document.getElementById('RevealedWord').innerHTML = self.RevealedWord;                
                    if (self.HiddenWord === self.RevealedWord.split('/').join(' ')) {
                        document.getElementById('Message').innerHTML = 'Winner!';
                        self.GameOver = true;                        
                    }
                })
            }
            else {
                self.TurnsLeft--;
                document.getElementById('TurnsLeft').innerHTML = self.TurnsLeft;

                if (self.TurnsLeft == 0) {
                    document.getElementById('Message').innerHTML = 'Loser :(';
                    self.GameOver = true; 
                }
            }

            //  If game over, show the modal    
            document.getElementById("GameOverModal").style.display = self.GameOver ? 'block' : 'none';
            
            //  Finally remove the letter from the screen
            t.style.display = 'none';           
        }
    } 

    //  Find all the occurences of a letter in a string
    function FindOccurences (str,letter) {
        var indices = [];
        for(var i=0; i<str.length;i++) {
            if (str[i] === letter) {
                indices.push(i);
            }
        }
        return indices;
    }

    //  Function to replace a position of a string
    String.prototype.replaceAt = function(index, character) {
        return this.substr(0, index) + character + this.substr(index+character.length);
    }

    //  Function that is used to create a new word, let's choose a random one from the provided list!
    function CreateNewWord () {
        var randomWords = [
            'the damned united',
            'horrid henry',
            'the blade itself',
            'a song of ice and fire',
            'harry potter and the deathly hallows',
            'super mario land',
            'its always sunny in philadephia',
            'mr robot',
            'westworld'
        ]
        self.HiddenWord = randomWords[Math.floor(Math.random() * randomWords.length)];
        self.RevealedWord = '';
        for (var i=0;i<self.HiddenWord.length;i++) {
            self.RevealedWord += '-';
        }

        //  Replace any spaces with slashes for readability by the user     
        FindOccurences(self.HiddenWord, ' ').map(function (i) {
            self.RevealedWord = self.RevealedWord.replaceAt(i, '/');                  
        })
        
        document.getElementById('RevealedWord').innerHTML = self.RevealedWord;
        document.getElementById('Answer').innerHTML = self.HiddenWord;
    }

    return {
        ResetGame : ResetGame,
        TakeTurn : TakeTurn    
    }
})();