- Output, Variables, and Input
- Numbers
- Booleans and Conditionals
- While Loops
- Randomness
- Lists
- Strings as Sequences
- For Loops
- Files
- Calling Functions and Methods
- Nested Loops
- Imports and the Math Library
- Turtle Graphics
- Timing

- images
- dictionaries
- oop
- duration
- times
- heights
- data
- visualization
- binary and hex
- game of life
- polars
- simulation
- codes
- Defining Functions (to do, player)
- Data Wrangling
- Sets and Tuples
- Modulo
- Nested Lists and Grids
- morse
- scorigami

- problem solving
- fibonacci
- recursion
- cartesian product
- tilings
- sorting
- search
- refactoring
- tooling
- random gen
- stacks
- vm
- c
- closures, scope
- design principles
- sierpinski

- flatten
- concurrency
- lattice
- regex-impl
- scope
- sudoku
- change
- ghost
- linked-list
- currency-conversion rates
- min-max
- towers
- binary-search
- clustering
- ring-buffer
- tail-recursion
- filter
- invariants
- metro
- shuffle
- stack
- amortized
- trees
- greedy - coins
- dp - bins
- k means
- max flow - scheduling

- shortest path
- queues
- graphs
- wikipedia

- robo-nav
- regex
- code-review
- Game of Life and Emergence
- Files, Formats, and Failure
- Generating Files
- Problem Solving and Pseudocode
- Sorting and Correctness
- Recursion
- Search and Backtracking
- Data Structures
- Objects and Value Types
- Functional Programming
- Design Principles and Refactoring
- Advanced Image Processing
- Numerical Simulation
- GFSsembly and the Machine Model
- Simulation and Monte Carlo

- symbol-names

# Unified CS Sequence: CS1, CS2, CS3, and Capstone

## CS1: Introduction to Programming

### Output, Variables, and Input

- Comments
- Printing strings
- Defining string variables
- Variable names
- Printing variables
- Printing variables with format strings
- Errors and debugging
- String input

**Problems**

- Hello (name)!
- Citations: Author. (Year). Title of Book. Publisher.
- Madlibs

### Numbers

- Numbers
- Integers vs. floats
- Basic numerical operators (`+ - * / // ** %`)
- Type errors
- Vars based on vars
- Compound operations
- Numerical functions (`round`, `abs`, `floor`, `ceil`) note Banker's rounding
- Reading and converting numerical input -- show type error without conversion
  first
- Validating user input
- Default inputs

**Problems**

- Unit conversion
- Dog years
- Distance formula
- Line equation from two points

| Symbol | Operation                |
| ------ | ------------------------ |
| `==`   | equal                    |
| `!=`   | not equal                |
| `<`    | less than                |
| `<=`   | less than or equal to    |
| `>`    | greater than             |
| `>=`   | greater than or equal to |

### Booleans and Conditionals

- Booleans
- Boolean operators (`and`, `or`, `not`)
- Equality
- Inequality operators
- Float equality
- Conditionals
- Conditional expressions

**Problems**

- Is positive
- Is whole
- Sign
- Even or odd
- Temperature converter
- Choose your own adventure
- Pluralizer

### While Loops

- Variable updates
- While loops
- Loop conditions and off-by-one errors
- The accumulator pattern
- `while True`
- `break`

**Problems**

- Prime test
- Prime factors
- Simplify fractions
- Running sum of inputs
- Running average of inputs
- 99 bottles of beer

### Randomness

- The `random` library
- `randint`, `choice`
- Seeding

**Problems**

- Math quiz
- Rock paper scissors
- Dice simulator
- Number guesser

### Lists

- List literals
- List indexing
- List concatenation
- List slicing
- Method call syntax
- List methods (`append`, `pop`, `sort`, `index`)
- Mutability
- The `in` operator

**Problems**

- Day of week calculator
- To-do list
- Prime factors list

### Strings as Sequences

- String indexing
- String slicing
- String sequence methods
- `in` on strings
- `split` and `join` — now that lists exist
- `upper`, `lower`, `strip`, `title`
- Chaining methods

