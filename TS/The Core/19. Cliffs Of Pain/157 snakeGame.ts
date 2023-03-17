enum Directions {
  ERROR = -1,
  UP = 0,
  RIGHT = 1,
  DOWN = 2,
  LEFT = 3,
}

type Board = string[][];

type OffsetArray = {x: number, y: number}[];

enum Snake {
  HEAD = 0,
  BODY = 1,
}

type Position = {
  x: number;
  y: number;
}

type SnakeBodyElement = {
  position: Position;
  type: Snake;
}

class SnakeGame {
  private snake: SnakeBodyElement[] = [];
  private direction: Directions = Directions.ERROR;
  private width: number;
  private height: number;
  private snakeDied: boolean = false;

  constructor(gameBoard: Board) {
    this.width = gameBoard[0].length;
    this.height = gameBoard.length;
    this.initSnakeHead(gameBoard);
    this.backtrackAlongBody(this.snake[0].position, this.getReverseDirection(this.direction), gameBoard);
  }

  public getBoard(): Board {
    let board: Board = [];
    for (let y = 0; y < this.height; y++) {
      board[y] = [];
      for (let x = 0; x < this.width; x++) {
        board[y][x] = '.';
      }
    }

    this.snake.forEach(snake => {
      if (this.snakeDied) {
        board[snake.position.y][snake.position.x] = 'X';
        return;
      }

      if (snake.type == Snake.BODY) {
        board[snake.position.y][snake.position.x] = '*';
        return;
      }

      switch (this.direction) {
        case Directions.UP:
          board[snake.position.y][snake.position.x] = '^';
          break;
        case Directions.RIGHT:
          board[snake.position.y][snake.position.x] = '>';
          break;
        case Directions.DOWN:
          board[snake.position.y][snake.position.x] = 'v';
          break;
        case Directions.LEFT:
          board[snake.position.y][snake.position.x] = '<';
          break;
      }
    });

    return board;
  }

  private initSnakeHead(board: Board): void {
    // get head position and direction
    board.forEach((row, y) => {
      row.forEach((cell, x) => {
        switch (cell) {
          case '>':
            this.direction = Directions.RIGHT;
            this.snake.push({ position: { x, y }, type: Snake.HEAD });
            break;
          case '<':
            this.direction = Directions.LEFT;
            this.snake.push({ position: { x, y }, type: Snake.HEAD });
            break;
          case '^':
            this.direction = Directions.UP;
            this.snake.push({ position: { x, y }, type: Snake.HEAD });
            break;
          case 'v':
            this.direction = Directions.DOWN;
            this.snake.push({ position: { x, y }, type: Snake.HEAD });
            break;
        }
      });
    });
  }

  private getReverseDirection(direction: Directions): Directions {
    switch (direction) {
      case Directions.UP:
        return Directions.DOWN;
      case Directions.RIGHT:
        return Directions.LEFT;
      case Directions.DOWN:
        return Directions.UP;
      case Directions.LEFT:
        return Directions.RIGHT;
      default:
        return Directions.ERROR;
    }
  }

  private backtrackAlongBody(fromPosition: Position, direction: Directions, board: Board): void {
    // go backwards from head
    // if next position is valid and is not a snake
    // add to snake
    // else stop
    let nextPosition = this.getNextPosition(fromPosition, direction);
    const nextPositionIsValid = this.checkIfPositionIsValid(nextPosition);
    if (nextPositionIsValid && board[nextPosition.y][nextPosition.x] == '*') {
      // check if the last element of the snake array has the same position as nextPosition
      const lastSnakeElement = this.snake[this.snake.length - 1];
      if (!lastSnakeElement || lastSnakeElement.position.x !== nextPosition.x || lastSnakeElement.position.y !== nextPosition.y) {
        this.snake.push({ position: nextPosition, type: Snake.BODY });
      }
      this.backtrackAlongBody(nextPosition, direction, board);
    }

    // if the body takes a turn then i need to find the next direction
    const offsetsToCheck: OffsetArray = [{ x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }];
    offsetsToCheck.forEach(offset => {
      let offsetPosition = { x: fromPosition.x + offset.x, y: fromPosition.y + offset.y };

      const offsetPositionisInvalid = !this.checkIfPositionIsValid(offsetPosition);
      if (offsetPositionisInvalid) {
        return;
      }

      const offsetPositionIsNotSnake = !this.checkIfPositionIsSnake(offsetPosition);
      if (offsetPositionIsNotSnake && board[offsetPosition.y][offsetPosition.x]== '*') {
        // set the new direction
        if (offset.x === 0 && offset.y === -1) {
          direction = Directions.UP;
        } else if (offset.x === 1 && offset.y === 0) {
          direction = Directions.RIGHT;
        } else if (offset.x === 0 && offset.y === 1) {
          direction = Directions.DOWN;
        } else if (offset.x === -1 && offset.y === 0) {
          direction = Directions.LEFT;
        }

        // check if the last element of the snake array has the same position as offsetPosition
        const lastSnakeElement = this.snake[this.snake.length - 1];
        if (!lastSnakeElement || lastSnakeElement.position.x !== offsetPosition.x || lastSnakeElement.position.y !== offsetPosition.y) {
          this.snake.push({ position: offsetPosition, type: Snake.BODY });
        }
        this.backtrackAlongBody(offsetPosition, direction, board);
      }
    });
  }

