# console-cartridge-contract

<p align="center">
  <img width="674" height="302" src="./docs/img/tmnt_cartridge.png">
</p>

A design pattern to help separate implemenation details from execution.

## Table of Contents

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

This isn't a concept that is too far removed from the conceit itself, which is of a digital computer and the role of the physical hardware in [Von Neumann archtitecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture).

&#8224; [Not the band](https://youtu.be/I_QJwR6D9d4). RIP Andy Gill.