**Problems**

- Normalize messy user input
- Shout and whisper

**Problems**

- Phone formatter (###) ###-####
- Palindromes
- Initials
- Acronym generator
- First list middle splitter

### For Loops

- For loops with `range`
- For loops with lists
- `break` and `continue`

**Problems**

- min, max, sum, average
- Fizz buzz
- Flash cards
- Caesar cipher
- Text bar chart

### Files

- Reading text files
- Iterating over lines
- Appending to text files
- Writing text files

**Problems**

- Anagrams
- Palindromes
- Persistent to do

### Calling Functions and Methods

- Calling functions
- Built-in functions
- Function arguments and arity
- Calling methods
- Methods vs. functions
- Reading documentation
- Mutations

**Problems**

- numbered list (enumerate, print)
- pw checker (len, startsWith, matches known list)
- Longest word

### Nested Loops

- Nested loops
- Loop variables in nested loops

**Problems**

- Times table
- Letter frequency

### Imports and the Math Library

- `import`
- The `math` library
- Constants and functions from a module

**Problems**

- Geometry calculator — area, volume, perimeter, surface area

### Turtle Graphics

- The turtle model: pen, heading, position
- Drawing with loops
- (p5 as an alternative graphics target)

**Problems**

- Polygons and spirals
- Write your name
- Turtle scene of your own design

### Timing

- The `time` library
- `sleep`
- Measuring elapsed time

**Problems**

- Typewriter
- Typing speed test
- Reaction timer

### CS1 Project Suggestions

- Mastermind
- Hangman
- Text adventure
- Quiz app
- Dice game of your own design
- Turtle scene
- ASCII art generator
- Personal budget tracker
- Choose-your-own-adventure, expanded
- Font with text input

---

## CS2 — Data Processing and Practical Applications

### Text Graphics

- Box-drawing characters
- Block characters
- Building output strings row by row

**Problems**

- Sparklines
- Helix
- ASCII circle

### Images

The first assignment of the year. Visual, immediate, and a natural use for the
nested loops CS1 ended on.

- Image coordinates
- Pixels
- Subpixels
- Color channels
- Color intuition; impossible colors
- Tuples as pixels
- PIL / Pillow

**Problems**

- Colors worksheet
- Max red
- Simple grayscale
- Better grayscale (perceptual luminance)
- Black and white
- Inverted
- Greenish
- Scaled
- ASCII art

Materials: `cs2/images/` (all eight solved), `cs3/image/notes/README.md`

### Defining Functions

- Defining functions
- Parameters and arity
- Return semantics
- Function side effects
- Default parameters
- Variable scope
- Variable aliasing

**Problems**

- Geometry functions

### Dictionaries

- Dictionaries
- Look up a value
- Add a value
- Update a value
- Increment a value
- Iterate over keys
- Check membership
- `get`
- `setdefault`
- Other dictionary methods
- Nested dictionaries

**Problems**

- Ice cream flavor voting
- Letter frequency with dictionaries
- Scrabble points
- Scrabble best word — over _Alice in Wonderland_
- Scrabble best alphabet — best word for each starting letter
- Scrabble lookup challenge

Materials: `cs2/scrabble/` (all four solved, `alice.txt`, `words.txt`)

### Sets and Tuples

- Sets and set operations
- Tuples
- Tuple unpacking
- Tuples as dictionary keys
- Choosing a container

**Problems**

- Anagram grouping
- Deduplication
- Vocabulary overlap between two texts
- Rock-paper-scissors lookup table keyed by tuples

**Problems**

- Modulo drill: `lastDigit`, `isEven`, `isWhole`, `gcd`, `calcDay`,
  `showHeight`, `factors`, loading animation — Materials: `cs3/modulo/`

### Comprehensions and Sorting

- List comprehensions
- Dictionary comprehensions
- Filtering in a comprehension
- `sorted` with `key`
- `min` and `max` with `key`

**Problems**

- Top-N words
- Leaderboard, rewritten
- Filter and rank a list of records

### Nested Lists and Grids

- Lists of lists
- Indexing a grid with `[row][col]`
- Iterating over a grid
- Building a grid from a string
- Printing a grid

**Problems**

- Pixel art
- Tic tac toe solved
- Memory game
- Minesweeper board generation
- Image as a grid — connect back to Unit 1

### Game of Life and Emergence

- Cellular automata
- The rules of Life
- Variants — HighLife and self-replication
- Emergence and chaos
- Turing machines
- Turing completeness
- Quines
- The Collatz conjecture
- Undecidability: problems with no algorithm

**Problems**

- Game of Life on a wrapping grid
- Life patterns: blinker, glider, octagon
- Implement a variant rule set
- Collatz sequence lengths — the CS1 sparkline, now analyzed
- Write a quine

Materials: `cs2/life/` (procedural and class versions, `examples.py`, worksheet)

### Files, Formats, and Failure

- CSV files
- Loading CSVs as lists of dictionaries
- JSON
- Reading and writing JSON
- Text encodings
- Exceptions and `try`/`except`
- Input validation
- Reading a traceback

**Problems**

- To-do app with JSON persistence
- Morse code encoder/decoder
- Keychain
- Wikipedia game

### Binary and Hexadecimal

- Binary
- Top-down and bottom-up conversion
- Hexadecimal
- Hex ↔ binary conversion
- Bytes
- Hex colors — back to Unit 1

**Problems**

- Binary and hex worksheet
- Conversion functions: `binToDec`, `decToBin`, `hexToDec`, `decToHex`
- `DEADBEEF` challenge
- Bit animation — hex frames to block characters

Materials: `cs2/binary/`, `cs2/bit-animate/`

### Data Wrangling

- Data scraping
- Records as dictionaries
- Lists of records
- Group-by with `setdefault`
- Aggregation
- Joining by key
- Deriving new fields
- Writing results back to CSV

**Problems**

- Eagles record
- All team records
- All team stats
- NBA scorigami

Materials: `cs2/football/` (`games.csv`, `stats.csv`, `scrape.js`)

### Data Frames

- What a data frame is
- Polars
- Selecting columns; slicing rows
- Filtering rows
- Making new columns
- Sorting and ranking
- Aggregation
- Immutability of data frames
- Data frame vs. loop: when each wins

**Problems**

- Rewrite the football analysis in Polars
- City population: density, change, percent change
- Largest cities, Texas cities, `is_in`

Materials: `cs2/data-vis/README.md` — a complete 39-section Polars tutorial,
with `cities.csv`, `census-at-school.csv`, `stack-overflow-2018-mini.csv`

### Data Visualization

- Notebooks
- Altair
- Choosing a chart type
- Axes, scales, labels
- Honest charts

**Problems**

- City counts bar chart
- Population scatter plot
- Percent-change chart
- First-digit population analysis (Benford's law)

Pair with the **Statistics Warnings** standalone lesson.

Materials: `cs2/data-vis/charts.ipynb`, `cs2/data-vis/football.py`

### Simulation and Monte Carlo

- Modeling with randomness
- Repeated trials
- Convergence
- Random walks

**Problems**

- Monte Carlo football season
- Dice-game odds
- Random walk plot

### Generating Files

Practical output: code that produces an artifact someone else opens.

- Writing structured text from templates
- f-strings for markup
- SVG basics: coordinates, shapes, paths, units
- Parameterizing a drawing

**Problems**

- Parametric wrench — Materials: `cs3/wrench/`
- Picture frame: nails, back, edges, stand — Materials: `cs3/picture-frame/`
- Generate an SVG chart from CSV data

### Encryption

- Substitution ciphers
- ROT13
- The Caesar cipher — review from CS1
- The Vigenère cipher
- Frequency analysis as cryptanalysis

**Problems**

- Caesar cipher
- Vigenère cipher
- Code-breaking challenge

Materials: `cs2/cipher/`

### CS2 Project Suggestions

- 2048
- Snake
- Cribbage scorer
- Personal data dashboard
- Image filter app
- Analyze your own Spotify / Strava / screen-time export
- Scrape and analyze a site you like
- Recipe or workout tracker
- Text-adventure engine with JSON levels
- Mandelbrot explorer — Materials: `cs2/relay/mandelbrot/`

---

## CS3 — Algorithms, Data Structures, and Problem Solving

Easy problems with hard solutions. The spine is **problem solving → sorting →
recursion → search**, then a second semester weighted toward simulation, images,
and machine model rather than more objects.

### Semester 1

### Problem Solving and Pseudocode

- What is CS3: practice vs. theory, programming vs. CS
- Easy problems with hard solutions
- Pseudocode
- Pseudocode templates
- Loop invariants
- Working a problem on paper before typing

**Problems**

- Maze worksheet
- `12(3)4` puzzle
- Chessboard tiling puzzle
- To-do list review

Materials: `cs3/invariants/`, `shared/pseudocode/`, `cs3/maze/quiz.odt`

### Sorting and Correctness

Non-recursive sorts first. Merge sort and quicksort wait for recursion.

- What makes something an algorithm
- What "sorted" means
- Correctness
- Comparison sorting
- Lexicographic comparison and Unicode
- In-place vs. copying
- Complexity intuition: counting operations
- Anagram detection — three approaches, three complexities

**Problems**

- Bubble sort
- Selection sort
- Insertion sort
- Emoji comparison
- Shuffle
- Anagram complexity comparison

Materials: `cs3/sorting/bubble-sort/`, `cs3/sorting/emoji-comparison.html`,
`cs3/sorting/click-drag.html`

### Recursion

- Recursive definitions
- Iterative vs. recursive functions
- Base case
- Recursive case
- Visualizing recursion
- Recursion with lists
- Memoization
- Tail recursion
- Default parameters as accumulators
- Lattice paths and counting

**Problems**

- Factorial
- Recursive summation
- `power2`, `total`, `contains`
- Fibonacci — naive, memoized, iterative
- Flatten a nested list
- Permutations
- Subsets
- Coin change
- Lattice paths
- Towers of Hanoi
- Sierpinski triangle
- Cartesian product → playing card deck → SET deck
- Merge sort
- Quicksort

Materials: `cs3/recursion/`, `cs3/fibonacci/`, `cs3/tail-recursion/`,
`cs3/flatten/`, `cs3/change/`, `cs3/cartesian/`, `cs3/towers/`, `cs3/tiles/`,
`cs3/sorting/merge-sort/`, `cs3/sorting/quicksort/`

### Search and Backtracking

- State-space search
- Depth-first search
- Breadth-first search
- Visited sets
- Path reconstruction with a parent map
- Short-circuit operators
- Backtracking
- Binary search
- Adversarial search and minimax

**Problems**

- Maze search — recursive DFS with backtracking animation
- Maze probe — hidden maze
- Montreal metro: DFS route
- Montreal metro: BFS shortest route
- Robo-nav
- Binary search
- Sudoku solver
- Tiling generation
- Ghost
- Min-max tic-tac-toe

Materials: `cs3/maze/`, `cs3/metro/` (`connections.json`), `cs3/sudoku/`,
`cs3/tiles/`

### Data Structures

- Abstract data type vs. implementation
- Stack
- Queue
- Ring buffer
- Linked list
- Sets, implemented
- Hash tables — how `dict` actually works
- Trees

**Problems**

- Stack-based Towers of Hanoi
- Ring buffer
- Linked list
- Implement `set`
- Implement a tiny `dict`
- Expression tree

### Semester 2

### Objects and Value Types

Deliberately small. Two ideas: bundling state with behavior, and making your own
types behave like built-in ones.

- Objects you already use: attributes vs. methods
- `__init__`
- Attributes and methods
- `self`
- `__repr__`
- Mutation
- Dunder methods and operator overloading
- `isinstance` and generic dispatch
- Reflected methods (`__rmul__`, `__radd__`)
- `__eq__`, `__lt__`, and sorting your own objects
- Value objects: immutable types whose operators return new values

**Problems**

- Player and Team classes
- To-do list, rewritten with classes
- Shapes: Rectangle, Square, Circle, Point, Line
- Football all-stats — refactor your CS2 dictionary solution into `TeamStats`
- Fraction class: GCD, simplification, addition formula, generic multiplication,
  r-methods
- Duration class
- Height class

Materials: `cs2/to-do/`, `cs2/geometry/`, `cs2/fraction/`, `cs2/duration/`,
`cs2/football/all-stats/`

### Functional Programming

- Pure functions and side effects
- Immutability
- Functions as values
- Higher-order functions
- `map`, `filter`, `reduce`
- Comprehensions as the Pythonic form
- Scope
- Closures
- Generators
- **FP vs. OOP as a design choice** — same problem solved both ways; what each
  makes easy and each makes hard

**Problems**

- Scope quiz
- Closure counter and accumulator
- Rewrite an imperative pipeline as a chain of transformations
- Solve one problem twice: once with classes, once with functions and data —
  then argue for one
- Generator pipelines

Materials: `cs3/mini-lessons/closures/`

### Design Principles and Refactoring

- Purity
- Modularity
- Orthogonality
- Composability
- Idempotency
- Don't repeat yourself
- Zero one infinity
- Immutability
- Least surprise
- Fail fast
- Single source of truth
- Declarativity
- The Zen of Python
- Refactoring is not code golf
- Comments that earn their keep
- Formatting and linting with Ruff

**Problems**

- The refactoring set — `clamp`, `priceTag`, `sign`, `isEven`, `sum`,
  `hexToDec`, `rpsWinner`, `primeFactors`, `countEvens`, `shout`; students are
  refactoring problems they first solved in CS1
- Comment-rewriting exercise
- Peer code review of a classmate's project

Materials: `cs3/refactoring/`, `cs3/code-review/`

### Advanced Image Processing

The CS2 image unit, revisited with real algorithms.

- Color distance
- Color palettes and quantization
- Convolution in one dimension — low-pass and high-pass filters
- Convolution in two dimensions — kernels
- Edge detection, sharpening, blurring
- Dithering
- k-means clustering

**Problems**

- 1D signal filters — low-pass, high-pass
- Palette matching against Endesga-16 — same accumulator pattern as Scrabble
  best-word
- Kernels: sharpen, edge, blur
- Floyd–Steinberg dithering
- k-means color clustering

Materials: `cs3/image/` (notes, `palette/`, `kernel/`, `clustering/`),
`cs3/filter/`

### Numerical Simulation

- Motion equations
- The Euler method
- Step size and accumulated error
- Gravitational acceleration
- The game loop
- Pygame basics

**Problems**

- Projectile motion
- Euler method by hand — fill in the table
- Simple orbit
- Full system: sun and multiple planets
- L1 Lagrange point
- Double pendulum

Materials: `cs2/orbit/` (README with equations, `projectile/`, `simple-orbit/`,
`full-system/`)

### GFSsembly and the Machine Model

Writing assembly, not building the machine — the VM implementation is Capstone.

- Registers and memory
- The instruction set: arithmetic, comparison, jumps, memory, I/O
- Labels and jumps as the only control flow
- Translating a Python loop into jumps
- Reading a specification
- Paper VM — tracing execution by hand

**Problems**

- Paper VM trace
- Write in GFSsembly: `range`, `sum`, `squares`, `maximum`
- Write in GFSsembly: `fizz-buzz`, `factorial`, `fibonacci`
- Write in GFSsembly: `collatz`, `prime-factors`, `chart`
- Write in GFSsembly: `selection-sort`
- Compare your assembly to the Python reference implementation

Materials: `cs3/vm/spec.md` (21 documented instructions), `cs3/vm/examples/` (11
worked programs), `cs3/vm/table.txt`, `cs3/vm/vm.py`, `cs3/paper-vm/`

### CS3 Project Suggestions

- Wordle solver
- 15-puzzle
- 2048
- Brainfork interpreter
- Fractal explorer
- Maze generator and solver
- Metro route planner
- Snake with AI
- Sudoku generator
- Chess engine
- Physics sandbox
- Pathfinding visualizer

---

## CS Capstone — Real-World Software Engineering

Concept units feeding month-scale projects. Every project produces a **written
artifact** and a **spoken artifact**.

### Strand — Technical Communication

Not one unit — a set of lessons distributed across the year, one or two per
cycle. This is the strand CS1–CS3 only sample with a single mini-lesson.

**Speaking**

- Lightning talks — five minutes, one idea
- Structuring a demo: show the product first, then the code
- Presenting to a non-technical audience
- User acceptance testing sessions — running one, taking feedback
- Whiteboard explanation
- Handling questions, and handling a demo that breaks
- Code review conversations: giving and receiving

**Writing**

- Markdown
- READMEs that get someone running in five minutes
- Technical documentation vs. reference vs. tutorial
- Writing a specification
- API documentation
- Commit messages, issues, pull request descriptions
- Bug reports — Materials: `shared/bug-report/` (real email threads and a
  response)
- Design docs and post-mortems

Materials: `shared/demo presentation/notes.md`

### Cycle 0 — Toolchain and Practice

- The terminal and the filesystem
- VSCode
- Git: commit, branch, merge, rebase, resolving conflicts
- GitHub: remotes, issues, pull requests, reviews, Actions
- Markdown
- Text editing skills, macros
- Screen recording, image editing
- Testing with `pytest` — unit vs. integration, what's worth testing
- Formatting and linting
- Writing a specification
- Code review etiquette

**Project**

- Take one CS3-scale program, write its spec, add tests, document it, publish it
  to GitHub with a real README

**Deliverables**

- Published repository
- Lightning talk

Materials: `cs2/items.txt`, `cs3/mini-lessons/git/`, `cs2/tooling/`

### Cycle 1 — Architecture, OOP, and Regular Expressions

Where inheritance lives — in the context of reading other people's code, which
is the only place it pulls its weight.

- Modularity at project scale
- Inheritance and `super`
- Overriding
- Polymorphism and duck typing
- Composition vs. inheritance
- Abstract interfaces
- When OOP is the right tool and when it isn't — revisit the CS3 FP unit
- Common design patterns, and why some are language deficiencies
- Regular expressions
- Implementing a small regex engine

**Problems**

- RPG battle game: `Character` → `Warrior`, `Wizard` — Materials:
  `cs2/inheritance/`
- Currency conversion
- Quiz-question types
- Refactor an inheritance hierarchy into composition, then argue which is better
- Regex exercises
- Regex engine implementation

**Deliverables**

- Written design doc comparing two architectures for the same feature

Materials: `cs3/regex/`, `cs3/regex-impl/`, `cs3/quiz-question/`

### Cycle 2 — Systems and Programming Languages

CS3 wrote GFSsembly programs. Capstone builds the machine that runs them, and
meets the language underneath.

- C: types, arrays, pointers, memory, manual allocation
- Segmentation faults
- Compiling C
- Compiled vs. interpreted languages
- Tradeoffs and speed
- Python bytecode
- Machine code vs. assembly
- Punch cards and history
- Profiling
- How a virtual machine works

**Problems**

- C warm-ups: sum, uppercase, parity, factorial, fizz buzz
- Profile the same program in C, Python, and GFSsembly
- Implement the GFSsembly VM
- Stretch: design and implement your own small language

**Deliverables**

- Written language or VM specification
- Technical talk on the architecture
- Profiling write-up

Materials: `cs3/c/`, `cs3/vm/` (`spec.md`, `C/`, `profiling/`)

### Cycle 3 — Data and Databases

- Data modeling
- Relational schema design
- SQL: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `JOIN`, `GROUP BY`
- SQLite
- Primary and foreign keys
- Indexes
- Transactions
- Normalization
- Migrations
- JSON as storage and interchange
- Testing code that touches a database

**Project**

- A database-backed application with a real domain and real CRUD

**Deliverables**

- Data model diagram and written spec
- Seeded test database
- UAT presentation to a non-technical audience

### Cycle 4 — Networking, APIs, and the Web

- How the internet works: DNS, TCP, HTTP
- Requests and responses
- Consuming REST APIs
- JSON payloads
- Designing and building an API
- Authentication basics and secrets handling
- Async and concurrency: `async`/`await`, event loops, race conditions
- Node and the JS ecosystem
- SVG
- Dash and Plotly dashboards
- Deploying with Cloudflare tunnels

**Project**

- A deployed service — an API, dashboard, or web app other people can load

**Deliverables**

- Live URL
- API documentation
- User-facing help docs
- Class demo

Materials: `cs3/concurrency/`, `cs2/data-vis/`

### Cycle 5 — Independent Capstone

Student-chosen, proposal-driven, the longest project of the year. Weekly
milestones and standups. Paired with one elective mini-unit chosen by class
interest:

- **AI and agents** — running models locally with Ollama, prompting, tool use,
  agent loops, evaluating output, where LLMs fail
- **Programmable hardware** — micro:bit, GPIO, sensors, the embedded loop, radio
  between devices as a first networking protocol — Materials: `intro/` (MakeCode
  nametag, dice, jumping, rock-paper-scissors, morse, morse-radio)
- **Notebooks and data science** — Jupyter, reproducibility, sharing analysis
- **Open-source contribution** — finding an issue, contributing upstream,
  surviving review

Also in this stretch: **CS interview prep** — technical questions on a
whiteboard, talking through your thinking, behavioral questions, résumé and
portfolio review, mock interviews.

**Deliverables**

- Project proposal and spec
- Milestone demos
- Test suite
- Complete documentation
- Final UAT presentation
- Written retro

### Capstone Project Suggestions

- A tool your school actually needs
- Multiplayer game server
- Personal API and dashboard for your own data
- A domain-specific language and its interpreter
- Hardware sensor logger with a web dashboard
- Local-LLM assistant for a real workflow
- Static site generator
- Chat application
- Scheduling or tournament system
- Contribution sprint on an existing open-source project

---

## Stub Directories

Empty directories in the repo, with a proposed disposition. Yours to overrule —
these are guesses about which were real plans and which were passing ideas.

### Build — placed in a unit above

| Directory                                                                 | Goes to          |
| ------------------------------------------------------------------------- | ---------------- |
| `cs2/comprehensions`                                                      | CS2 U6           |
| `cs2/exceptions`                                                          | CS2 U7           |
| `cs2/json`                                                                | CS2 U7           |
| `cs2/morse`                                                               | CS2 U7           |
| `cs2/wikipedia-game`                                                      | CS2 U7           |
| `cs2/nba-scorigami`                                                       | CS2 U9           |
| `cs2/football/monte-carlo`                                                | CS2 U12          |
| `cs2/encryption`                                                          | CS2 U14          |
| `cs2/flashcards`                                                          | CS1 U9           |
| `cs2/double-pendulum`                                                     | CS3 U11          |
| `cs3/shuffle`                                                             | CS3 U2           |
| `cs3/sierpinski`                                                          | CS3 U3           |
| `cs3/lattice`                                                             | CS3 U3           |
| `cs3/binary-search`                                                       | CS3 U4           |
| `cs3/robo-nav`                                                            | CS3 U4           |
| `cs3/min-max`, `cs3/ghost`                                                | CS3 U4           |
| `cs3/stack`, `cs3/queue`, `cs3/ring-buffer`, `cs3/linked-list`, `cs3/set` | CS3 U5           |
| `cs3/scope`, `cs3/scope-quiz`                                             | CS3 U7           |
| `cs3/code-review`                                                         | CS3 U8           |
| `cs3/image/dither`                                                        | CS3 U10          |
| `cs3/paper-vm`                                                            | CS3 U12          |
| `cs2/tooling`, `cs3/mini-lessons/git`                                     | Capstone Cycle 0 |
| `cs3/currency-conversion`                                                 | Capstone Cycle 1 |
| `cs3/regex`, `cs3/regex-impl`                                             | Capstone Cycle 1 |
| `cs3/concurrency`                                                         | Capstone Cycle 4 |
| `capstone/wikipedia`                                                      | Capstone Cycle 4 |

### Drop

| Directory             | Why                                      |
| --------------------- | ---------------------------------------- |
| `cs3/prng`            | Dropped from the sequence                |
| `cs3/advanced-images` | Duplicate of `cs3/image/`                |
| `cs3/clustering`      | Duplicate of `cs3/image/clustering/`     |
| `cs2/keychain`        | SVG only, no assignment — unclear intent |

### Also unplaced

`cs2/relay/mandelbrot/` and `cs3/relay/show-tiles/` — the "relay" format isn't
documented anywhere I can find. Mandelbrot appears above as a CS2 project
suggestion; the relay activity itself needs a note from you.

---

## Spirals Worth Naming Out Loud

Problems that recur at a higher level. Say so in class — the recognition is half
the lesson.

- **The best-so-far accumulator** — Scrabble best word (CS2 U4) → nearest
  palette color (CS3 U10). Identical shape, different domain. The CS3 image
  notes already quote the Scrabble code as the template.
- **Football** — procedural counting (CS2 U9) → dictionary group-by (CS2 U9) →
  Polars (CS2 U10) → refactored into classes (CS3 U6) → Monte Carlo simulation
  (CS2 U12).
- **Convolution** — 1D signal filters and 2D image kernels are the same
  operation (CS3 U10).
- **hexToDec** — written cleanly in CS2 U8, then met again as a 40-line disaster
  to refactor in CS3 U8.
- **The refactoring set** — `clamp`, `sign`, `isEven`, `rpsWinner`,
  `primeFactors`, `shout` are all CS1 problems. Students refactor code they
  wrote two years earlier.
- **Collatz** — drawn as a sparkline in CS1 U14, analyzed for complexity and
  undecidability in CS3 U9, written in assembly in CS3 U12.
- **Images** — CS2 U1 as pixel loops, CS3 U10 as algorithms.
- **Grids** — CS2 U2 nested lists → Game of Life (CS3 U9) → Sudoku and maze
  boards (CS3 U4).
- **GFSsembly** — programs written in CS3 U12, machine built in Capstone
  Cycle 2.

---

## Notes and Open Questions

1. **Naming conventions are inconsistent.** The house style is camelCase, but
   `cs3/filter/solved.py` and `cs2/inheritance/solved.py` are snake_case. Worth
   settling before CS1 students learn a style you'll contradict a year later.
2. **CS2 is the fullest course here** — fourteen units. If it needs trimming,
   Unit 12 (Simulation) and Unit 13 (Generating Files) are the least
   load-bearing; both survive as project suggestions.
3. **CS3 Unit 5 (Data Structures) is entirely unbuilt** — six empty directories.
   It's the largest single writing job in this plan.
4. **Does Capstone assume CS3?** Written as though yes. If students can enter
   without it, Cycle 0 needs a review unit.
5. **Two bugs in existing solutions**, left untouched:
   `cs2/football/eagles-record/solved.py:37` uses `tie` where the other branches
   use `ties`, and `cs2/images/ascii/solved.py` opens `dali.jpg` when the file
   is `cs2/images/dali.png`.

## Standalone Lessons

### Symbol Names

Naming the punctuation: backtick, tilde, caret, ampersand, pipe. Matching
worksheet plus reference table.

- Materials: `cs3/symbol-names/` (matching worksheet + solution table)
- Fits: any course, but most useful early in CS1

### Statistics Warnings

Correlation vs. causation, reverse causality, common cause, the medieval lice
example. Reading charts skeptically.

- Materials: `shared/README.md`
- Fits: any course; strongest alongside CS2's data-visualization unit

### Presentation Skills Mini-Lesson

One class period, repeated in CS1, CS2, and CS3 before project presentations.
Volume, pace, body language, showing the product before the code, avoiding
jargon, asking the audience questions, leaving time for questions, what to do
when your demo crashes.

- Materials: `shared/demo presentation/notes.md` (14-point critique checklist)
- Fits: every course, before end-of-semester project presentations
- Capstone expands this into a full strand — see Section 6
