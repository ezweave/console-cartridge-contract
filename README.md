# console-cartridge-contract

<p align="center">
  <img width="674" height="302" src="./docs/img/tmnt_cartridge.png">
</p>

A design pattern to help separate implemenation details from execution.

## Table of Contents

- [Introduction](#introduction)
- [Is It A Design Pattern](#is-it-a-design-pattern)
- [Lexicon](#lexicon)
  - [Cartridge](#cartridge)
  - [Console](#console)
- [Benefits](#benefits)
- [Drawbacks](#drawbacks)

## Introduction

_Design Patterns_ are a [relatively well known concept](https://en.wikipedia.org/wiki/Design_pattern), first widely popularized with the ["Gang of Four" book](https://en.wikipedia.org/wiki/Design_Patterns) in 1994&#8224;. In the world of [Object-Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming)(OOP), Design Patterns became widely popular advocating this "behavior by composition" philosophy that permeates much OOP heavy languages.

_However_, not all of these patterns fit into a more [_Functional Programming_](https://en.wikipedia.org/wiki/Functional_programming) paradigm, where the rubric is "separate data from behavior".

This has been a tricky beast to wrangle within the world of ECMAScript (JavaScript, TypeScript, etc) especially considering JavaScript (JS) to be rooted in the [_Functional Programming_ paradigm](https://en.wikipedia.org/wiki/JavaScript#Creation_at_Netscape).

Many patterns just don't seem to fit well with this practice or are, at best, adopted inconsistently leading to wildly divergent code styles.

How does that relate to this project?

We envisioned an archtiecture where higher order patterns than those commonly described in typical _Design Pattern_ language is encapsulated in such a way that you could separate the code entirely. Imagine, if you will a system that is composed of two pieces:

- A module that contains specific details regarding implementation.
- A module that contains the machinery that executes the implementation via pattern.

Let's use the analogy (conceit, really) that this entire project is founded on:

- A **Cartridge** is implemenation details that fullfill a contract. The IO logic to retrieve a document. The transformers to convert the document to another structure, etc.
- A **Console** knows how to execute the steps in the _Cartridge_ but doesn't know anything about the internals of the _Cartridge_. E.g. the _Console_ knows it needs to execute functions from the contract in a specific order, how to log each step, and how to control workflow and execution.

<p align="center">
  <img width="800" src="./docs/img/n64.png">
</p>

This isn't a concept that is too far removed from the conceit itself, which is of a digital computer and the role of the physical hardware in [Von Neumann archtitecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture).

&#8224; [Not the band](https://youtu.be/I_QJwR6D9d4). RIP Andy Gill.

[Top](#table-of-contents)

## Is It A Design Pattern?

_Design Patterns_ are often considered "dirty words" or smack of ["code smell"](https://en.wikipedia.org/wiki/Code_smell). A times this is warranted as for every _Design Pattern_ there are a litany of [_Anti-patterns_](https://en.wikipedia.org/wiki/Anti-pattern). OOP frameworks like Java and C# have often been riddled with boilerplate interfaces and a level of indirection and abstraction that makes the most costly aspect of software engineering (maintenance) difficult.

However, this could be viewed as a _structural_ Design Pattern composed of concepts from existing patterns.

Chiefly:

- A [facade](https://en.wikipedia.org/wiki/Facade_pattern).
- A [bridge](https://en.wikipedia.org/wiki/Bridge_pattern).

But let's assume that you're not familiar with those patterns and talk more broadly about what we're proposing.

[Top](#table-of-contents)

## Lexicon

In our system a _console_ is the machinary the exercises an interface. In our example code, we have the classic "PetShop" concept. The machine that is used to find and purchase items from the pet shop is the _console_. It does not know anything about the particulars of a given PetShop vendor's code. It merely exposes/exercises the code necessary to shop and buy from any vendor.

The vendor specific code, in the PetShop example, _abstracts_ the details of interacting with a given vendor. This is a _cartridge_.

For example, vendors share broad actions like:

- Get me offers for a given good. E.g. what are your prices on cans of Alpo?
- Let me buy said good. E.g. I would like to buy 10 cans of Alpo.

But the specifics may vary widely. One pet shop chain's API may only support [_SOAP_](https://en.wikipedia.org/wiki/SOAP) while another may be JSON via [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). One chain may require a "session" to be created for interacting with their API.

[Top](#table-of-contents)

### Cartridge

Ideally, for a given application, you would be largely defining _cartridges_. There are two phases to this:

1. Defining the shape of your application's cartridge. This is akin to the `facade` pattern. In our example, `PetShoppingSupplier` is the interface that meets the broad requirements of our system's functionality.
1. Implementining instances of your cartridge. In our example, we would write a `PetShoppingSupplier` cartridge for each vendor. E.g. one is written for PetSmart, one for PetCo, et cetera.

At first blush, this does seem akin to a simple _facade_

[Top](#table-of-contents)

### Console

[Top](#table-of-contents)

## Benefits

[Top](#table-of-contents)

## Drawbacks

[Top](#table-of-contents)
