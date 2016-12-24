(function () {
angular.module('ngNoughtsAndCrosses', [])
    //  Make a value that can be used to represent the board 
    .value('Grid', {
            "a1" : "", "a2" : "", "a3" : "",
            "b1" : "", "b2" : "", "b3" : "",
            "c1" : "", "c2" : "", "c3" : "" 
    })
    .controller('ctrl', function (Grid) {
        var vm = this;    
        vm.ComputerOpponent = true;   

        //  Let's initialise the board here with the game status, turn, player number and some messages
        vm.ResetGame = function () {
            for(var propertyName in Grid) { 
                Grid[propertyName] = '';
            }
            vm.Grid = Grid;
            vm.GameOver = false;
            vm.Player = 'X';
            vm.Message = '';   
            vm.TurnNumber = 0;
            vm.ShowModal = false;             
        }

        //  Event that is fired when the player takes a turn
        vm.TakeTurn = function (e) {                       
            if (vm.Grid[e] == '' && ! vm.GameOver) {
                //  Place the counter on the board
                vm.Grid[e] = vm.Player;                    
                
                //  Check to see if it was a winning turn with this matrix
                if (
                    (vm.Grid.a1 == vm.Player && vm.Grid.a2 == vm.Player && vm.Grid.a3 == vm.Player) ||
                    (vm.Grid.b1 == vm.Player && vm.Grid.b2 == vm.Player && vm.Grid.b3 == vm.Player) ||
                    (vm.Grid.c1 == vm.Player && vm.Grid.c2 == vm.Player && vm.Grid.c3 == vm.Player) ||
                    (vm.Grid.a1 == vm.Player && vm.Grid.b1 == vm.Player && vm.Grid.c1 == vm.Player) ||
                    (vm.Grid.a2 == vm.Player && vm.Grid.b2 == vm.Player && vm.Grid.c2 == vm.Player) ||
                    (vm.Grid.a3 == vm.Player && vm.Grid.b3 == vm.Player && vm.Grid.c3 == vm.Player) ||
                    (vm.Grid.a1 == vm.Player && vm.Grid.b2 == vm.Player && vm.Grid.c3 == vm.Player) ||
                    (vm.Grid.a3 == vm.Player && vm.Grid.b2 == vm.Player && vm.Grid.c1 == vm.Player)
                ) {
                    vm.Message = 'Player ' + vm.Player + ' is the winner :)';
                    vm.GameOver = !vm.GameOver;
                    vm.ShowModal = true;
                }

                //  Increment the turn number, are we on turn 9? then it's a draw
                vm.TurnNumber++;
                if (vm.TurnNumber == 9 && !vm.GameOver) {
                    vm.GameOver = false;
                    vm.Message = 'It\'s a draw! Everyone is a winner!';  
                    vm.ShowModal = true;
                }
                else {
                    // It's the next turn then!  
                    vm.Player = (vm.Player == 'X') ? 'O' : 'X';
                }

                //  If it's a O then its the computer's turn
                if (vm.ComputerOpponent && vm.Player == 'O') {    
                    var emptyCells = [];            
                    for(var propertyName in Grid) { 
                        if (Grid[propertyName] == '') {
                            emptyCells.push(propertyName)
                        }        
                    }      
                    vm.TakeTurn(emptyCells[Math.floor(Math.random() * emptyCells.length)])
                }
                
            }
        }

        //  Toggle the opponent and restart the game
        vm.ToggleOpponent = function () {
            vm.ComputerOpponent = !vm.ComputerOpponent;  
            vm.ResetGame();  
        }
    })
})();