  private getNextPosition(fromPosition: Position, direction: Directions): Position {
    let nextPosition: Position = { x: 0, y: 0 };
    switch (direction) {
      case Directions.UP:
        nextPosition = { x: fromPosition.x, y: fromPosition.y - 1 };
        break;
      case Directions.RIGHT:
        nextPosition = { x: fromPosition.x + 1, y: fromPosition.y };
        break;
      case Directions.DOWN:
        nextPosition = { x: fromPosition.x, y: fromPosition.y + 1 };
        break;
      case Directions.LEFT:
        nextPosition = { x: fromPosition.x - 1, y: fromPosition.y };
        break;
    }

    return nextPosition;
  }

  private checkIfPositionIsValid(position: Position): boolean {
    return position.x >= 0 && position.x < this.width && position.y >= 0 && position.y < this.height;
  }

  private checkIfPositionIsSnake(position: Position): boolean {
    return this.snake.some((snakePart, i) => {
      if ( i === this.snake.length - 1) {
        // dont check tail
        return false;
      }
      return snakePart.position.x == position.x && snakePart.position.y == position.y
    });
  }

  public slither(command: string): void {
    if (this.snakeDied) {
      return;
    }

    switch (command) {
      case 'F':
      this.moveForward(this.direction);
      break;
      case 'R':
      this.turnRight(this.direction);
      break;
      case 'L':
      this.turnLeft(this.direction);
      break;
      default:
      console.log('error');
    }
  }

  private moveForward(direction: Directions): void {
    let prevPosition = this.snake[0].position;
    let nextPosition = this.getNextPosition(prevPosition, direction);

    const nextPositionIsInvalid = !this.checkIfPositionIsValid(nextPosition);
    const nextPositionIsSnake = this.checkIfPositionIsSnake(nextPosition);
    if (nextPositionIsInvalid || nextPositionIsSnake) {
      this.snakeDied = true;
      return;
    }

    const snakeAlive = !this.snakeDied;
    if(snakeAlive) {
      this.snake[0].type = Snake.BODY; // change head to body
      this.snake.unshift({ position: nextPosition, type: Snake.HEAD }); // add new head
      this.snake.pop(); // remove tail
    }

  }

  private turnRight(direction: Directions): void {
    switch(direction) {
      case Directions.UP:
        this.direction = Directions.RIGHT;
        break;
      case Directions.RIGHT:
        this.direction = Directions.DOWN;
        break;
      case Directions.DOWN:
        this.direction = Directions.LEFT;
        break;
      case Directions.LEFT:
        this.direction = Directions.UP;
        break;
    }
  }

  private turnLeft(direction: Directions): void {
    switch(direction) {
      case Directions.UP:
        this.direction = Directions.LEFT;
        break;
      case Directions.RIGHT:
        this.direction = Directions.UP;
        break;
      case Directions.DOWN:
        this.direction = Directions.RIGHT;
        break;
      case Directions.LEFT:
        this.direction = Directions.DOWN;
        break;
    }
  }
}

function solution(gameBoard: Board, commands: string): Board {
  const snakeGame = new SnakeGame(gameBoard);

  commands.split('').forEach(command => {
    snakeGame.slither(command);
  });

  return snakeGame.getBoard();
}

function test(): void {
  const tests: { gameBoard: Board, commands: string, answer: Board }[] = [
    /* { gameBoard: [[".",".",".","."],
                  [".",".","<","*"],
                  [".",".",".","*"]],
      commands: 'FFFFFRFFRRLLF',
      answer: [[".",".",".","."],
               ["X","X","X","."],
               [".",".",".","."]],
    }, {
      gameBoard: [[".",".","^",".","."],
                  [".",".","*","*","."],
                  [".",".",".","*","*"]],
      commands: 'RFRF',
      answer: [[".",".","X","X","."],
               [".",".","X","X","."],
               [".",".",".","X","."]],
    },  {
      gameBoard: [[".",".","*",">","."],
                  [".","*","*",".","."],
                  [".",".",".",".","."]],
      commands: "FRFFRFFRFLFF",
      answer: [[".",".",".",".","."],
               ["<","*","*",".","."],
               [".",".","*",".","."]],
    }, */ {
      gameBoard: [[".",".",".",".",".",".",".",".","."],
                  [".",".","*","*","*","*",".",".","."],
                  [".",".",".",".",".","*",".",".","."],
                  [".",".",".",".",".","v",".",".","."],
                  [".",".",".",".",".",".",".",".","."],
                  [".",".",".",".",".",".",".",".","."],
                  [".",".",".",".",".",".",".",".","."]],
      commands: "LFLFFFLFFFFFFLFFFFFFLFFFFFFFFLFFFFFF",
      answer: [[".",".",".",".",".",".",".",".","^"],
               [".",".",".",".",".",".",".",".","*"],
               [".",".",".",".",".",".",".",".","*"],
               [".",".",".",".",".",".",".",".","*"],
               [".",".",".",".",".",".",".",".","*"],
               [".",".",".",".",".",".",".",".","*"],
               [".",".",".",".",".",".",".",".","."]],
    },
  ];

  tests.forEach(test => {
    console.log('solution: ');
    console.table(solution(test.gameBoard, test.commands));
    console.log('answer: ');
    console.table(test.answer);
  });
}

test();